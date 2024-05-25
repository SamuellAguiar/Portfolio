import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '80px',
            paddingLeft: '65px',    
            alignItems: 'center',
            color: 'white',
            height: '50px',
            paddingBottom: '10px'
        }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                    mr: 40,
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

            <div>
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
                    <a href="https://www.instagram.com/samuell.ag/" target='_blank' style={{ color: 'inherit' }}>
                        <InstagramIcon />
                    </a>
                </IconButton>
            </div>

            <Button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', color: '#000000', backgroundColor: '#7e7e7e' }}>
                <ArrowUpwardIcon />
            </Button>
        </div>
    )
}

export default Footer;