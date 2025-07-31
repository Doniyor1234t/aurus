import { Box, RadioGroup } from "@mui/material";
import ChoiceField from "../ChoiceField/ChoiceField";

interface Label {
  uz: string;
  ru: string;
  en?: string;
  [key: string]: string | undefined;
}

interface Answer {
  label: string | Label;
}

const ChoiceQuestion = ({
  // type,
  answers,
  // question,
}: {
  type: string;
  answers: Answer[];
  // question: object;
}) => {
  return (
    <Box sx={{ padding: "16px", borderRadius: "12px", backgroundColor: "transparent" }}>
      <RadioGroup
        name={"choice-question"}
        sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
      >
        {answers.map((answer, index) => {
          const labelObj =
            typeof answer.label === 'string'
              ? { ru: answer.label, uz: answer.label, en: answer.label }
              : answer.label;

          return (
            <ChoiceField
              key={index}
              answer={{ label: labelObj }}
              // onChange={() => {}}
              // type={type}
              id={String(index + 1)}
              // isChecked={false}
            />
          )
        })}
      </RadioGroup>
      {/* Render question options here */}
    </Box>
  );
}

export default ChoiceQuestion;