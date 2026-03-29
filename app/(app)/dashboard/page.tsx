import Link from "next/link";
import { BookOpen, Brain, Zap, Flame } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const quickAccessSubjects = [
  { id: "life-sciences", name: "Life Sciences", icon: "🧬" },
  { id: "physical-sciences", name: "Physical Sciences", icon: "⚛️" },
  { id: "maths", name: "Mathematics", icon: "📐" },
  { id: "cat", name: "CAT", icon: "💻" },
  { id: "english", name: "English", icon: "📖" },
  { id: "afrikaans", name: "Afrikaans", icon: "🗣️" },
];

const studyTools = [
  {
    icon: BookOpen,
    label: "Notes",
    description: "Read CAPS notes",
    color: "text-sa-green",
    bg: "bg-sa-green/10",
  },
  {
    icon: Brain,
    label: "Flashcards",
    description: "Active recall",
    color: "text-sa-gold",
    bg: "bg-sa-gold/10",
  },
  {
    icon: Zap,
    label: "Quiz",
    description: "Test yourself",
    color: "text-sa-blue",
    bg: "bg-sa-blue/10",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Ready to study?
        </p>
      </div>

      {/* Study Streak */}
      <Card className="border-0 bg-gradient-to-r from-sa-green/10 to-sa-gold/10">
        <CardContent className="flex items-center gap-4 py-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-sa-gold/20">
            <Flame className="size-6 text-sa-gold" />
          </div>
          <div>
            <p className="text-2xl font-bold">0 day streak</p>
            <p className="text-sm text-muted-foreground">
              Start studying to build your streak!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access Subjects */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Your Subjects</h2>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {quickAccessSubjects.map((subject) => (
            <Link key={subject.id} href={`/grades/12/${subject.id}`}>
              <Card className="group cursor-pointer border-0 bg-muted/50 hover:ring-2 hover:ring-sa-green/30 transition-all">
                <CardContent className="flex flex-col items-center py-4 text-center">
                  <span className="text-2xl mb-1">{subject.icon}</span>
                  <span className="text-xs font-medium leading-tight">
                    {subject.name}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Study Tools */}
      <div>
        <h2 className="mb-3 text-lg font-semibold">Study Tools</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {studyTools.map((tool) => (
            <Card key={tool.label} className="border-0 bg-muted/50">
              <CardHeader>
                <div
                  className={`mb-1 inline-flex size-9 items-center justify-center rounded-lg ${tool.bg}`}
                >
                  <tool.icon className={`size-4 ${tool.color}`} />
                </div>
                <CardTitle className="text-base">{tool.label}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="border-0 bg-muted/50">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Your study activity will appear here once you start learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground py-8 text-center">
            No activity yet. Pick a subject to get started!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
