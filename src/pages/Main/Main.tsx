import { Box, Button, ButtonGroup, Container, Rating, Typography } from "@mui/material"
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon"
import RightArrow from "../../assets/icons/RightArrow"
import cls from "./Main.module.scss"
import VectorPointer from "../../assets/icons/VectorPointer"

export const MainBlock = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "0 0" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Box sx={{ mb: 4 }}>
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
            <Typography variant="h1" sx={{ mt: 2, mb: 1 }}>
              Bizning tabiiy bo‘g‘imlar kompleksi bilan yana oson harakatlaning
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: "16px", sm: "18px", md: "22px" }, display: { xs: "none", md: "block" }, lineHeight: "30px" }}>
            Bizning tabiiy bo‘g‘imlar kompleksi bilan yana oson harakatlaning. 
            Ushbu mahsulotlar bo‘g‘imlarni mustahkamlash va og‘riqni kamaytirishga yordam beradi.
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', gap: { xs: 1.5, md: 2.5 }, mb: 4, position: 'relative' }}>
          <Button
            variant="contained"
            color="secondary"
            size="largeSquare"
          >
            Konsultatsiya olish
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
          <Box className={cls.btnPointer} sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 0, right: 0 }}>
            <VectorPointer />
            <Typography variant="body2" sx={{ fontSize: "16px", lineHeight: "20px", fontWeight: 400, color: "#515152", }}>
              So’rovnamadan o‘ting va tavsiya oling
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 1.5, mb: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            size="largeSquare"
          >
            Konsultatsiya olish
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
        </Box>
      </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4, pl: "30px", width: "100%", maxWidth: "454px", position: 'relative' }}>
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
    </Container>
  )
}