import { Box, Button, ButtonGroup, Container, Rating, Typography } from "@mui/material"
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon"
import RightArrow from "../../assets/icons/RightArrow"
import cls from "./Main.module.scss"
import VectorPointer from "../../assets/icons/VectorPointer"
import MainImg from "../../assets/images/20250703_1101_Lower Back Pain_remix_01jz7dtt1ff80sxymvhvkj8myf 1.png"
import BackgroundIcon from "../../assets/icons/BackgroundIcon"

export const MainBlock = () => {
  return (
    <Box sx={{position: 'relative'}}>
      <Container maxWidth="xl">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative'
        }}>
          <Box sx={{
            mb: { xs: 2, md: 10.5 },
            overflow: 'hidden',
          }}>
            <Box sx={{ 
                display: 'flex', 
                maxWidth: "680px", 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                mt: { xs: 3, md: 10.5 },
              }}
            >
              <Box sx={{ mb: { xs: 2.5, md: 4 } }}>
                <Box>
                  <ButtonGroup 
                    size="smallRound"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'flex-start',
                      gap: 1.5, 
                      backgroundColor: "rgba(221, 221, 221, 0.40)",
                      padding: 0.5,
                      borderRadius: 6.25,
                      width: 'fit-content',
                    }}
                  >
                    <Button 
                      variant="outlined"
                      sx={{
                        fontSize: "14px", 
                        fontWeight: "300", 
                        background: "#fff",
                        color: "#515152",
                        padding: '8px 12px',
                      }} 
                    >
                      Argon mahsuloti
                    </Button>
                    <Button 
                      variant="outlined"
                      sx={{
                        fontSize: "14px", 
                        fontWeight: "300", 
                        background: "transparent",
                        color: "#515152",
                        padding: '8px 12px',
                      }} 
                      endIcon={<ArrowRightIcon />} 
                    >
                      Og’riq tabiiy yechimi
                    </Button>
                  </ButtonGroup>
                  <Typography variant="h1" sx={{ mt: { xs: 1.5, md: 2.5 }, mb: { xs: 0, md: 5 } }}>
                    Bizning tabiiy bo‘g‘imlar kompleksi bilan yana oson harakatlaning
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2, maxWidth: "580px", fontSize: { xs: "16px", sm: "18px", md: "22px" }, display: { xs: "none", md: "block" }, lineHeight: "30px" }}>
                  Argon bilan bo‘g‘imlaringiz va suyaklaringizni sog‘lom saqlang — erkin harakatlaning va hayot sifatini oshiring.
                </Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', gap: { xs: 1.5, md: 2.5 }, mb: 4, position: 'relative' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="largeSquare"
                >
                  Ariza qo’ldirish
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="largeSquare"
                  endIcon={<RightArrow />}
                  sx={{ paddingRight: { xs: "6px", md: "8px" } }}
                >
                  So‘rovdan o‘tish
                </Button>
                <Box className={cls.btnPointer} sx={{ display: { xs: 'none', md: 'flex' }, position: 'absolute'}}>
                  <VectorPointer />
                  <Typography variant="body2" sx={{ alignSelf: "flex-end", fontSize: "16px", lineHeight: "20px", fontWeight: 400, color: "#515152", }}>
                    So’rovnamadan o‘ting va tavsiya oling
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', gap: 1.5, mb: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="largeSquare"
                >
                  Ariza qo’ldirish
                </Button>
                <Button
                  variant="containedReversed"
                  size="largeSquare"
                  sx={{ 
                    backgroundColor: "secondary.main",
                    paddingRight: { xs: "6px", md: "8px" },
                    
                  }}
                  endIcon={<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="40" height="40" rx="20" fill="#009F6B"/>
                <path d="M27.5711 19.9998L23.5305 24.0404L21.5102 26.0607M27.5711 19.9998L23.5305 15.9592L21.5102 13.9389M27.5711 19.9998H19.4898L15.4492 19.9998L13.4289 19.9998" stroke="white" strokeWidth="1.5"/>
              </svg>}
                >
                  So‘rovdan o‘tish
                </Button>
              </Box>
            </Box>
            <Box sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              justifyContent: 'center',
              width: "100%",
              height: "407px",
              position: 'relative',
              "& img": {
                width: "100%",
                position: "absolute",
                top: "-22px",
                left: "-2%",
                zIndex: 0,
              },
              "&:after": {
                content: '""',
                position: "absolute",
                top: "88%",
                left: "0",
                width: "100%",
                height: "100%",
                background: "linear-gradient(180deg, #FFF 0%, #FFF 75%, rgba(255, 255, 255, 0.60) 81.34%, rgba(255, 255, 255, 0.06) 93.54%, rgba(255, 255, 255, 0.00) 98.87%)",
                rotate: "180deg",
                zIndex: 0,
              }
            }}>
              <img src={MainImg} alt="Main Image" className={cls.mainImg} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  width: "214.285px",
                  height: "214.284px",
                  zIndex: -1,
                  "& svg": {
                    width: "100%",
                    height: "100%",
                  }
                }}
              >
                <BackgroundIcon />
              </Box>
            </Box>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2, 
                mt: { xs: 8, md: 12 }, 
                pl: { xs: 1.5, md: 3.75 }, 
                pr: { xs: 1.5, md: 0 },
                pt: { xs: 1.5, md: 0 },
                pb: { xs: 1.5, md: 0 },
                width: "100%", 
                maxWidth: "454px", 
                position: 'relative',
                backgroundColor: { xs: "#F8F8F8", md: "transparent" }
              }}
            >
              <span className={cls.commentLine}></span>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Rating name="read-only" defaultValue={5} readOnly sx={{ color: '#009F6B' }} />
                <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 400, fontSize: "16px" }}>
                  32 sharhlar
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ 
                  fontSize: { xs: "16px", sm: "18px", md: "20px" }, 
                  lineHeight: "140%", 
                  color: "#363636", 
                }}
              >
                Uch oylik foydalanishdan so‘ng, og‘riqsiz yashashni qayta his qildim. Endi hayotim yengil va mazmunli!”
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box className={cls.halfBackground} sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: '#FFF',
          pointerEvents: 'none',
          zIndex: -1,
          display: { xs: 'none', md: 'block' },
          overflowX: 'hidden',
          overflowY: 'visible',
          height: '100%',
          width: '50%',
          "&:after": {
            content: '""',
            position: 'absolute',
            right: 0,
            top: "70%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, #FFF 0%, #FFF 75%, rgba(255, 255, 255, 0.60) 81.34%, rgba(255, 255, 255, 0.06) 93.54%, rgba(255, 255, 255, 0.00) 98.87%)",
            rotate: "180deg",
            // backgroundColor: "#FFF",
            // zIndex: -1,
          },
          "&:before": {
            content: '""',
            position: 'absolute',
            right: "-660px",
            top: "-366px",
            // right: 0,
            // bottom: 0,
            width: "1196px",
            height: "1957.029px",
            borderRadius: "1957.029px",
            background: "radial-gradient(50% 50% at 50% 50%, rgba(101, 196, 165, 0.15) 0%, rgba(101, 196, 165, 0.00) 100%)",
            transform: "rotate(15deg)",
            zIndex: 1
          }
        }}
      >
        <Box sx={{
          position: "relative",
          top: "-26px",
          right: "81px"
        }}>
          <img src={MainImg} alt="Main Image" />
        </Box>
        <Box sx={{
          mb: 17.5, 
          position: 'absolute', 
          borderBottom: 0, 
          left: "320px", 
          bottom: 0, 
          zIndex: -1,
        }}>
          <BackgroundIcon />
        </Box>
      </Box>
    </Box>
  )
}