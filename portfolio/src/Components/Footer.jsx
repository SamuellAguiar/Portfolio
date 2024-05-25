import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import { useMediaQuery } from '@mui/material';

const Footer = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(max-width: 960px)');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: isSmallScreen ? 'center' : 'space-between',
        alignItems: 'center',
        paddingRight: isSmallScreen ? '10px' : '80px',
        paddingLeft: isSmallScreen ? '10px' : '65px',
        paddingBottom: '10px',
        color: 'white',
        height: isSmallScreen ? 'auto' : '50px',
        textAlign: isSmallScreen ? 'center' : 'left',
    };

    const nameStyle = {
        display: { xs: 'flex', md: 'flex' },
        fontFamily: 'Roboto Condensed',
        fontWeight: 400,
        letterSpacing: '.2rem',
        color: 'inherit',
        textDecoration: 'none',
        margin: isSmallScreen ? '10px 0' : '0',
    };

    const iconContainerStyle = {
        display: 'flex',
        justifyContent: isSmallScreen ? 'center' : 'flex-end',
        width: isSmallScreen ? '100%' : 'auto',
        margin: isSmallScreen ? '10px 0' : '0',
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        color: '#000000',
        backgroundColor: '#7e7e7e',
    };

    return (
        <div style={containerStyle}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={nameStyle}
            >
                Samuell Aguiar
            </Typography>

            <div style={iconContainerStyle}>
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

            <Button onClick={scrollToTop} style={buttonStyle}>
                <ArrowUpwardIcon />
            </Button>
        </div>
    );
}

export default Footer;
