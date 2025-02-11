'use client'
import Link from 'next/link'
import { 
  Rocket, 
  Building2, 
  SearchCheck, 
  Briefcase 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react';

export default function Home() {
  const [loadingJobs,setLoadingJobs]=useState<boolean>(false);
  const [loadingCompany,setLoadingCompany]=useState<boolean>(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Mini Job <span className="text-blue-600">Board</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your gateway to exciting career opportunities and talented candidates
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Card className="hover:shadow-xl transition-all duration-300 ease-in-out transform">
          <CardHeader className="flex flex-row items-center space-x-4">
            <Rocket className="text-blue-600" size={40} />
            <CardTitle>For Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Explore hundreds of job opportunities across multiple industries
            </p>
            <Link href="/candidate/jobs">
              <Button onClick={()=>setLoadingJobs(true)} disabled={loadingJobs} variant="outline" className="w-full">
                <SearchCheck className="mr-2" /> Browse Jobs
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 ease-in-out transform">
          <CardHeader className="flex flex-row items-center space-x-4">
            <Building2 className="text-green-600" size={40} />
            <CardTitle>For Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Post jobs, manage applications, and find your next great talent
            </p>
            <Link href="/company/jobs">
              <Button onClick={()=>setLoadingCompany(true)} disabled={loadingCompany} variant="outline" className="w-full">
                <Briefcase className="mr-2" /> Company Portal
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center text-gray-500">
        © 2024 Mini Job Board. Connecting Talent with Opportunity.
      </div>
    </div>
  )
}