import { Box, Button, Container, Divider, Typography } from "@mui/material"
import Img from "assets/images/Rectangle20.png"
import CheckIconSvgLicence from "../../../assets/icons/CheckIconSvg"

export const PriceBlock = () => {
  const priceDetails = [
    {
      title: "6-oylik kurs",
      sub_title: "Kapsula",
      price: "200$"
    },
    {
      title: "6-oylik kurs",
      sub_title: "Surtma",
      price: "300$"
    },
    {
      title: "6-oylik kurs",
      sub_title: "Kapsula & Surtma",
      price: "450$"
    },
  ]
  const priceDeadlines = [
    {
      title: "3 oylik",
      active: false,
    },
    {
      title: "6 oylik",
      active: true,
    },
    {
      title: "9 oylik",
      active: false,
    },
  ]
  return (
    <Box sx={{
      position: "relative",
    }}>
      {/* <Box sx={{
        position: { xs: "relative", md: "absolute" },
        zIndex: -1,
        top: 0,
        left: 0,
        width: { xs: "100%", md: "50%" },
        height: { xs: "375px", md: "auto" },
        display: "block",
        borderRadius: "0 0 0 20px",
        overflow: "hidden",
      }}>
        <img src={Img} alt="Background" style={{ width: "100%", height: "100%" }} />
      </Box> */}
      <Container maxWidth="xl" >
        <Box sx={{
          display: "flex",
          alignContent: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          height: { xs: "auto", md: "900px" },
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: {xs:"100%", md:"50%"}
          }}>
            <img src={Img} alt="Background" style={{ width: "100%", height: "100%" }} />
          </Box>
          <Box sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: {xs:"100%", md:"50%"},
            gap: 4,
          }}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "500px" },
            }}>
              <Typography variant="body1" sx={{
                display: { xs: "none", md: "block" },
                fontSize: { xs: "22px", md: "22px" },
                lineHeight: "30px",
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
                color: "primary.main",
              }}>
                Davolash kursi
              </Typography>
              <Typography variant="h2" sx={{
                fontSize: { xs: "32px", md: "50px" },
                lineHeight: { xs: "40px", md: "56px" },
                fontWeight: 700,
                textAlign: "left",
                marginBottom: { xs: 2, md: 0 },
              }}>
                Suyak va bo‘g‘imdagi og‘riqqa qarshi yechim
              </Typography>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: 2,
              width: { xs: "100%", md: "500px" },
            }}>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                p: 0.5,
                backgroundColor: "#F8F8F8",
                width: "100%",
                borderRadius: "100px",
              }}>
                {priceDeadlines.map((deadline, index) => (
                  <Button
                    key={index}
                    sx={{
                      p: "8px 20px",
                      width: "100%",
                      fontSize: { xs: "16px", md: "18px" },
                      lineHeight: { xs: "20px", md: "24px" },
                      fontWeight: 700,
                      color: deadline.active ? "#F8F8F8" : "#363636",
                      backgroundColor: deadline?.active ? "primary.main" : "#F8F8F8",
                      "&:hover": {
                        backgroundColor: deadline?.active ? "primary.main" : "#F8F8F8",
                      }
                    }}
                  >
                    {deadline.title}
                  </Button>
                ))}
              </Box>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px",
                backgroundColor: "#F8F8F8",
                borderRadius: "16px",
                width: "100%",
              }}>
                {priceDetails.map((detail, index) => (
                  <>
                  <Box key={index} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    backgroundColor: "#F8F8F8",
                  }}>
                    <Box sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}>
                      <Typography variant="body1" sx={{
                        fontSize: { xs: "18px", md: "20px" },
                        lineHeight: { xs: "20px", md: "28px" },
                        fontWeight: 700,
                        color: "#363636",
                      }}>
                        {detail.title}
                      </Typography>
                      <Typography variant="body1" sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: { xs: "18px", md: "22px" },
                        fontWeight: 400,
                        color: "#363636",
                      }}>
                        {detail.sub_title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{
                        fontSize: { xs: "22px", md: "20px" },
                        lineHeight: { xs: "28px", md: "28px" },
                        fontWeight: 700,
                        color: "primary.main",
                      }}>
                        {detail.price}
                      </Typography>
                    </Box>
                  </Box>
                  {index < priceDetails.length - 1 && <Divider sx={{
                    my: 2.25,
                    width: "100%",
                    borderColor: "rgba(221, 221, 221, 0.60)",
                  }} />}
                  </>
                ))}
              </Box>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "500px" },
            }}>
              <Button variant="contained" color="primary" sx={{
                height: "48px",
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: { xs: "18px", md: "24px" },
                fontWeight: 700,
              }}>
                Sotib olish
              </Button>
              <Box sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                mt: 2,
                gap: 1,
              }}>
                <CheckIconSvgLicence />
                <Typography variant="body1" sx={{
                  fontSize: { xs: "14px", md: "12px" },
                  lineHeight: { xs: "20px", md: "18px" },
                  fontWeight: 400,
                  color: "#363636",
                  textAlign: "center",
                }}>
                  Argon mahsuloti O‘zbekiston Respublikasi me’yorlariga muvofiq sertifikatlangan
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}