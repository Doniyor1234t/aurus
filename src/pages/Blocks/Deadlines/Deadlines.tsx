import { Box, Container, Typography } from "@mui/material"
import cls from "./Deadlines.module.scss";
import MainImg from "assets/images/b6c3708dcacb51232336a823ed456d24377ed0ca.png";
import CheckIcon from "../../../assets/icons/CheckIcon";
import BackgroundIcon from "../../../assets/icons/BackgroundIcon";

export const DeadlinesBlock = () => {
  const deadlines = [
    {
      title: "1-3 oy",
      description: "Argonning dastlabki 1–3 oyida og‘riq va yallig‘lanish kamayadi. Bo‘g‘imlar erkinlashadi, qotishish yo‘qoladi va harakatlanish qulaylashadi.",
    },
    {
      title: "3-6 oy",
      description: "3–6 oy davomida harakatlanish to‘liq tiklanadi. Bo‘g‘im atrofidagi mushak va paylar mustahkamlanadi, og‘riq deyarli yo‘qoladi, kasallik qaytalanish xavfi kamayadi.",
    },
    {
      title: "6-9 oy",
      description: "6–9 oy ichida siz og‘riqsiz va cheklovlarsiz faol hayotga qaytasiz. Bo‘g‘im va umurtqa mustahkamlanadi, kurs tugaganidan keyin ham natija uzoq davom etadi.",
    },
  ]
  return (
    <Box sx={{ 
      backdropFilter: "blur(20px)",
      textAlign: "center",
      backgroundColor: "#F5FBF9",
      overflow: 'hidden',
    }}>
      <Box sx={{
        position: "absolute",
        zIndex: -1,
        top: "720px",
        left: "-170px",
        width: "240px",
        height: "240px",
        display: { xs: "none", md: "block" },
        "& svg": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }
      }}>
        <BackgroundIcon />
      </Box>
      {/* <Box sx={{
        position: "absolute",
        zIndex: -1,
        top: "-180px",
        right: "-178px",
        width: "240px",
        height: "240px",
        display: { xs: "none", md: "block" },
        "& svg": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }
      }}>
        <BackgroundIcon />
      </Box> */}
      <Container maxWidth="xl">
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "32px 0", md: "80px 0" },
          gap: 6,
          position: "relative",
        }}>
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "680px",
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 600,
              color: "primary.main",
              display: { xs: "none", md: "block" },
            }}>
              Davolash kursi muddati
            </Typography>
            <Typography variant="h2" sx={{ 
              alignSelf: "flex-start", 
              fontSize: { xs: "32px", md: "50px" }, 
              lineHeight: { xs: "125%", md: "112%" }, 
            }}>
              Davolash kursidan o’tgandan so’ng nimalarga erishasiz?
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: 5,
          }}>
            <Box sx={{
              display: { xs: "none", md: "flex" },
              // justifyContent: "flex-start",
              // alignItems: "flex-start",
              position: "relative",
              width: "528px",
              height: "542px",
              borderRadius: "30px",
              overflow: "hidden",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              },
            }}>
              <img src={MainImg} alt="Main" className={cls.mainImage} />
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              maxWidth: { xs: "100%", md: "55%" },
              width: "100%",
              position: "relative",
              zIndex: 0,
              "&:before": {
                content: '""',
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                left: 32,
                width: "1px",
                height: "100%",
                backgroundColor: "rgba(115, 115, 116, 0.20)",
                zIndex: 0,
              },
            }}>
              {deadlines.map((deadline, index) => (
                <Box key={index} sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center", md: "flex-start" },
                  justifyContent: "space-between",
                  gap: { xs: 2, md: 5 },
                  position: "relative",
                  zIndex: 1,
                  background: index + 1 === deadlines.length ? "#F5FBF9" : "transparent",
                }}>
                  <Box sx={{
                    height: { xs: "44px", md: "64px" },
                    width: { xs: "44px", md: "64px" },
                    p: { xs: 1.5, md: 2.5 },
                    borderRadius: "50%",
                    backgroundColor: index === 0 ? "#DCF1EB" : "#EBF0EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                  }}>
                    <CheckIcon fill={index === 0 ? "#009F6B" : "#737374"}/>
                  </Box>
                  <Box sx={{
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 1.25, md: 2.5 },
                    alignItems: { xs: "center", md: "flex-start" },
                  }}>
                    <Typography variant="h3" sx={{ 
                      fontSize: { xs: "32px", md: "46px" }, 
                      fontWeight: 700, 
                      opacity: index === 0 ? 1 : 0.4,
                    }}>
                      {deadline.title}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      fontSize: { xs: "14px", md: "22px" }, 
                      lineHeight: { xs: "20px", md: "30px" }, 
                      textAlign: { xs: "center", md: "left" }, 
                      color: "#363636",
                      opacity: index === 0 ? 1 : 0.4,
                    }}>
                      {deadline.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
