"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import type { FeynmanTopic } from "@/features/curriculum/types";
import { cn } from "@/lib/utils";

interface FeynmanModeProps {
  topics: FeynmanTopic[];
  subjectId: string;
}

export function FeynmanMode({ topics }: FeynmanModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [showConcepts, setShowConcepts] = useState(false);

  const currentTopic = topics[currentIndex];

  const goNext = () => {
    setCurrentIndex((i) => Math.min(i + 1, topics.length - 1));
    setExplanation("");
    setShowConcepts(false);
  };

  const goPrev = () => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
    setExplanation("");
    setShowConcepts(false);
  };

  const reset = () => {
    setExplanation("");
    setShowConcepts(false);
  };

  if (topics.length === 0) {
    return (
      <Card className="border-0 bg-muted/50">
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">
            No Feynman topics available for this subject yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Info */}
      <Card className="border-0 bg-sa-blue/5">
        <CardContent className="py-3">
          <p className="text-sm text-sa-blue">
            <strong>The Feynman Technique:</strong> Explain the topic in your
            own words as if teaching someone. Then check if you covered the key
            concepts.
          </p>
        </CardContent>
      </Card>

      {/* Topic prompt */}
      <Card className="border-0 bg-card shadow-lg">
        <CardHeader>
          <p className="text-xs text-muted-foreground">
            Topic {currentIndex + 1} of {topics.length}
          </p>
          <CardTitle className="text-lg">{currentTopic.title}</CardTitle>
          <CardDescription>{currentTopic.prompt}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Text input for explanation */}
          <div>
            <label
              htmlFor="explanation"
              className="mb-1.5 block text-sm font-medium"
            >
              Your explanation:
            </label>
            <textarea
              id="explanation"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Explain this topic in your own words, as if you were teaching it to someone who has never heard of it..."
              className="min-h-[160px] w-full rounded-lg border border-input bg-transparent p-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
              rows={6}
            />
          </div>

          {/* Key concepts reveal */}
          <div>
            <Button
              variant="outline"
              onClick={() => setShowConcepts((s) => !s)}
              className="w-full"
            >
              {showConcepts ? (
                <>
                  <EyeOff className="size-3.5" data-icon="inline-start" />
                  Hide Key Concepts
                </>
              ) : (
                <>
                  <Eye className="size-3.5" data-icon="inline-start" />
                  Reveal Key Concepts
                </>
              )}
            </Button>

            {showConcepts && (
              <div className="mt-3 space-y-2 rounded-lg border border-sa-green/20 bg-sa-green/5 p-4">
                <p className="text-sm font-medium text-sa-green">
                  Check your explanation against these key concepts:
                </p>
                <ul className="space-y-1.5">
                  {currentTopic.keyConcepts.map((concept, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-sa-green" />
                      {concept}
                    </li>
                  ))}
                </ul>
                {currentTopic.examTip && (
                  <div className="mt-3 rounded-md bg-sa-gold/10 p-2">
                    <p className="text-xs font-medium text-sa-gold">
                      Exam Tip: {currentTopic.examTip}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={goPrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={reset}>
          <RotateCcw className="size-3.5" data-icon="inline-start" />
          Clear
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goNext}
          disabled={currentIndex === topics.length - 1}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
