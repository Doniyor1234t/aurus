import { Box, Button, Stack, Typography } from "@mui/material";
import FullLogo from '../../assets/icons/FullLogo';
import cls from './SurveyLayout.module.scss';
import { useState } from "react";
import { questionTypes } from "./QuestionTypes";
import db from "./survey.json"
import RightArrow from "../../assets/icons/RightArrow";

export const Survey = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = db?.length;
  type QuestionTypeKey = keyof typeof questionTypes; // "radio" | "checkbox" | "input" | ...
  const type = (db[currentStep - 1]?.type ?? "radio") as QuestionTypeKey;
  const Question = questionTypes[type];
  return (
    <Box sx={{
      backgroundColor: "#fff",
      height: "100vh",
      padding: "20px 24px",
    }}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F8F8F8",
        height: "100%",
        borderRadius: "36px",
        zIndex: 0,
        "&:before": {
          content: '""',
          position: "absolute",
          top: -184,
          left: -497,
          width: "676.321px",
          height: "701.46px",
          transform: "rotate(170.973deg)",
          borderRadius: "36701.46px",
          background: "radial-gradient(50% 50% at 50% 50%, #CDECE2 0%, rgba(205, 236, 226, 0.00) 100%)",
          zIndex: 1
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: -131,
          right: -310,
          width: "470.489px",
          height: "677.297px",
          transform: "rotate(3.52deg)",
          borderRadius: "677.297px",
          background: "radial-gradient(50% 50% at 50% 50%, #CDECE2 0%, rgba(205, 236, 226, 0.00) 100%)",
          zIndex: 1
        }
      }}>
        <Box className={cls.footerLogo}>
          <span className={cls.footerLogoBackgroundCorner1}></span>
          <span className={cls.footerLogoBackgroundCorner2}></span>
          <FullLogo />
        </Box>
        <Box sx={{
          width: "100%",
          maxWidth: "840px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          position: "relative",
          zIndex: 2
        }}>
          <Typography variant="body1" sx={{
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "18px",
            color: "#363636",
            textAlign: "center",
          }}>{`${currentStep}/${totalSteps}`}</Typography>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={0.75} 
            sx={{ width: '100%', marginBottom: 2 }}
            mt={1}
          >
            {Array.from({ length: totalSteps }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  height: 6,
                  borderRadius: 10,
                  backgroundColor: index < currentStep ? '#009F6B' : '#CDECE2', // active vs inactive color
                  transition: 'background-color 0.3s',
                }}
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{
          width: "100%",
          maxWidth: "888px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "32px auto 28px auto",
          backgroundColor: "#FFF",
          height: "520px",
          borderRadius: "40px",
          p: "52px 80px 82px 80px"
        }}>
          <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}>
            <Typography variant="h3" sx={{ 
              fontSize: { xs: "24px", md: "28px" }, 
              lineHeight: "32px", 
              fontWeight: 700, 
              color: "#363636"
            }}>
              {db[currentStep - 1]?.label?.uz}
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: { xs: "14px", md: "18px" }, 
              lineHeight: "22px", 
              fontWeight: 400, 
              color: "#363636" 
            }}>
              {db[currentStep - 1]?.description?.uz}
            </Typography>
          </Box>
          <Box sx={{
            width: "100%",
            minHeight: "260px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Question
              key={`${type}-${currentStep}`}
              answers={db[currentStep - 1]?.answers ?? []}
              question={db[currentStep - 1]}
              style={db[currentStep - 1]?.style}
              id={String(currentStep)}
              setCurrentStep={setCurrentStep}
            />
          </Box>
        </Box>
        <Box sx={{
          margin: "0 auto",
          display: "flex",
          gap: "20px"
        }}>
          {currentStep !== 1 && <Button
            variant="containedReversed"
            size="largeSquare"
            sx={{ 
              backgroundColor: "secondary.main",
              paddingLeft: { xs: "6px", md: "8px" },
              paddingRight: { xs: "6px", md: "24px" },
              "& .MuiButton-startIcon": {
                marginRight: { xs: "6px", md: "12px" },
                marginLeft: "0px",
              }
            }}
            startIcon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="#009F6B"/>
          <path d="M12.9289 19.9998L16.9695 24.0404L18.9898 26.0607M12.9289 19.9998L16.9695 15.9592L18.9898 13.9389M12.9289 19.9998H21.0102L25.0508 19.9998L27.0711 19.9998" stroke="white" strokeWidth="1.5"/>
          </svg>}
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            disabled={currentStep === 1}
          >
            Oldingisi
          </Button>}
          {currentStep !== totalSteps && <Button
            variant="contained"
            color="primary"
            size="largeSquare"
            endIcon={<RightArrow />}
            sx={{ paddingRight: { xs: "6px", md: "8px" } }}
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))}
            disabled={currentStep === totalSteps}
          >
            Keyingisi
          </Button>}
        </Box>
      </Box>
    </Box>
  );
}