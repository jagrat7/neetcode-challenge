import { Code2, Server, Terminal, Braces, Blocks } from "lucide-react"

export const TOPICS = [
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

export const COMPANIES = [
  { name: "Google", logo: "/images/logos/google.svg" },
  { name: "Meta", logo: "/images/logos/meta.png" },
  { name: "Amazon", logo: "/images/logos/amazon.png" },
  { name: "Microsoft", logo: "/images/logos/microsoft.png" },
  { name: "Netflix", logo: "/images/logos/netflix.webp" },
  { name: "OpenAI", logo: "/images/logos/openai.svg" },
  { name: "Anthropic", logo: "/images/logos/anthropic.svg" },
]

export const TESTIMONIALS = [
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

export const COURSE_CATEGORIES = [
  {
    title: "Data Structures & Algorithms",
    icon: Code2,
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
    icon: Server,
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
    icon: Terminal,
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
    icon: Blocks,
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
    icon: Braces,
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

export const PRACTICE_TOPICS = [
  "Arrays & Hashing",
  "Two Pointers",
  "Sliding Window",
]

export const VALUE_PROPS = [
  "Organized study plans: Blind 75, NeetCode 150, NeetCode 250",
  "Detailed video explanations for every problem",
  "Track your progress and stay motivated",
  "Join our public Discord community",
]

export const FOUNDER_COMPANIES = [
  { name: "Capital One", logo: "/images/logos/capital-one.png" },
  { name: "Amazon", logo: "/images/logos/amazon.png" },
  { name: "Google", logo: "/images/logos/google.svg" },
]

export const HERO_CONTENT = {
  tagline: "A Better Way to Prepare",
  description: "Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI, and other top tech companies.",
}
