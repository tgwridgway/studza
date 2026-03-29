import Link from "next/link";
import { BookOpen, Brain, Trophy, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const grades = [
  { grade: 8, label: "Grade 8", description: "Foundation phase" },
  { grade: 9, label: "Grade 9", description: "Senior phase" },
  { grade: 10, label: "Grade 10", description: "FET Phase" },
  { grade: 11, label: "Grade 11", description: "FET Phase" },
  { grade: 12, label: "Grade 12", description: "Matric Year" },
];

const features = [
  {
    icon: BookOpen,
    title: "CAPS Notes",
    description: "Comprehensive study notes aligned to the CAPS curriculum",
  },
  {
    icon: Brain,
    title: "Flashcards",
    description: "Active recall with spaced repetition for better retention",
  },
  {
    icon: Zap,
    title: "Quizzes",
    description: "Test your knowledge with multiple-choice questions",
  },
  {
    icon: Trophy,
    title: "Feynman Method",
    description: "Explain topics in your own words to truly understand them",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sa-green/5 via-transparent to-sa-gold/5" />
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center rounded-full border border-sa-green/20 bg-sa-green/5 px-3 py-1 text-sm text-sa-green mb-6">
            🇿🇦 Built for South African students
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-sa-green">CAPS</span>{" "}
            <span className="text-foreground">Study Hub</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Master your subjects with flashcards, quizzes, and the Feynman
            technique. Aligned to the CAPS curriculum from Grade 8 to Matric.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="inline-flex h-11 items-center rounded-xl bg-sa-green px-6 text-base font-semibold text-white shadow-lg shadow-sa-green/25 hover:bg-sa-green/90 transition-all hover:shadow-sa-green/40"
            >
              Sign in with Google
            </Link>
            <Link
              href="#grades"
              className="inline-flex h-11 items-center rounded-xl border border-border px-6 text-base font-medium hover:bg-muted transition-colors"
            >
              Explore Subjects
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Study smarter, not harder
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            Four powerful study tools designed to help you ace your exams
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-muted/50">
                <CardHeader>
                  <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-sa-green/10 text-sa-green">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Selection */}
      <section id="grades" className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Choose your <span className="text-sa-gold">grade</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
            Select your grade to see available subjects and start studying
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {grades.map(({ grade, label, description }) => (
              <Link key={grade} href={`/grades/${grade}`}>
                <Card className="group cursor-pointer border-0 bg-card hover:ring-2 hover:ring-sa-green/50 transition-all hover:shadow-lg hover:shadow-sa-green/5">
                  <CardContent className="flex flex-col items-center py-6 text-center">
                    <span className="text-4xl font-bold text-sa-green group-hover:scale-110 transition-transform">
                      {grade}
                    </span>
                    <span className="mt-2 font-medium">{label}</span>
                    <span className="text-xs text-muted-foreground">
                      {description}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
