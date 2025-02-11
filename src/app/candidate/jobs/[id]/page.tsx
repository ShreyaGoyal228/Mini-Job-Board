import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { db } from '@/server/db'
import { notFound } from 'next/navigation'

export default async function JobDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const job = await db.job.findUnique({
    where: { 
      id: params.id,
      deletedAt: null
    }
  })

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Card className="bg-white shadow-sm">
        <CardContent className="p-8">
          {/* Header with Company and Post Date */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-gray-700">{job.company}</h2>
            <span className="text-sm text-gray-500">
              Posted on {new Date(job.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Job Title */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            {job.title}
          </h1>

          {/* Key Details */}
          <div className="grid grid-cols-2 gap-y-4 border-y border-gray-200 py-6 mb-8">
            <div>
              <div className="text-sm text-gray-500 mb-1">Location</div>
              <div className="text-gray-700">{job.location}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Employment Type</div>
              <div className="text-gray-700">Full Time</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Category</div>
              <div className="text-gray-700">{job.category}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Salary Range</div>
              <div className="text-gray-700">{job.salaryRange}</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">About the Role</h2>
            <div className="text-gray-600 space-y-4 whitespace-pre-wrap">
              {job.description}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <Link href={`/candidate/apply/${job.id}`} className="flex-1">
              <Button className="w-full bg-gray-900 hover:bg-gray-800">
                Apply for this position
              </Button>
            </Link>
            <Link href="/candidate/jobs">
              <Button variant="outline">
                Back to Jobs
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
