import { Box, Container, Typography } from "@mui/material";
import ReasonCard from "./components/ReasonCard/ReasonCard";

export const ReasonsBlock = () => {
  const reasons = [
    {
      title: "Harakat paytidagi og‘riq",
      description: "Surtma muammoli joyga bevosita ta’sir qilib, yallig‘lanishni bartaraf etadi va harakatlanishni osonlashtiradi."
    },
    {
      title: "Dam olish paytidagi yoki tun og‘rig‘i",
      description: "Ko‘pincha kechasi yoki tinch holatda yuzaga keladi."
    },
    {
      title: "To‘satdan / keskin og‘riq",
      description: "Keskin, \"o‘qdek uradigan\" og‘riq. Asosan asab qisilishi, churra yoki shikastlanish bilan bog‘liq bo‘ladi."
    },
    {
      title: "Surunkali / bosimli og‘riq",
      description: "Doimiy, lekin kuchli emas. Ko‘pincha yoshga bog‘liq o‘zgarishlar, artroz yoki tog‘ay yemirilishi bilan bog‘liq."
    },
    {
      title: "Qotishish va g‘ijirlagan tovushlar",
      description: "Har doim og‘riq bilan bo‘lmasligi mumkin, lekin harakat qilishga xalaqit beradi."
    },
    {
      title: "Boshqa joylarga tarqalayotgan og‘riq",
      description: "Og‘riq faqat bo‘g‘inda emas, balki oyoq, qo‘l yoki belga ham tarqaladi."
    },
  ]
  return (
    <Box sx={{ position: "relative" }}>
      <Container>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 1.5,
          padding: { xs: "32px 0", md: "80px 0" },
        }}>
          <Typography variant="h2" sx={{ alignSelf: "flex-start", fontSize: "50px", maxWidth: "590px", lineHeight: "112%", mb: { xs: 2, md: 0 } }}>
            Suyak va bo‘g‘im og‘rig‘ining asosiy sabablari
          </Typography>
          {reasons.map((reason, index) => (
            <ReasonCard key={index} index={index} reason={reason} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}