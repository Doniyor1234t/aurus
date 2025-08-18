import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RedirectBlock = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: { xs: "32px -8px", md: "80px 0" },
          gap: { xs: 2, md: 4 },
          position: "relative",
          height: { xs: "382px", md: "562px" },
          backgroundColor: "primary.main",
          borderRadius: { xs: "20px", md: "50px" },
          overflow: "hidden",
          zIndex: 0,
          "&:before": {
            content: '""',
            position: "absolute",
            top: {xs: "-251px",md:"-482px"},
            left: {xs: "-147px", md:"-372px"},
            width: {xs: "294.456px", md:"582.468px"},
            height: {xs: "609.045px", md:"1204.761px"},
            transform: "rotate(30deg)",
            borderRadius: {xs: "609.045px", md:"1204.761px"},
            background: "radial-gradient(50% 50% at 50% 50%, #32B188 0%, rgba(50, 177, 136, 0.00) 100%)",
            zIndex: -1,
          },
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: { xs: "-242px", md: "-542px"},
            right: { xs: "-112px", md: "-279px" },
            width: { xs: "327px", md: "599.13px"},
            height: { xs: "508px", md: "1229.027px" },
            transform: "rotate(30deg)",
            borderRadius: {xs: "508.178px", md:"1229.027px"},
            zIndex: "-1",
            background: "radial-gradient(50% 50% at 50% 50%, #65C4A5 0%, rgba(101, 196, 165, 0.00) 100%)"
          },
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: { xs: "327px", md: "680px" },
            textAlign: "center",
            color: "#fff",
            gap: { xs: 1.5, md: 2.5 },
            position: "relative",
            zIndex: 200,
          }}>
            <Box sx={{ 
              width: { xs: "100%", md: "828px" },
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 700,
             }}>
              <Typography variant="h2" sx={{
                fontSize: { xs: "32px", md: "50px" },
                lineHeight: { xs: "40px", md: "56px" },
                fontWeight: 700,
                textAlign: "center",
                color: "#CDECE2",
                "& span": {
                  color: "#fff",
                  fontStyle: "italic",
                }
              }}>
                Salomatligingizni baholash uchun qisqa <span>so‘rovnomadan</span> o‘ting
              </Typography>
            </Box>
            <Box sx={{ 
              maxWidth: "520px",
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 400,
             }}>
              <Typography variant="body1" sx={{
                color: "#FFF",
                textAlign: "center",
                lineHeight: { xs: "22px", md: "32px" },
                fontSize: { xs: "16px", md: "24px" },
              }}>
                Siz shaxsiy tavsiyalar olasiz va Argon mahsuloti sizga mos keladimi bilib olasiz
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1.5, md: 2 },
          }}>
            <Button
              variant="containedReversed"
              // color="primary"
              sx={{ 
                width: "100%", 
                fontSize: "18px", 
                fontWeight: 700, 
                padding: "8px 8px 8px 24px",
                paddingRight: { xs: "6px", md: "8px" },
              }}
              endIcon={
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" width="40" height="40" rx="20" fill="#009F6B"/>
                  <path d="M27.5711 19.9998L23.5305 24.0404L21.5102 26.0607M27.5711 19.9998L23.5305 15.9592L21.5102 13.9389M27.5711 19.9998H19.4898L15.4492 19.9998L13.4289 19.9998" stroke="white" strokeWidth="1.5"/>
                </svg>
              }
              onClick={() => navigate('/survey')}
            >
              So‘rovnomani boshlash
            </Button>
            <Typography variant="body1" sx={{
              fontSize: { xs: "12px", md: "14px" },
              lineHeight: { xs: "normal", md: "18px" },
              fontWeight: 300,
              color: "#FFF",
            }}>
              So‘rovnoma davomiyligi 3 daqiqa
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default RedirectBlock;