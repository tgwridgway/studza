"use client";

import { useState, useMemo, useCallback } from "react";
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
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  Filter,
} from "lucide-react";
import type { Flashcard } from "@/features/curriculum/types";
import { cn } from "@/lib/utils";

interface FlashcardDeckProps {
  flashcards: Flashcard[];
  subjectId: string;
}

export function FlashcardDeck({ flashcards }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<string>("all");
  const [shuffled, setShuffled] = useState(false);
  const [ratings, setRatings] = useState<
    Record<number, "hard" | "medium" | "easy">
  >({});

  const units = useMemo(() => {
    const unitSet = new Set(flashcards.map((f) => f.unit));
    return ["all", ...Array.from(unitSet)];
  }, [flashcards]);

  const filteredCards = useMemo(() => {
    let cards =
      selectedUnit === "all"
        ? [...flashcards]
        : flashcards.filter((f) => f.unit === selectedUnit);
    if (shuffled) {
      cards = [...cards].sort(() => Math.random() - 0.5);
    }
    return cards;
  }, [flashcards, selectedUnit, shuffled]);

  const currentCard = filteredCards[currentIndex];

  const goNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((i) => Math.min(i + 1, filteredCards.length - 1));
  }, [filteredCards.length]);

  const goPrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const rateCard = (confidence: "hard" | "medium" | "easy") => {
    if (currentCard) {
      setRatings((prev) => ({ ...prev, [currentCard.id]: confidence }));
    }
    goNext();
  };

  const handleShuffle = () => {
    setShuffled((s) => !s);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const reset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setRatings({});
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goPrev();
      else goNext();
    }
    setTouchStart(null);
  };

  if (flashcards.length === 0) {
    return (
      <Card className="border-0 bg-muted/50">
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">
            No flashcards available for this subject yet.
          </p>
        </CardContent>
      </Card>
    );
  }

  const progress =
    filteredCards.length > 0
      ? ((currentIndex + 1) / filteredCards.length) * 100
      : 0;

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 rounded-lg border border-border p-1">
          <Filter className="size-3.5 ml-1 text-muted-foreground" />
          <select
            value={selectedUnit}
            onChange={(e) => {
              setSelectedUnit(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
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
        <Button variant="outline" size="sm" onClick={handleShuffle}>
          <Shuffle className="size-3.5" data-icon="inline-start" />
          {shuffled ? "Unshuffle" : "Shuffle"}
        </Button>
        <Button variant="outline" size="sm" onClick={reset}>
          <RotateCcw className="size-3.5" data-icon="inline-start" />
          Reset
        </Button>
      </div>

      {/* Progress */}
      <Progress value={progress}>
        <ProgressLabel>
          {currentIndex + 1} of {filteredCards.length}
        </ProgressLabel>
        <ProgressValue />
      </Progress>

      {/* Flashcard */}
      {currentCard && (
        <div
          className="perspective-1000"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            onClick={() => setIsFlipped((f) => !f)}
            className={cn(
              "relative cursor-pointer transition-transform duration-500 [transform-style:preserve-3d]",
              isFlipped && "[transform:rotateY(180deg)]"
            )}
          >
            {/* Front */}
            <Card className="min-h-[200px] border-0 bg-card shadow-lg [backface-visibility:hidden]">
              <CardHeader>
                <p className="text-xs font-medium uppercase tracking-wider text-sa-green">
                  {currentCard.unit.replace(/-/g, " ")}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium leading-relaxed">
                  {currentCard.q}
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">
                  Tap to reveal answer
                </p>
              </CardFooter>
            </Card>

            {/* Back */}
            <Card className="absolute inset-0 min-h-[200px] border-0 bg-card shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <CardHeader>
                <p className="text-xs font-medium uppercase tracking-wider text-sa-gold">
                  Answer
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed whitespace-pre-line">
                  {currentCard.a}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Navigation & Rating */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={goPrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="size-4" />
        </Button>

        {isFlipped && (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950"
              onClick={() => rateCard("hard")}
            >
              Hard
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-sa-gold/50 text-sa-gold hover:bg-sa-gold/5"
              onClick={() => rateCard("medium")}
            >
              Medium
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-sa-green/50 text-sa-green hover:bg-sa-green/5"
              onClick={() => rateCard("easy")}
            >
              Easy
            </Button>
          </div>
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={goNext}
          disabled={currentIndex === filteredCards.length - 1}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>

      {/* Rating summary */}
      {Object.keys(ratings).length > 0 && (
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <span>
            Hard: {Object.values(ratings).filter((r) => r === "hard").length}
          </span>
          <span>
            Medium:{" "}
            {Object.values(ratings).filter((r) => r === "medium").length}
          </span>
          <span>
            Easy: {Object.values(ratings).filter((r) => r === "easy").length}
          </span>
        </div>
      )}
    </div>
  );
}
