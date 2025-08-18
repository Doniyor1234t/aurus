import { AppBar, Avatar, AvatarGroup, Box, Button, ButtonGroup, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "assets/Logo.svg"; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import BasketIcon from '../../assets/icons/BasketIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
const AutoHeightToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 72, 
  [theme.breakpoints.up("sm")]: {
    minHeight: 64,
  },
  [theme.breakpoints.up("md")]: {
    minHeight: 72, 
  },
}));

const menu = [
  { label: 'Argon', options: [] },
  { label: 'Biz haqimizda', options: [] },
  { label: 'Natijalar', link: '#results' },
  { label: 'Savollar', link: '#faqs' },
]


const Header = () => {
  const navigate = useNavigate()
  return (
  <AppBar position="static" color="inherit">
    <Container maxWidth="xl" sx={{ padding: "0 16px" }}>
        <AutoHeightToolbar disableGutters>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <img src={Logo} alt="Aurus Logo" style={{ height: '40px' }} />
          </Link>
          <Box sx={{ display: "flex", width: { xs: "100%", md: "auto" }, flexGrow: 1, ml: { xs: "0", md: "34px" } }} >
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', flexGrow: 1, gap: 2.5 }}>
              <IconButton
                size="large"
                // edge="end"
                // color="inherit"
                // aria-label="account of current user"
                // aria-controls="menu-appbar"
                // aria-haspopup="true"
                sx={{ backgroundColor: '#F8F8F8', height: '40px', width: '40px', padding: "10px" }}
              >
                <BasketIcon />
              </IconButton>
              <IconButton
                size="large"
                // edge="start"
                // color="inherit"
                // aria-label="menu"
                sx={{ backgroundColor: '#F8F8F8', height: '40px', width: '40px', padding: "10px" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu 
                open={false}
                id="menu-appbar"
                sx={{ display: { xs: 'none', md: 'flex' } }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                {menu.map((item, index) => (
                  <MenuItem key={index} component={Link} to={item.link || '#'}>
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <ButtonGroup variant="text" color="primary" aria-label="text button group">
                {menu.map((item, index) => (
                  <Button 
                    key={index} 
                    to={item.link || '#'} 
                    component={Link} 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#515152',
                      textTransform: "uppercase",
                    }}
                    endIcon={item.options ? <KeyboardArrowDownIcon fill='#515152'/> : null}
                  >
                    {item.label}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
            <Box sx={{ flexGrow: 0, width: "620px", display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: "space-between" }}>
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: "flex-start", gap: 1.5 }}>
                <AvatarGroup sx={{ flexDirection: 'row-reverse' }}>
                  <Avatar
                    sx={{
                      zIndex: 1,
                      marginLeft: 0,
                    }}

                  >
                    <IconButton
                      size="small"
                      sx={{
                        padding: "8px",
                        '&:hover': { backgroundColor: 'none' },
                      }}
                    >
                      <LocationOnIcon sx={{color: "#fff"}} />
                    </IconButton>
                  </Avatar>
                  <Avatar
                    sx={{
                      zIndex: 2,
                      border: "none",
                      marginLeft: -8,
                      backgroundColor: '#F8F8F8',
                      '&:hover': { backgroundColor: '#f0f0f0' },
                    }}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        padding: "8px",
                        '&:hover': { backgroundColor: 'none' },
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Avatar>
                </AvatarGroup>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'flex-start', justifyContent: "flex-start", gap: 0.5 }}>
                  <Typography variant="body2" color="textSecondary">
                    Manzilimiz:
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Shayxontoxur t. Bog' ko'chasi
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button onClick={() => navigate('/survey')}>So‘rovdan o‘tish</Button>
                <IconButton
                  size="large"
                  sx={{ ml: 2, backgroundColor: '#F8F8F8' }}
                >
                  <ProfileIcon />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{ ml: 2, backgroundColor: '#F8F8F8' }}
                >
                  <BasketIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </AutoHeightToolbar>
    </Container>
  </AppBar>
)};

export default Header;
