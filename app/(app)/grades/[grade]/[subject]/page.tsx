import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlashcardDeck } from "@/features/study/components/FlashcardDeck";
import { QuizEngine } from "@/features/study/components/QuizEngine";
import { NoteViewer } from "@/features/study/components/NoteViewer";
import { FeynmanMode } from "@/features/study/components/FeynmanMode";
import { getSubjectData } from "@/features/curriculum/data";

type PageProps = {
  params: Promise<{ grade: string; subject: string }>;
};

export default async function SubjectHubPage({ params }: PageProps) {
  const { grade, subject } = await params;
  const data = getSubjectData(subject);

  const subjectName =
    data?.name ??
    subject
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">Grade {grade}</p>
        <h1 className="text-2xl font-bold">{subjectName}</h1>
      </div>

      <Tabs defaultValue="notes">
        <TabsList>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
          <TabsTrigger value="feynman">Feynman</TabsTrigger>
        </TabsList>

        <TabsContent value="notes" className="mt-4">
          <NoteViewer subjectId={subject} grade={grade} />
        </TabsContent>

        <TabsContent value="flashcards" className="mt-4">
          <FlashcardDeck
            flashcards={data?.flashcards ?? []}
            subjectId={subject}
          />
        </TabsContent>

        <TabsContent value="quiz" className="mt-4">
          <QuizEngine
            questions={data?.quizQuestions ?? []}
            subjectId={subject}
          />
        </TabsContent>

        <TabsContent value="feynman" className="mt-4">
          <FeynmanMode
            topics={data?.feynmanTopics ?? []}
            subjectId={subject}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
