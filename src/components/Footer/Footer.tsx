import { Box, Button, Container, Link, Typography } from '@mui/material';
import FullLogo from '../../assets/icons/FullLogo';
import cls from './Footer.module.scss';
import Grid from '@mui/material/Grid';

const Footer = () => {
  const connects = {
    contacts: [
      {
        label: '+998-78-113-08-03',
        link: 'tel:+998-78-113-08-03',
      },
      {
        label: 'Instagram',
        link: 'https://www.instagram.com/aurus.uz/',
      },
      {
        label: 'Telegram',
        link: 'https://t.me/aurus_uz',
      },
      {
        label: 'YouTube',
        link: 'https://www.youtube.com/@aurus.uz',
      },
      {
        label: "Manzil: Toshkent shahar, Shayxontoxur tumani, Bog' ko'chasi",
        link: '#location',
      }
    ],
    forClients: [
      {
        label: 'Onlayn so‘rov',
        link: '/survey',
      },
      {
        label: 'Argon mahsuloti',
        link: '#results',
      },
      {
        label: 'Savatcha',
        link: '#faqs',
      },
      {
        label: 'Rasmiylashtirish',
        link: '/about',
      },
      {
        label: "Sharhlar",
        link: '/about',
      }
    ],
    aboutUs: [
      {
        label: "Biz haqimizda",
        link: '/about',
      },
      {
        label: "Sertifikatlar",
        link: '/certificates',
      },
      {
        label: "Blog",
        link: '/blog',
      },
      {
        label: "Hamkorlik",
        link: '/partnership',
      },
      {
        label: "Mutaxassislar uchun",
        link: '/experts',
      },
    ],
    services: [
      {
        label: "Aloqa",
        link: '/contact',
      },
      {
        label: "Savollar/Javoblar",
        link: '/faq',
      },
      {
        label: "Kirish",
        link: '/login',
      },
      {
        label: "Profil",
        link: '/profile',
      },
    ]
  }
  return (
  <Box
    component="footer"
  >
    <Container 
      maxWidth="xl" 
      sx={{ padding: { xs: "0 8px 8px 8px", md: "0 24px 24px 24px" }, textAlign: 'center', py: 2 }}
    >
      <Box sx={{
          backgroundColor: "primary.main", 
          textAlign: "center", 
          color: "#fff", 
          borderRadius: "30px", 
          padding: "16px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Container>
        <Box className={cls.footerLogo}>
          <span className={cls.footerLogoBackgroundCorner1}></span>
          <span className={cls.footerLogoBackgroundCorner2}></span>
          <FullLogo />
        </Box>
        <Box sx={{
            width: "100%",
            maxWidth: "720px", 
            textAlign: "center", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center" ,
            justifyContent: "center",
            gap: 3,
            marginTop: "132px",
            margin: "132px  auto 52px auto",
          }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "64px" }, lineHeight: "74px", fontWeight: 700 }}>
            Ariza qoldiring va biz siz bilan bog‘lanamiz
          </Typography>
          <Button
            variant="containedReversed"
            // color="primary"
            sx={{ 
              width: "100%", 
              maxWidth: "209px", 
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
          >
            Ariza qoldirish
          </Button>
        </Box>
        <Box sx={{ bgcolor: "#fff", color: "#737374", py: { xs: 4, md: 6 }, px: { xs: 4, md: 6.25 }, width: "100%", borderRadius: "30px" }}>
          <Grid container spacing={4} columnSpacing={{ xs: 2, sm: 4, md: 2.5 }} sx={{ justifyContent: "center" }}>
            {Object.entries(connects).map(([key, items]) => (
              <Grid item key={key} width={"248px"}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <Typography variant="body1" sx={{ 
                    fontSize: "12px", 
                    fontWeight: 400, 
                    mb: 2.5
                  }}>
                    {key === 'contacts' ? 'Aloqa uchun' :
                    key === 'forClients' ? 'Mijozlar uchun' :
                    key === 'aboutUs' ? 'Kompaniya haqida' : 'Xizmat va yordam'}
                  </Typography>
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      href={"#"}
                      // href={item.link}
                      // target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "#363636", textDecoration: "none", fontSize: { xs: "16px", md: "18px" }, mb: 1.5, textAlign: "left" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          width: "100%",
          px: { xs: 0, md: 6.25 },
          py: { xs: 2.5, md: 4.5 },
        }}>
          <Typography variant="body2" sx={{ color: "#fff", fontSize: "14px", lineHeight: "20px"}}>
            © Aurus, 2025. Barcha huquqlar himoyalangan
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Typography variant="body2" sx={{ color: "#fff", fontSize: "14px", lineHeight: "20px" }}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Foydalanuvchi shartnomasi
              </a>
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff", fontSize: "14px", lineHeight: "20px" }}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Maxfiylik siyosati
              </a>
            </Typography>
          </Box>
        </Box>

        </Container>
      </Box>
    </Container>
  </Box>
)};

export default Footer;
