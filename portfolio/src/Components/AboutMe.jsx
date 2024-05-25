import * as React from 'react';
import { useMediaQuery } from '@mui/material';

const AboutMe = () => {
    // Define breakpoints
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(max-width: 960px)');

    // Define styles based on screen size
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: isSmallScreen ? '10px' : isMediumScreen ? '15px' : '20px',
        paddingTop: isSmallScreen ? '20px' : '30px',
        paddingBottom: isSmallScreen ? '30px' : '60px',
        fontSize: isSmallScreen ? '16px' : '20px',
        color: '#f2f2f2',
        paddingLeft: isSmallScreen ? '10px' : isMediumScreen ? '80px' : '180px',
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ maxWidth: '600px' }}>Sobre Mim</h2>
            <p style={{ paddingTop: '20px', maxWidth: '600px' }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ad commodi consequuntur, quibusdam ratione consequatur debitis molestias nulla voluptate, sit neque voluptatum ipsum cupiditate, repellendus quo totam quia fugiat blanditiis.
            </p>
        </div>
    );
};

export default AboutMe;
