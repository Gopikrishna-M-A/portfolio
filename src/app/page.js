import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "next/link"

const projects = [
  {
    title: "FanBoy Jerseys",
    description: "E-commerce site for sports jerseys with product listings, cart, and checkout.",
    domain: "fanboyjerseys.store",
    link: "https://www.fanboyjerseys.store",
    github: "https://github.com/Gopikrishna-M-A/fanboy",
    image: "/9.png",
  },
  {
    title: "Supermarket POS",
    description: "Point of Sale system with inventory management and barcode scanning.",
    link: "https://pos.maliakkal.store/",
    domain:"pos.maliakkal.store",
    github: "https://github.com/Gopikrishna-M-A/UnifiedRetailHub",
    image: "/4.png",
  },
  {
    title: "PaperGenie",
    description: "Web app for professors to generate question papers efficiently.",
    link: "https://papergenie.co.in/",
    domain: "papergenie.co.in",
    github: "https://github.com/Gopikrishna-M-A/paper-genie-client",
    image: "/2.png",
  },
  {
    title: "KNM Timber",
    description: "Company website showcasing products, services, and contact information.",
    link: "https://www.knmtimbers.com/",
    domain:"knmtimbers.com",
    github: "https://github.com/Gopikrishna-M-A/nihal",
    image: "/3.png",
  },
  {
    title: "Interior Design Portfolio",
    description: "Showcase of interior design projects, services, and client testimonials.",
    link: "https://newarchid.com/",
    domain:"newarchid.com",
    github: "https://github.com/Gopikrishna-M-A/NewArch-main",
    image: "/5.png",
  },
  {
    title: "College Notes Hub",
    description: "Platform for students to share and access college notes.",
    link: "https://notzzz.sset.co.in",
    domain:"notzzz.sset.co.in",
    github: "https://github.com/Gopikrishna-M-A/notezz-client",
    image: "/6.png",
  },
  {
    title: "Electrician Shift Manager",
    description: "Web app for organizing monthly shifts for college electricians.",
    link: "https://attendence.sset.co.in/",
    domain:"attendance.sset.co.in",
    github: "https://github.com/Gopikrishna-M-A/Shift-Attendence",
    image: "/7.png",
  },
  {
    title: "Influencer Portfolio",
    description: "Simple portfolio site for an influencer with social media links.",
    link: "https://wanderinggfoodie.com/",
    domain:"wanderinggfoodie.com",
    github: "https://github.com/Gopikrishna-M-A/Wanderingg-Foodie",
    image: "/8.png",
  },
]

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-2'>
            Gopikrishna M A
          </h1>
          <p className='text-xl text-gray-600'>Next.js Developer</p>
          <div className='mt-4 flex justify-center space-x-4'>
            <Link href='https://github.com/Gopikrishna-M-A' target="_blank">
            <Button variant='outline' size='icon' >
              <FaGithub className='h-5 w-5' />
            </Button>
            </Link>
            <Link href='https://www.linkedin.com/in/gopikrishna6003'>
            <Button variant='outline' size='icon'>
              <FaLinkedin className='h-5 w-5' />
            </Button>
            </Link>
          </div>
        </header>

        <main>
          <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
            Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <Card key={index} className='overflow-hidden'>
                <div className='relative h-48 w-full'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={1200}
                    className='absolute'
                  />
                </div>
                <CardHeader className='mt-14 py-2'>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='flex flex-col gap-2 mt-1'>
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="Link" className='text-blue-500 hover:underline'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.domain || "View Project"}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}