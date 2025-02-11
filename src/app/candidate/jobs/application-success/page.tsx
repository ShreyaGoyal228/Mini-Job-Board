import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ApplicationSuccessPage() {
  return (
    <div className="container max-w-2xl mx-auto py-16 px-4 text-center">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for your application. We will review it and get back to you soon.
        </p>
        <Link href="/candidate/jobs">
          <Button>
            Back to Job Listings
          </Button>
        </Link>
      </div>
    </div>
  )
}