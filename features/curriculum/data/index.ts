import type { SubjectData, GradeCurriculum } from "@/features/curriculum/types";

import * as lifeSciencesData from "./life-sciences";
import * as catData from "./cat";
import * as mathsLiteracyData from "./maths-literacy";
import * as accountingData from "./accounting";
import * as businessStudiesData from "./business-studies";
import * as economicsData from "./economics";
import * as afrikaans from "./afrikaans";
import * as englishData from "./english";
import * as geographyData from "./geography";
import * as historyData from "./history";
import * as itData from "./it";
import * as lifeOrientationData from "./life-orientation";
import * as physicalSciencesData from "./physical-sciences";
import * as tourismData from "./tourism";
import * as mathsData from "./maths";
import { CAPS_CURRICULUM } from "./curriculum";

const subjectMap: Record<string, Omit<SubjectData, "id">> = {
  "life-sciences": {
    name: "Life Sciences",
    ...lifeSciencesData,
  },
  cat: {
    name: "Computer Applications Technology",
    ...catData,
  },
  "maths-literacy": {
    name: "Mathematical Literacy",
    ...mathsLiteracyData,
  },
  accounting: {
    name: "Accounting",
    ...accountingData,
  },
  "business-studies": {
    name: "Business Studies",
    ...businessStudiesData,
  },
  economics: {
    name: "Economics",
    ...economicsData,
  },
  afrikaans: {
    name: "Afrikaans",
    ...afrikaans,
  },
  english: {
    name: "English",
    ...englishData,
  },
  geography: {
    name: "Geography",
    ...geographyData,
  },
  history: {
    name: "History",
    ...historyData,
  },
  it: {
    name: "Information Technology",
    ...itData,
  },
  "life-orientation": {
    name: "Life Orientation",
    ...lifeOrientationData,
  },
  "physical-sciences": {
    name: "Physical Sciences",
    ...physicalSciencesData,
  },
  tourism: {
    name: "Tourism",
    ...tourismData,
  },
  maths: {
    name: "Mathematics",
    ...mathsData,
  },
};

export function getSubjectData(subjectId: string): SubjectData | null {
  const data = subjectMap[subjectId];
  if (!data) return null;
  return { id: subjectId, ...data };
}

export function getCurriculumForSubject(
  subjectId: string,
  grade: string
): GradeCurriculum | null {
  const subjectCurriculum = CAPS_CURRICULUM[subjectId];
  if (!subjectCurriculum) return null;
  return subjectCurriculum[grade] ?? null;
}

export function getAllSubjectIds(): string[] {
  return Object.keys(subjectMap);
}
