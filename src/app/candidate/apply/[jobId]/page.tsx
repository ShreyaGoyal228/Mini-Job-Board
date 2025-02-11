'use server'
import JobApplicationForm from "@/app/candidate/apply/[jobId]/job-application-form"
import { Card ,CardContent} from "@/components/ui/card"
import { db } from "@/server/db"
import { redirect } from "next/navigation"

const ApplicationPage=async({params}:{params:Promise<{jobId:string}>})=>{
  const jobId=(await params).jobId
  const dynamic = 'force-dynamic';
    const job = await db.job.findUnique({
        where: { id: jobId }
      })

      if(!job)
      {
        redirect("/");
      }
    return (
        <>
       <div className="container max-w-2xl mx-auto py-8 px-4">
      <Card className="mb-8 bg-gray-50">
        <CardContent className="p-6">
          <div className="text-sm text-gray-500 mb-1">Position</div>
          <h1 className="text-xl font-semibold text-gray-900 mb-4">{job.title}</h1>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Company</div>
              <div className="text-gray-700">{job.company}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Location</div>
              <div className="text-gray-700">{job.location}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Application Form</h2>
        <p className="text-gray-600 mt-1">Please complete all fields below</p>
      </div>

      <JobApplicationForm jobId={job.id}/>
      </div>
        </>
    )
}

export default  ApplicationPage