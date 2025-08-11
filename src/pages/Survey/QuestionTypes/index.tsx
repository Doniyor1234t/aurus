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
  radio: ({
    answers, 
    style,
    id,
    // ...question
  }: {
    answers: Answer[];
    question: object;
    style: string;
    id: string;
  }) => (
    <ChoiceQuestion
      type={"radio"}
      answers={answers}
      style={style}
      id={id}
      // question={question}
    />
  ),
  checkbox: ({
    answers,
    style,
    id,
    // ...question
  }: {
    answers: Answer[];
    question: object;
    style: string;
    id: string;
  }) =>(
    <ChoiceQuestion
      type={"checkbox"}
      answers={answers}
      style={style}
      id={id}
      // question={question}
    />
  ),
  input: 'input',
  textarea: 'textarea',
  select: 'select',
}