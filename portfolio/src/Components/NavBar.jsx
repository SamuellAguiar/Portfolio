import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from '@mui/material';

const pages = ['Início', 'Experiencia', 'Tecnologias', 'Projetos', 'Contato'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{
      backgroundColor: '#191919',
      color: 'white',
      boxShadow: 'none',
      height: '90px',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Container maxWidth="xl">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto Condensed',
              fontWeight: 400,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Samuell Aguiar
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <ScrollLink
                    to={page.toLowerCase()}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseNavMenu}
                    style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto Condensed',
              fontWeight: 400,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center',
            }}
          >
            Samuell Aguiar
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ScrollLink
                key={page}
                to={page.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={handleCloseNavMenu}
                style={{ color: 'white', textDecoration: 'none', cursor: 'pointer', margin: '0 10px' }}
              >
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              </ScrollLink>
            ))}
          </Box>

          <Box sx={{ display: 'flex' }}>
            <IconButton color="inherit">
              <a href="https://github.com/SamuellAguiar/Portfolio" target='_blank' style={{ color: 'inherit' }}>
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a href="https://www.linkedin.com/in/samuell-aguiar/" target='_blank' style={{ color: 'inherit' }}>
                <LinkedInIcon />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a href="mailto: samuellcarlosaguiar@gmail.com" target='_blank' style={{ color: 'inherit' }}>
                <MailIcon />
              </a>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
