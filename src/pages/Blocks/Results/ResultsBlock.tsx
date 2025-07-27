import { Box, Button, Container, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import cls from "./ResultsBlock.module.scss";
import { useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import resultImg from "assets/images/0ba8bc39e00267813d00a9ea8e01d3e810e9b214.png";

export const ResultsBlock = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <Box sx={{
      backgroundColor: "#F5FBF9",
      position: "relative",
      padding: { xs: "32px 0", md: "80px 0" },
      overflowX: 'hidden',
    }}>
      <Container maxWidth="xl" sx={{
        // padding: { xs: "8px 0", md: "20px 0" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 2.5, md: 6 },
        position: "relative",
      }}>
        <Typography variant="h2" sx={{
          fontSize: { xs: "32px", md: "50px" },
          lineHeight: "74px",
          fontWeight: 700,
          textAlign: "center",
        }}>
          Natijalar
        </Typography>
        <Swiper
          key="main-swiper"
          onSwiper={setThumbsSwiper}
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          onAfterInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className={`${cls.mySwiper2} ${cls.mainSwiper}`}
        >
        <Box className={cls.customNavigation}>
          <Button size="smallRound" ref={prevRef} className={cls.customPrev} sx={{
            '&:disabled': {
              backgroundColor: "rgba(54, 54, 54, 0.20)",
              color: "#363636",
            },
          }}>
            Oldin
          </Button>
          <Button size="smallRound" ref={nextRef} className={cls.customNext} sx={{
            '&:disabled': {
              backgroundColor: "rgba(54, 54, 54, 0.20)",
              color: "#363636",
            },
          }}>
            Keyin
          </Button>
        </Box>
          {[...Array(10)].map((_, i) => (
            <SwiperSlide key={i}>
              <Box className={cls.imageWrapper}>
                <img src={resultImg} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Box sx={{
        paddingLeft: { xs: "calc((100vw - 345px) / 2)", md: "calc((100vw - 889px) / 2)" },
        mt: { xs: "8px", md: "20px" },
      }}>
        <Swiper
          key="thumb-swiper"
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={4.6}
          mousewheel={true}
          watchSlidesProgress={true}
          keyboard={true}
          freeMode={true}
          modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
          className={cls.thumbSwiper}
          style={{
            overflowX: 'hidden',
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            600: {
              slidesPerView: 3.5,
            },
            900: {
              slidesPerView: 4.6,
            },
          }}
          // centeredSlides={true}
        >
          {[...Array(10)].map((_, i) => (
            <SwiperSlide key={i}>
              <Box 
                className={`${cls.thumbWrapper} ${i === activeIndex ? cls.activeThumb : ''}`}
              >
                <img src={resultImg} />
              </Box>
            </SwiperSlide>
          ))}

        </Swiper>

      </Box>
    </Box>
  )
}