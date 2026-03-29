import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurriculumForSubject } from "@/features/curriculum/data";

interface NoteViewerProps {
  subjectId: string;
  grade: string;
}

export function NoteViewer({ subjectId, grade }: NoteViewerProps) {
  const curriculum = getCurriculumForSubject(subjectId, grade);

  if (!curriculum || Object.keys(curriculum).length === 0) {
    return (
      <Card className="border-0 bg-muted/50">
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">
            No notes available for this subject yet. Check back soon!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {Object.entries(curriculum).map(([term, topics]) => (
        <div key={term}>
          <h2 className="mb-3 text-lg font-semibold text-sa-green">
            Term {term}
          </h2>
          <div className="space-y-3">
            {topics.map((topic, index) => (
              <Card key={index} className="border-0 bg-card shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{topic.topic}</CardTitle>
                    {topic.weeks && (
                      <span className="text-xs text-muted-foreground">
                        {topic.weeks} {topic.weeks === 1 ? "week" : "weeks"}
                      </span>
                    )}
                  </div>
                </CardHeader>
                {topic.content && (
                  <CardContent>
                    <div
                      className="prose prose-sm dark:prose-invert max-w-none text-sm leading-relaxed [&_strong]:text-foreground [&_ul]:space-y-1 [&_ol]:space-y-1"
                      dangerouslySetInnerHTML={{ __html: topic.content }}
                    />
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
