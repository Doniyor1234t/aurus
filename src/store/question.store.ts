// stores/useQuestionStore.ts
import { create } from "zustand";

interface QuestionState {
  selectedId: string;
  checkedValues: string[];
}

interface QuestionStore {
  questions: Record<string, QuestionState>;
  setSelectedId: (questionId: string, selectedId: string) => void;
  setCheckedValues: (questionId: string, checkedValues: string[]) => void;
  resetQuestion: (questionId: string) => void;
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: {},
  setSelectedId: (questionId, selectedId) =>
    set((state) => ({
      questions: {
        ...state.questions,
        [questionId]: {
          ...(state.questions[questionId] || { selectedId: "", checkedValues: [] }),
          selectedId,
        },
      },
    })),
  setCheckedValues: (questionId, checkedValues) =>
    set((state) => ({
      questions: {
        ...state.questions,
        [questionId]: {
          ...(state.questions[questionId] || { selectedId: "", checkedValues: [] }),
          checkedValues,
        },
      },
    })),
  resetQuestion: (questionId) =>
    set((state) => ({
      questions: {
        ...state.questions,
        [questionId]: { selectedId: "", checkedValues: [] },
      },
    })),
}));
