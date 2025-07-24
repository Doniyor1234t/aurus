import { Box, Button, Container, Typography } from '@mui/material';
import FullLogo from '../../assets/icons/FullLogo';
import cls from './Footer.module.scss';

const Footer = () => (
  <Box
    component="footer"
  >
    <Container 
      maxWidth="xl" 
      sx={{ padding: "0 16px", textAlign: 'center', py: 2 }}
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
          }}
        >
          <Typography variant="h2" sx={{ fontSize: "64px", lineHeight: "74px", fontWeight: 700 }}>
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
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "speace-between",
          gap: 1,
          marginTop: "24px",
        }}>
          <Typography variant="body2" sx={{ color: "#fff", fontSize: "14px", lineHeight: "20px", marginTop: "24px" }}>
            © Aurus, 2025. Barcha huquqlar himoyalangan
          </Typography>
          <Box>
            <Typography variant="body2" sx={{ color: "#fff", fontSize: "14px", lineHeight: "20px" }}>
              <a href="https://aurus.uz/privacy-policy" style={{ color: "#fff", textDecoration: "none" }}>
                Foydalanuvchi shartnomasi
              </a>
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff", fontSize: "14px", lineHeight: "20px" }}>
              <a href="https://aurus.uz/privacy-policy" style={{ color: "#fff", textDecoration: "none" }}>
                Maxfiylik siyosati
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
