import { Box, Button, Input } from "@mui/material";
import type { Answer } from "../../QuestionTypes";
// import { useState } from "react";
// import InputMask from "react-input-mask"

// function PhoneInput() {
//   const [value, setValue] = useState<string>("");

//   return (
//     <InputMask
//       mask="+998 (99) - 999 - 99 - 99"
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     >
//       {(inputProps) => (
//         <input
//           {...inputProps}
//           type="tel"
//           placeholder="+998 (__) - ___ - __ - __"
//           style={{
//             padding: "8px 12px",
//             fontSize: "16px",
//             border: "1px solid #ccc",
//             borderRadius: "4px"
//           }}
//         />
//       )}
//     </InputMask>
//   );
// }

const FormQuestion = ({
  type,
  // answers,
  // style,
  // id,
  // setCurrentStep,
}: {
  type: string;
  answers: Answer[];
  style: string;
  id: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      width: "420px"
    }}>
      {/* <PhoneInput /> */}

      <Input
        type={type}
        placeholder="Ismingizni kiriting"
        sx={{
          width: "100%",
          padding: "12px 16px",
          border: "1px solid rgba(54, 54, 54, 0.09)",
          borderRadius: "14px",
          fontSize: "16px",
          "&.Mui-focused": {
            borderColor: "#009966",
            outline: "none"
          },
          "&::before": {
            display: "none"
          },
          "&::after": {
            display: "none"
          },
        }}
      />
      <Input
        type="tel"
        placeholder="+998 (__) - ___ - __ - __"
        sx={{
          width: "100%",
          padding: "12px 16px",
          border: "1px solid rgba(54, 54, 54, 0.09)",
          borderRadius: "14px",
          fontSize: "16px",
          "&.Mui-focused": {
            borderColor: "#009966",
            outline: "none"
          },
          "&::before": {
            display: "none"
          },
          "&::after": {
            display: "none"
          },
        }}
      />
      <Button sx={{
        mt: "12px",
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "24px",
        py: "16px"
      }} variant="contained" color="primary" onClick={() => {}}>
        Ariza qoldirish
      </Button>
    </Box>
  );
};

export default FormQuestion;