export const dynamic = 'force-dynamic';

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import JobPostingForm from './job-posting-form'
export default function AddNewJob() {
return(
  <>
  <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/company/jobs">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Jobs
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Post a New Job</CardTitle>
            <CardDescription>
              Fill out the form below to create a new job listing
            </CardDescription>
          </CardHeader>
          <CardContent>
         <JobPostingForm job={undefined} isEditing={false} jobId={undefined}/>
          </CardContent>
        </Card>
      </div>
    </div>
  </>
)
}
