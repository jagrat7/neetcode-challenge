import { Button } from "@my-better-t-app/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@my-better-t-app/ui/components/card"
import {
  Rocket,
  Check,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import { cn } from "@my-better-t-app/ui/lib/utils"

const TOPICS = [
  "Arrays & Hashing",
  "Two Pointers",
  "Binary Search",
  "Stack",
  "Sliding Window",
  "Linked List",
  "Trees",
  "Tries",
  "Heap / Priority Queue",
  "Backtracking",
]

const COMPANIES = [
  { name: "Google", logo: "/images/logos/google.svg" },
  { name: "Meta", logo: "/images/logos/meta.png" },
  { name: "Amazon", logo: "/images/logos/amazon.png" },
  { name: "Microsoft", logo: "/images/logos/microsoft.png" },
  { name: "Netflix", logo: "/images/logos/netflix.webp" },
  { name: "OpenAI", logo: "/images/logos/openai.svg" },
  { name: "Anthropic", logo: "/images/logos/anthropic.svg" },
]

const TESTIMONIALS = [
  {
    name: "Amog Chandrashekar",
    photo: "/images/testimonials/amog.jpeg",
    company: "Google",
    companyLogo: "/images/logos/google.svg",
    highlight: "I signed my offer with Google",
    rest: " as a software engineer (L4) and you have a fair share of contribution in it.",
  },
  {
    name: "Rodrigo Ramirez",
    photo: "/images/testimonials/rodrigo.jpeg",
    company: "Microsoft",
    companyLogo: "/images/logos/microsoft.png",
    highlight: "I recently got an offer for Microsoft",
    rest: ", and I will be starting next year! Thank you so much for your videos!",
  },
  {
    name: "Aiswarya Sukumar",
    photo: "/images/testimonials/aiswarya.jpeg",
    company: "Amazon",
    companyLogo: "/images/logos/amazon.png",
    highlight: "Got an offer from Amazon today.",
    rest: " Thanks a lot for your videos. It really helped me during the preparation.",
  },
  {
    name: "Janvi Kalra",
    photo: "/images/testimonials/janvi.jpeg",
    company: "OpenAI",
    companyLogo: "/images/logos/openai.svg",
    highlight: "Just accepted my offer at OpenAI!",
    rest: " Your structured approach to problem solving made all the difference.",
  },
  {
    name: "Thariq Shihipar",
    photo: "/images/testimonials/thariq.jpg",
    company: "Anthropic",
    companyLogo: "/images/logos/anthropic.svg",
    highlight: "Landed a role at Anthropic.",
    rest: " NeetCode's structured approach was instrumental in my preparation.",
  },
]

const COURSE_CATEGORIES = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Follow a structured path to learn all of the core data structures & algorithms. Perfect for coding interview preparation.",
    courses: [
      {
        title: "Algorithms & Data Structures for Beginners",
        description: "Learn the foundations of coding interviews.",
        hours: 25,
        difficulty: "Medium" as const,
        image: "/images/courses/course-1.png",
      },
      {
        title: "Advanced Algorithms",
        description: "Learn every algorithm you would ever need.",
        hours: 25,
        difficulty: "Hard" as const,
        image: "/images/courses/course-2.png",
      },
    ],
  },
  {
    title: "System Design",
    description:
      "Brush up on core system design concepts for designing robust backend systems.",
    courses: [
      {
        title: "System Design for Beginners",
        description: "Learn the foundations of system design interviews.",
        hours: 10,
        difficulty: "Medium" as const,
        image: "/images/courses/course-3.png",
      },
      {
        title: "System Design Interview",
        description: "Learn common system design interview questions.",
        hours: 10,
        difficulty: "Medium" as const,
        image: "/images/courses/course-4.png",
      },
    ],
  },
  {
    title: "Python",
    description:
      "Learn the Python programming language with interactive coding lessons.",
    courses: [
      {
        title: "Python for Beginners",
        description: "Learn the Python programming language.",
        hours: 12,
        difficulty: "Easy" as const,
        image: "/images/courses/course-5.png",
      },
      {
        title: "Python for Coding Interviews",
        description: "Learn effective Python for coding interviews.",
        hours: 8,
        difficulty: "Easy" as const,
        image: "/images/courses/course-6.png",
      },
      {
        title: "Python OOP",
        description: "Learn object-oriented programming in Python.",
        hours: 8,
        difficulty: "Easy" as const,
        image: "/images/courses/course-7.png",
      },
    ],
  },
  {
    title: "Full Stack Development",
    description:
      "Choose from a variety of skills involved in full stack development.",
    courses: [
      {
        title: "SQL for Beginners",
        description: "Learn PostgreSQL with interactive coding lessons.",
        hours: 10,
        difficulty: "Easy" as const,
        image: "/images/courses/course-8.png",
      },
      {
        title: "Full Stack Development",
        description: "Learn how to build an intermediate full stack app.",
        hours: 20,
        difficulty: "Medium" as const,
        image: "/images/courses/course-9.png",
      },
    ],
  },
  {
    title: "Object Oriented Design",
    description:
      "Dive deeper into object-oriented programming by focusing on design patterns and principles.",
    courses: [
      {
        title: "Object Oriented Design Interviews",
        description: "Learn Object Oriented Design interview questions.",
        hours: 8,
        difficulty: "Easy" as const,
        image: "/images/courses/course-10.png",
      },
      {
        title: "Object Oriented Design Patterns",
        description: "Learn & implement common coding design patterns.",
        hours: 8,
        difficulty: "Easy" as const,
        image: "/images/courses/course-11.png",
      },
    ],
  },
]

const PRACTICE_TOPICS = [
  "Arrays & Hashing",
  "Two Pointers",
  "Sliding Window",
]

const VALUE_PROPS = [
  "Organized study plans: Blind 75, NeetCode 150, NeetCode 250",
  "Detailed video explanations for every problem",
  "Track your progress and stay motivated",
  "Join our public Discord community",
]

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "text-neet-green bg-neet-green/10",
  Medium: "text-neet-amber bg-neet-amber/10",
  Hard: "text-neet-red bg-neet-red/10",
}

const FOUNDER_COMPANIES = [
  { name: "Google", logo: "/images/logos/google.svg" },
  { name: "Amazon", logo: "/images/logos/amazon.png" },
  { name: "Capital One", logo: "/images/logos/capital-one.png" },
]

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-0.5 text-xs font-medium",
        DIFFICULTY_COLORS[difficulty]
      )}
    >
      {difficulty}
    </span>
  )
}

function FloatingPill({
  label,
  index,
}: {
  label: string
  index: number
}) {
  const positions = [
    "top-[8%] left-[5%]",
    "top-[5%] right-[8%]",
    "top-[18%] left-[12%]",
    "top-[15%] right-[3%]",
    "top-[28%] left-[2%]",
    "top-[25%] right-[10%]",
    "top-[38%] left-[8%]",
    "top-[35%] right-[5%]",
    "top-[48%] left-[3%]",
    "top-[45%] right-[12%]",
  ]

  return (
    <div
      className={cn(
        "absolute hidden xl:block rounded-full border border-neet-cta/20 bg-neet-card/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm",
        "animate-pulse",
        positions[index % positions.length]
      )}
      style={{ animationDelay: `${index * 0.3}s`, animationDuration: `${3 + index * 0.5}s` }}
    >
      {label}
    </div>
  )
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-neet-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              src="/images/brand/neetcode-logo.png"
              alt="NeetCode"
              className="size-8"
            />
            <span className="text-lg font-bold">NeetCode</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#courses" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Courses
            </a>
            <a href="#practice" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Practice
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Roadmap
            </a>
            <a href="#" className="text-sm font-medium text-neet-cta transition-colors hover:text-neet-cta/80">
              Pro
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="rounded-lg">
            Sign in
          </Button>
          <Button size="sm" className="rounded-lg bg-neet-cta text-neet-cta-foreground hover:bg-neet-cta/90">
            Get Pro
          </Button>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neet-bg px-6 pb-20 pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-neet-cta)_0%,transparent_70%)] opacity-[0.06]" />

      {TOPICS.map((topic, i) => (
        <FloatingPill key={topic} label={topic} index={i} />
      ))}

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          <span className="text-neet-brand">NeetCode</span>
          <br />
          A Better Way to Prepare
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI,
          and other top tech companies.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-lg bg-neet-cta px-6 text-sm text-neet-cta-foreground hover:bg-neet-cta/90"
          >
            <Rocket className="size-4" />
            Get Pro
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg px-6 text-sm"
          >
            Start Free
          </Button>
        </div>

        <div className="mt-14 flex items-center justify-center gap-12 md:gap-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">1M+</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Engineers prepared
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">1,000+</div>
            <div className="mt-1 text-sm text-muted-foreground">
              Practice problems & Video Explanations
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CompanyLogosSection() {
  return (
    <section className="border-y border-border/50 bg-neet-bg px-6 py-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-8 text-sm text-muted-foreground">
          Trusted by engineers who landed offers at top companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {COMPANIES.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="size-6 object-contain"
              />
              <span className="text-sm text-muted-foreground">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-neet-bg px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <Card
            key={t.name}
            className="rounded-xl border-0 bg-neet-card ring-1 ring-border/50"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-sm font-semibold">
                    {t.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1.5">
                    <img
                      src={t.companyLogo}
                      alt={t.company}
                      className="size-3.5 object-contain"
                    />
                    {t.company}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  {t.highlight}
                </span>
                {t.rest}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function CourseCard({
  title,
  description,
  hours,
  difficulty,
  image,
}: {
  title: string
  description: string
  hours: number
  difficulty: string
  image: string
}) {
  return (
    <Card className="group rounded-xl border-0 bg-neet-card ring-1 ring-border/50 transition-all hover:ring-neet-cta/30 overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            {hours} hours
          </span>
          <DifficultyBadge difficulty={difficulty} />
        </div>
      </CardContent>
    </Card>
  )
}

function CoursesSection() {
  return (
    <section id="courses" className="bg-neet-bg px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Courses</h2>
          <p className="mt-3 text-muted-foreground">
            Structured learning paths from fundamentals to advanced topics.
          </p>
        </div>

        <div className="space-y-16">
          {COURSE_CATEGORIES.map((category) => (
            <div key={category.title}>
              <div className="mb-6">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.courses.map((course) => (
                  <CourseCard key={course.title} {...course} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PracticeSection() {
  return (
    <section id="practice" className="bg-neet-bg px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Start Practicing for Free</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            The best resources for coding interviews. Period.
          </p>
          <ul className="mt-8 space-y-4">
            {VALUE_PROPS.map((prop) => (
              <li key={prop} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-neet-green/15">
                  <Check className="size-3 text-neet-green" />
                </div>
                <span className="text-sm text-muted-foreground">{prop}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="rounded-lg bg-neet-cta px-5 text-sm text-neet-cta-foreground hover:bg-neet-cta/90"
            >
              Start Practicing
            </Button>
            <Button variant="outline" size="lg" className="rounded-lg px-5 text-sm">
              View Roadmap
            </Button>
            <Button variant="ghost" size="lg" className="rounded-lg px-5 text-sm">
              <ExternalLink className="size-4" />
              Join Discord
            </Button>
          </div>
        </div>

        <Card className="rounded-xl border-0 bg-neet-card ring-1 ring-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-neet-green/15 px-2 py-0.5 text-xs font-medium text-neet-green">
                  Free
                </span>
                <CardTitle className="text-base font-bold">
                  NeetCode 150
                </CardTitle>
              </div>
              <ChevronRight className="size-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>67 / 150 completed</span>
                <span>45%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neet-surface-elevated">
                <div
                  className="h-full rounded-full bg-neet-green transition-all"
                  style={{ width: "45%" }}
                />
              </div>
            </div>
            <div className="space-y-2">
              {PRACTICE_TOPICS.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center justify-between rounded-lg bg-neet-surface-elevated/60 px-3 py-2"
                >
                  <span className="text-xs text-muted-foreground">
                    {topic}
                  </span>
                  <ChevronRight className="size-3.5 text-muted-foreground/50" />
                </div>
              ))}
              <div className="px-3 py-1 text-xs text-muted-foreground/60">
                +14 more
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="bg-neet-bg px-6 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <img
          src="/images/brand/navi.png"
          alt="Navi - Creator of NeetCode"
          className="size-28 shrink-0 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">Hi, I'm Navi</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              I created NeetCode in 2020 when I was unemployed and couldn't find
              a job.
            </p>
            <p>
              While I was struggling myself, it was still rewarding for me to
              make videos. I received so many messages from others who got jobs
              after studying with my videos. It felt so gratifying and kept me
              motivated.
            </p>
            <p>About a year later I managed to get a job at Google.</p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            <span className="text-xs text-muted-foreground">
              Previously at
            </span>
            <div className="flex items-center gap-3">
              {FOUNDER_COMPANIES.map((company) => (
                <div
                  key={company.name}
                  className="flex items-center gap-1.5 rounded-md bg-neet-surface-elevated px-2.5 py-1"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="size-4 object-contain"
                  />
                  <span className="text-xs text-muted-foreground">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-neet-bg px-6 py-12">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-sm font-semibold">Links</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#" className="transition-colors hover:text-foreground">Blind 75</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">NeetCode 150</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">NeetCode 250</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">How to use NeetCode Effectively</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Social</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#" className="transition-colors hover:text-foreground">YouTube</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">LinkedIn</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Contact</h3>
          <p className="text-sm text-muted-foreground">
            support@neetcode.io
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Legal</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a></li>
            <li><a href="#" className="transition-colors hover:text-foreground">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-5xl border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
        Copyright &copy; 2026 neetcode.io All rights reserved.
      </div>
    </footer>
  )
}

export default function NeetCodeLanding() {
  return (
    <div className="min-h-screen bg-neet-bg text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <CompanyLogosSection />
        <TestimonialsSection />
        <CoursesSection />
        <PracticeSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  )
}
