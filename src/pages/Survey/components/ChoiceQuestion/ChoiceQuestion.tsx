import { Box, FormGroup, RadioGroup } from "@mui/material";
import ChoiceField from "../ChoiceField/ChoiceField";
import { useEffect, useState } from "react";

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
  type,
  answers,
  style,
  id,
  // question,
}: {
  type: string;
  answers: Answer[];
  style: string;
  id: string;
  // question: object;
}) => {
  const [selectedId, setSelectedId] = useState("");
  const [checkedValues, setCheckedValues] = useState([]);
  useEffect(() => {
    setSelectedId("");
    setCheckedValues([]);
  }, [id, type])
  return (
    <Box sx={{ 
      // padding: "16px", 
      borderRadius: "12px", 
      backgroundColor: "transparent", 
      width: style == "wrap" ? "260px" : "100%"
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center"
    }}>
      {type == 'radio' ? <RadioGroup
        name={"choice-question"}
        sx={{ 
          display: "flex", 
          flexDirection: "row", 
          gap: 1.5, 
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
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
              selectedId={selectedId}
              checkedValues={checkedValues}
              style={style}
              type={type}
              onChange={() => {}}
              // isChecked={false}
            />
          )
        })}
      </RadioGroup> : (
        <FormGroup sx={{
          display: "flex",
          flexDirection: style == "wrap" ? "row" : "column",
          width: style == "wrap" ? "100%" : "auto",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1.5
        }}>
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
                selectedId={selectedId}
                checkedValues={checkedValues}
                style={style}
                type={type}
                onChange={(e) => {
                  const { checked } = e.target;
                  if (checked) {
                    setCheckedValues((prev): any => [...prev, `${index + 1}`]);
                  } else {
                    setCheckedValues((prev): any => prev.filter((value) => value !== `${index + 1}`));
                  }
                }}
                // isChecked={false}
              />
            )
          })}
        </FormGroup>
      )}
      {/* Render question options here */}
    </Box>
  );
}

export default ChoiceQuestion;