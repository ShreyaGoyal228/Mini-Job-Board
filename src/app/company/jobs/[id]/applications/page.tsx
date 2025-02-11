'use server'
import { Button } from '@/components/ui/button'
import { Card ,CardContent , CardTitle,CardHeader} from '@/components/ui/card'
import { db } from '@/server/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import ApplicationCard from './application-card'

export default async function JobApplications ({params}:{params:{id:string}}) {
    //finding the applications with this jobId that is params.id
    const job=await db.job.findFirst({
     where:{
      id:params.id
     },
     include:{
      applications:true
     },
      orderBy:{
        createdAt:"desc"
      }
    })
   if(!job)
   {
     redirect("/company/jobs")
   }
  return (
    <div className="container mx-auto py-8 px-4">
    {/* Job Overview Section */}
    <Card className="mb-8">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 mb-1">Job Position</p>
            <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
            <p className="text-gray-600">{job.company}</p>
          </div>
          <Link href="/company/jobs">
            <Button variant="outline">Back to Jobs</Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Total Applications</p>
            <p className="text-lg font-medium">{job.applications.length}</p>
          </div>
          <div>
            <p className="text-gray-500">Location</p>
            <p className="text-lg font-medium">{job.location}</p>
          </div>
          <div>
            <p className="text-gray-500">Category</p>
            <p className="text-lg font-medium">{job.category}</p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Applications List */}
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Applications</h2>
      
      {job.applications.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-500">No applications received yet.</p>
          </CardContent>
        </Card>
      ) : (
        job.applications.map((application) => (
          <ApplicationCard application={application}/>
        ))
      )}
    </div>
  </div>
  )
}
