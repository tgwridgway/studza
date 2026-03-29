export interface Flashcard {
  id: number;
  unit: string;
  q: string;
  a: string;
}

export interface QuizQuestion {
  id: number;
  unit: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface FeynmanTopic {
  id: string;
  title: string;
  prompt: string;
  keyConcepts: string[];
  examTip?: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface CurriculumTopic {
  topic: string;
  weeks: number;
  content: string;
}

export type TermTopics = CurriculumTopic[];

export type GradeCurriculum = Record<string, TermTopics>;

export type SubjectCurriculum = Record<string, GradeCurriculum>;

export interface SubjectData {
  id: string;
  name: string;
  flashcards: Flashcard[];
  quizQuestions: QuizQuestion[];
  feynmanTopics: FeynmanTopic[];
  notes?: Note[];
}
