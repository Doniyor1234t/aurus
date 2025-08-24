import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import BackgroundPng from "assets/images/Union.png"

const FaqsBlock = () => {
  const faqs = [
    {
      question: "Argon qanday ishlaydi va haqiqatan ham foydali bo‘ladimi?",
      answers: [
        "Argonning tabiiy va ilmiy asoslangan tarkibi bo‘g‘im va suyak muammolarini yengillashtirishda yordam beradi. ",
        "Minglab foydalanuvchilar natijalaridan mamnun, bu esa mahsulotning samaradorligini tasdiqlaydi.",
      ],
      defaultExpanded: true,
    },
    {
      question: "Mahsulotni qanday qilib oson xarid qilish mumkin?",
      answers: [
        "Mahsulotni rasmiy veb-saytimiz orqali xarid qilishingiz mumkin.",
        "Bizda tez va qulay to'lov usullari mavjud."
      ]
    },
    {
      question: "Mahsulotni qancha muddat qo‘llash kerak?",
      answers: [
        "Argonni kuniga 1-2 marta, muammoli joyga surtish tavsiya etiladi.",
        "Natijalar odatda bir necha hafta ichida sezila boshlaydi, lekin to'liq ta'sir uchun kamida 1-2 oy davomida foydalanish tavsiya etiladi.",
      ]
    },
    {
      question: "Argonning asl ekanligini qanday tekshirish mumkin?",
      answers: [
        "Mahsulotni rasmiy veb-saytimiz orqali xarid qilishingiz mumkin.",
        "Bizda tez va qulay to'lov usullari mavjud."
      ]
    },
    {
      question: "Argon mening muammomga moskeladimi?",
      answers: [
        "Argonning tarkibi va foydalanuvchilar tajribasi ko'plab muammolarni hal qilishda yordam beradi.",
        "Agar sizda aniq bir muammo bo'lsa, bizning mutaxassislarimiz bilan maslahatlashishingiz mumkin."
      ]
    },
    {
      question: "Qo‘llashdan avval nimaga e’tibor berish kerak?",
      answers: [
        "Mahsulotni qo'llashdan avval terining kichik bir joyida allergik reaktsiya uchun sinov o'tkazish tavsiya etiladi.",
        "Agar sizda jiddiy teri muammolari bo'lsa, mutaxassis bilan maslahatlashish muhimdir."
      ]
    },
  ]
  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          // alignItems: "center",
          justifyContent: "center",
          padding: { xs: "32px 0", md: "80px 0" },
          gap: { xs: 2, md: 4 },
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            left: "-40px",
            top: { xs: "84px", md: "484px" },
            width: { xs: "120px", md: "240px" },
            height: { xs: "120px", md: "240px" },
            // display: { xs: "none", md: "block" },
            backgroundImage: `url(${BackgroundPng})`,
            backgroundSize: "cover",
            zIndex: -1,
          }
        }}>
          <Box>
            <Typography variant="h2" sx={{
              fontSize: { xs: "32px", md: "50px" },
              lineHeight: { xs: "40px", md: "56px" },
              fontWeight: 700,
              textAlign: { xs: "center", md: "left" },
            }}>Sizni qiziqtiradigan savollar</Typography>
          </Box>
          <Box sx={{
            maxWidth: "640px"
          }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                defaultExpanded={faq.defaultExpanded}
                id={`faq-${index}`}
                sx={{ 
                  marginBottom: { xs: 1.5, md: 2 },
                  backgroundColor: "#F8F8F8",
                  boxShadow: "none",
                  borderRadius: "20px",
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary 
                  expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M16 29.3332C23.3638 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.63616 2.6665 2.66663 8.63604 2.66663 15.9998C2.66663 23.3636 8.63616 29.3332 16 29.3332ZM17 11.9998C17 11.4476 16.5522 10.9998 16 10.9998C15.4477 10.9998 15 11.4476 15 11.9998L15 14.9999H12C11.4477 14.9999 11 15.4476 11 15.9999C11 16.5522 11.4477 16.9999 12 16.9999H15V19.9998C15 20.5521 15.4477 20.9998 16 20.9998C16.5522 20.9998 17 20.5521 17 19.9998L17 16.9999H20C20.5522 16.9999 21 16.5522 21 15.9999C21 15.4476 20.5522 14.9999 20 14.9999H17V11.9998Z" fill="#009F6B"/>
</svg>}
                  sx={{ 
                    padding: { xs: 2, md: 2.5 },
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    }
                  }}
                >
                  <Typography variant="body1" sx={{
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: 700,
                    color: "#363636",
                  }}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {faq.answers.map((answer, idx) => (
                    <Typography key={idx} variant="body2" sx={{ marginTop: 1 }}>
                      {answer}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default FaqsBlock