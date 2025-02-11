export const dynamic = 'force-dynamic';
import Link from 'next/link'
import { 
  Briefcase, 
  ChevronLeft,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { db } from '@/server/db'
export default async function JobListingsPage() {
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
       <div className="flex items-center mb-6">
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
      </div>
      <div className=" bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Job Listings
        </h1>
        
        {/* <div className="flex space-x-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search jobs..." 
              className="pl-10 w-full"
            />
          </div>
          
          <Select>
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 text-gray-500" size={20} />
              <SelectValue placeholder="Filter Jobs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </div>

      {jobs.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-2xl text-gray-600">
            No jobs available at the moment
          </p>
        </div>
      ) : (
        <div className="px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card 
              key={job.id} 
              className="hover:shadow-xl transition-all duration-300 transform bg-white"
            >
              <CardHeader>
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
                  <div className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded inline-block">
                    {job.category}
                  </div>
                </div>
                <Link href={`/candidate/jobs/${job.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-blue-50 hover:border-blue-300"
                  >
                    View Job Details
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