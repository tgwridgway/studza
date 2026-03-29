"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { CheckCircle2, XCircle, RotateCcw, Filter } from "lucide-react";
import type { QuizQuestion } from "@/features/curriculum/types";
import { cn } from "@/lib/utils";

interface QuizEngineProps {
  questions: QuizQuestion[];
  subjectId: string;
}

type QuizState = "answering" | "feedback" | "complete";

export function QuizEngine({ questions }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [state, setState] = useState<QuizState>("answering");
  const [score, setScore] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState<string>("all");

  const units = useMemo(() => {
    const unitSet = new Set(questions.map((q) => q.unit));
    return ["all", ...Array.from(unitSet)];
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    return selectedUnit === "all"
      ? questions
      : questions.filter((q) => q.unit === selectedUnit);
  }, [questions, selectedUnit]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleAnswer = (index: number) => {
    if (state !== "answering") return;
    setSelectedAnswer(index);
    setState("feedback");
    if (index === currentQuestion.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= filteredQuestions.length) {
      setState("complete");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setState("answering");
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setState("answering");
    setScore(0);
  };

  if (questions.length === 0) {
    return (
      <Card className="border-0 bg-muted/50">
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">
            No quiz questions available for this subject yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (state === "complete") {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <Card className="border-0 bg-muted/50">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div
            className={cn(
              "text-6xl font-bold",
              percentage >= 70
                ? "text-sa-green"
                : percentage >= 50
                  ? "text-sa-gold"
                  : "text-red-500"
            )}
          >
            {percentage}%
          </div>
          <p className="text-muted-foreground">
            You got {score} out of {filteredQuestions.length} correct
          </p>
          <div className="flex justify-center gap-3">
            <Button onClick={restart} variant="outline">
              <RotateCcw className="size-3.5" data-icon="inline-start" />
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const progress =
    filteredQuestions.length > 0
      ? ((currentIndex + 1) / filteredQuestions.length) * 100
      : 0;

  return (
    <div className="space-y-4">
      {/* Unit filter */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-lg border border-border p-1">
          <Filter className="size-3.5 ml-1 text-muted-foreground" />
          <select
            value={selectedUnit}
            onChange={(e) => {
              setSelectedUnit(e.target.value);
              restart();
            }}
            className="bg-transparent text-sm outline-none pr-1"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>
                {unit === "all"
                  ? "All units"
                  : unit.charAt(0).toUpperCase() + unit.slice(1).replace(/-/g, " ")}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Progress */}
      <Progress value={progress}>
        <ProgressLabel>
          Question {currentIndex + 1} of {filteredQuestions.length}
        </ProgressLabel>
        <ProgressValue />
      </Progress>

      {/* Question */}
      <Card className="border-0 bg-card shadow-lg">
        <CardHeader>
          <p className="text-xs font-medium uppercase tracking-wider text-sa-blue">
            {currentQuestion.unit.replace(/-/g, " ")}
          </p>
          <CardTitle className="text-lg leading-relaxed">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correct;
            const showFeedback = state === "feedback";

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={state === "feedback"}
                className={cn(
                  "flex w-full items-start gap-3 rounded-lg border p-3 text-left text-sm transition-all",
                  !showFeedback &&
                    "border-border hover:border-sa-green/50 hover:bg-sa-green/5",
                  showFeedback &&
                    isCorrect &&
                    "border-sa-green bg-sa-green/10 text-sa-green",
                  showFeedback &&
                    isSelected &&
                    !isCorrect &&
                    "border-red-400 bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400",
                  showFeedback &&
                    !isSelected &&
                    !isCorrect &&
                    "opacity-50"
                )}
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {showFeedback && isCorrect && (
                  <CheckCircle2 className="size-4 shrink-0 text-sa-green" />
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <XCircle className="size-4 shrink-0 text-red-500" />
                )}
              </button>
            );
          })}
        </CardContent>

        {state === "feedback" && currentQuestion.explanation && (
          <CardFooter className="flex-col items-start gap-2">
            <p className="text-sm font-medium">Explanation:</p>
            <p className="text-sm text-muted-foreground">
              {currentQuestion.explanation}
            </p>
            <Button onClick={handleNext} className="mt-2 w-full bg-sa-green hover:bg-sa-green/90">
              {currentIndex + 1 >= filteredQuestions.length
                ? "See Results"
                : "Next Question"}
            </Button>
          </CardFooter>
        )}
      </Card>

      {/* Score */}
      <p className="text-center text-sm text-muted-foreground">
        Score: {score}/{currentIndex + (state === "feedback" ? 1 : 0)}
      </p>
    </div>
  );
}
