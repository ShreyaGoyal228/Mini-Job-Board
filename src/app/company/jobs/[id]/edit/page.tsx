'use server'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/server/db"
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import JobPostingForm from "../../new/job-posting-form";

export default async function EditJobPost({params}:{params:{id:string}}) {
const job=await db.job.findFirst({
  select:{
title:true,
company:true,
category:true,
location:true,
description:true,
salaryRange:true
  },
    where:{
        id:params.id,
        deletedAt:null
    }
})

if(!job)
{
    redirect("/");
}
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
            <CardTitle className="text-2xl">Edit Job Post</CardTitle>
            <CardDescription>
             Change the details to update the job post
            </CardDescription>
          </CardHeader>
          <CardContent>
         <JobPostingForm job={job} isEditing={true} jobId={params.id}/>
          </CardContent>
        </Card>
      </div>
    </div>
        </>
    )
}