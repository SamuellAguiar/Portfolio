import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', height: '30px', paddingBottom: '10px' }}>
            <p>© 2024 Samuell Aguiar. All rights reserved.</p>

            <Button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', color: '#000000', backgroundColor: '#7e7e7e' }}>
                <ArrowUpwardIcon />
            </Button>
        </div>
    )
}

export default Footer;