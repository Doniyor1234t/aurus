import ChoiceQuestion from "../components/ChoiceQuestion/ChoiceQuestion";

export interface Label {
  uz: string;
  ru: string;
  en?: string;
  [key: string]: string | undefined;
}

export interface Answer {
  label: string | Label;
}

export const questionTypes = {
  radio: ({answers, ...question}: {
    answers: Answer[];
    question: object;
  }) => (
    <ChoiceQuestion
      type={"radio"}
      answers={answers}
      question={question}
    />
  ),
  checkbox: 'checkbox',
  input: 'input',
  textarea: 'textarea',
  select: 'select',
}