import ChoiceQuestion from "../components/ChoiceQuestion/ChoiceQuestion";
import FormQuestion from "../components/FormQuestion/FormType";

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
    setCurrentStep,
    // ...question
  }: {
    answers: Answer[];
    question: object;
    style: string;
    id: string;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  }) => (
    <ChoiceQuestion
      type={"radio"}
      answers={answers}
      style={style}
      id={id}
      setCurrentStep={setCurrentStep}
      // question={question}
    />
  ),
  checkbox: ({
    answers,
    style,
    id,
    setCurrentStep,
    // ...question
  }: {
    answers: Answer[];
    question: object;
    style: string;
    id: string;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  }) =>(
    <ChoiceQuestion
      type={"checkbox"}
      answers={answers}
      style={style}
      id={id}
      setCurrentStep={setCurrentStep}
      // question={question}
    />
  ),
  input: 'input',
  textarea: 'textarea',
  select: 'select',
  form: ({
    answers,
    style,
    id,
    setCurrentStep,
    // ...question
  }: {
    answers: Answer[];
    question: object;
    style: string;
    id: string;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  }) => (
    <FormQuestion
      type={"form"}
      answers={answers}
      style={style}
      id={id}
      setCurrentStep={setCurrentStep}
      // question={question}
    />
  )
}