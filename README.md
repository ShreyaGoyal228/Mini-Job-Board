# Job Board Application

A modern job board application that allows companies to post and manage job listings and candidates to apply for jobs.

## Features

- **Job Posting Management**
  - Create new job postings with detailed information
  - Edit existing job postings
  - Delete job postings (soft delete)
  - View all job listings

- **Job Applying**
  - Candidates can apply to jobs
  - View detailed view for particular job

- **Rich Form Handling**
  - Form validation using Zod
  - Real-time error messages
  - Automatic form state management

- **Modern UI Components**
  - Built with shadcn/ui components
  - Responsive design with Tailwind CSS
  - Clean and intuitive user interface

- **Server Actions**
  - Type-safe server actions for data mutations
  - Optimistic updates
  - Automatic page revalidation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Prisma with PostgreSQL
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Server Components + Server Actions

## Getting Started

### Installation

1. Clone the repository:

2. Install dependencies:
   pnpm install

3. Update the `.env` file with your database connection string:
   DATABASE_URL="your-database-connection-string" you can see .env.example

4. Start the development server:
   pnpm run dev

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

