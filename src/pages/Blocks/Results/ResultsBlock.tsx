import { Box, Button, Container } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import cls from "./ResultsBlock.module.scss";
import { useRef, useState } from "react";
import 'swiper/swiper-bundle.css';
import resultImg from "assets/images/0ba8bc39e00267813d00a9ea8e01d3e810e9b214.png";

export const ResultsBlock = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Box>
      <Container maxWidth="xl">
      <Box className={cls.customNavigation}>
        <Button ref={prevRef} className={cls.customPrev}>
          Oldin
        </Button>
        <Button ref={nextRef} className={cls.customNext}>
          Keyin
        </Button>
      </Box>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className={`${cls.mySwiper2} ${cls.mainSwiper}`}
      >
        {[...Array(10)].map((_, i) => (
          <SwiperSlide key={i}>
            <Box className={cls.imageWrapper}>
              <img src={resultImg} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={4.6}
      modules={[FreeMode, Navigation, Thumbs]}
      className={cls.thumbSwiper}
    >
      <Container maxWidth="xl">
      {[...Array(10)].map((_, i) => (
        <SwiperSlide key={i}>
          <Box className={cls.thumbWrapper}>
            <img src={resultImg} />
          </Box>
        </SwiperSlide>
      ))}

      </Container>
    </Swiper>
    </Box>
  )
}