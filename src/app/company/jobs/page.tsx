'use server'

import { db } from "@/server/db"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, ChevronLeft, DollarSign, Edit, MapPin, MoreVertical, Plus, Trash2, Users } from "lucide-react"
import EditDeleteDropDown from "./edit-delete-dropdown"
export default async function CompanyJobs() {
    const jobs = await db.job.findMany({
        where: {
            deletedAt: null
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
                <Link href="/">
                    <Button
                        variant="ghost"
                        className="gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 md:px-4"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="hidden sm:inline">Back to Home</span>
                        <span className="sm:hidden">Back</span>
                    </Button>
                </Link>
                <Link href="/company/jobs/new">
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        <span className="hidden sm:inline">Post New Job</span>
                        <span className=" sm:hidden">New Job</span>
                    </Button>
                </Link>
            </div>
            <div className=" bg-white shadow-sm rounded-lg p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Company Job Postings
                </h1>
            </div>

            {jobs.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-2xl text-gray-600">
                        You haven't posted any jobs yet. Click the "Post New Job" button to create your first job listing.
                    </p>
                </div>
            ) : (
                <div className="px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <Card
                            key={job.id}
                            className="relative hover:shadow-xl transition-all duration-300 transform bg-white"
                        >
                            <div className="absolute right-6 top-6">
                            <EditDeleteDropDown jobId={job.id}/>
                            </div>
                            <CardHeader className=''>
                                <CardTitle className="text-xl font-semibold text-gray-800">
                                    {job.title}
                                </CardTitle>
                                <CardDescription className="flex items-center text-gray-600">
                                    <Briefcase className="mr-2 text-blue-500" size={16} />
                                    {job.company}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3 mb-4 ">
                                    <div className="flex items-center text-gray-500">
                                        <MapPin className="mr-2 text-green-500" size={16} />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                        <DollarSign className="mr-2 text-purple-500" size={16} />
                                        <span>{job.salaryRange}</span>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded inline-block">
                                        {job.category}
                                    </div>
                                </div>

                                <Link href={`/company/jobs/${job.id}/applications`}>
                                    <Button
                                        variant="outline"
                                        className="w-full hover:bg-blue-50 hover:border-blue-300"
                                    >
                                        View Applications
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}