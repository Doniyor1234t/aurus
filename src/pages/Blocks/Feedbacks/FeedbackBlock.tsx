import { Box, Container, IconButton, Typography } from "@mui/material"
import { CircularVideoComponent } from "./components/CyrcleVideo/CyrcleVideo"
import PosterImg from "assets/images/0ba8bc39e00267813d00a9ea8e01d3e810e9b214.png"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { useRef, useState } from "react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export const FeedbackBlock = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const feedbacks = [
    {
      id: 1,
      text: "“Oddiy uy ishlari ham mashaqqatga aylangan edi. Argon haqida eshitib, sinab ko‘rishga qaror qildim. Uch oylik foydalanishdan so‘ng, og‘riqsiz yashashni qayta his qildim. Endi hayotim yengil va mazmunli!”",
      author: "Aziza, 38 yosh, uy bekasi"
    },
    {
      id: 2,
      text: "“Argon yordamida og‘riqlarim kamaydi va harakatlanishim yaxshilandi. Endi sport bilan shug‘ullanib, faol hayot kechirishni davom ettiraman.”",
      author: "Jasur, 25 yosh, sportchi"
    },
    {
      id: 3,
      text: "“Argonni ishlatganimdan so‘ng, belimdagi og‘riqlar sezilarli darajada kamaydi. Endi kundalik ishlarimni bemalol bajara olaman.”",
      author: "Malika, 30 yosh, ofis xodimi"
    }
  ]
  return (
    <Box sx={{
      backgroundColor: "#F5FBF9",
      padding: { xs: "32px 0", md: "80px 0" },
    }}>
      <Container maxWidth="xl" >
        <Box sx={{
          padding: { xs: "20px 0", md: "40px 0" },
          maxWidth: "520px",
        }}>
          <Typography variant="h2" sx={{
            fontSize: { xs: "32px", md: "50px" },
            lineHeight: "74px",
            fontWeight: 700,
            textAlign: { xs: "center", md: "left" },
          }}>
            Argon haqida bizning mijozlarimiz fikri
          </Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: { xs: 3, md: 0 },
        }}>
          <Box
            sx={{
              flex: "1 1 100%",
              maxWidth: { xs: "100%", md: "53%" },
              // padding: { xs: "16px", md: "32px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{
              maxHeight: { xs: "280px", md: "232px" },
            }}>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={1}
                style={{ width: "100%", height: "100%" }}
                modules={[FreeMode, Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                onBeforeInit={(swiper) => {
                  if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                }}
              >
                {feedbacks.map((feedback) => (
                  <SwiperSlide key={feedback.id}>
                    <Box sx={{
                      pt: { xs: 1, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "center", md: "flex-start" },
                      gap: 2,
                    }}>
                      <Typography variant="subtitle1" sx={{ 
                        fontSize: { xs: "18px", md: "24px" }, 
                        fontWeight: 700,
                        lineHeight: { xs: "20px", md: "28px" },
                        ml: { xs: 0, md: 1.5 },
                      }}>
                        {feedback.author}
                      </Typography>
                      <Box sx={{
                        backgroundColor: "#fff",
                        padding: { xs: "16px", md: "20px" },
                        borderRadius: "20px",
                      }}>
                        <Typography variant="body1" sx={{ 
                          fontSize: { xs: "14px", md: "22px" }, 
                          fontWeight: 400,
                          lineHeight: { xs: "20px", md: "30px" },
                          mb: 2 
                        }}>
                          {feedback.text}
                        </Typography>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: { xs: 2.5, md: 2 },
              p: { xs: 2, md: 2.5 },
            }}>
              <IconButton
                ref={prevRef}
                sx={{
                  backgroundColor: "secondary.main",
                  color: "#363636",
                  height: { xs: "44px", md: "48px" },
                  width: { xs: "44px", md: "48px" },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  '&:hover': {
                    backgroundColor: "secondary.dark",
                  }
                }}
              >
                <ArrowBack sx={{
                  color: "primary.main",
                }}/>
              </IconButton>
              <IconButton
                ref={nextRef}
                sx={{
                  backgroundColor: "primary.main",
                  color: "#363636",
                  height: { xs: "44px", md: "48px" },
                  width: { xs: "44px", md: "48px" },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  '&:hover': {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                <ArrowForward sx={{
                  color: "#fff"
                }}/>
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              flex: "1 1 100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: "280px", md: "380px"},
              width: { xs: "280px", md: "380px" },
            }}
          >
            <CircularVideoComponent src="" size={{ xs: "280px", md: "380px" }} poster={PosterImg} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}