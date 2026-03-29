import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const subjects = [
  { id: "life-sciences", name: "Life Sciences", icon: "🧬", category: "Sciences" },
  { id: "physical-sciences", name: "Physical Sciences", icon: "⚛️", category: "Sciences" },
  { id: "maths", name: "Mathematics", icon: "📐", category: "Core" },
  { id: "maths-literacy", name: "Maths Literacy", icon: "🔢", category: "Core" },
  { id: "english", name: "English", icon: "📖", category: "Languages" },
  { id: "afrikaans", name: "Afrikaans", icon: "🗣️", category: "Languages" },
  { id: "cat", name: "Computer Applications", icon: "💻", category: "Technology" },
  { id: "it", name: "Information Technology", icon: "🖥️", category: "Technology" },
  { id: "accounting", name: "Accounting", icon: "📊", category: "Commerce" },
  { id: "business-studies", name: "Business Studies", icon: "💼", category: "Commerce" },
  { id: "economics", name: "Economics", icon: "📈", category: "Commerce" },
  { id: "geography", name: "Geography", icon: "🌍", category: "Humanities" },
  { id: "history", name: "History", icon: "📜", category: "Humanities" },
  { id: "life-orientation", name: "Life Orientation", icon: "🧭", category: "Core" },
  { id: "tourism", name: "Tourism", icon: "✈️", category: "Commerce" },
];

type PageProps = {
  params: Promise<{ grade: string }>;
};

export default async function GradeSubjectsPage({ params }: PageProps) {
  const { grade } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Grade {grade} Subjects</h1>
        <p className="text-muted-foreground">
          Choose a subject to start studying
        </p>
      </div>

      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/grades/${grade}/${subject.id}`}>
            <Card className="group h-full cursor-pointer border-0 bg-muted/50 hover:ring-2 hover:ring-sa-green/30 transition-all hover:shadow-lg hover:shadow-sa-green/5">
              <CardHeader>
                <span className="text-3xl">{subject.icon}</span>
                <CardTitle className="text-base">{subject.name}</CardTitle>
                <CardDescription>{subject.category}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
