import * as React from 'react';
import { useMediaQuery } from '@mui/material';

const Init = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(max-width: 960px)');

    const containerStyle = {
        height: '90vh',
        padding: '20px',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: isSmallScreen ? '20px' : '50px',
    };

    const textStyle = {
        display: 'flex',
        padding: '20px',
        paddingTop: isSmallScreen ? '20px' : '130px',
        fontSize: isSmallScreen ? '16px' : '20px',
        flexDirection: 'column',
        color: '#f2f2f2',
        textAlign: isSmallScreen ? 'center' : 'left',
        alignItems: isSmallScreen ? 'center' : 'flex-start',
    };

    const imageStyle = {
        display: 'flex',
        padding: '20px',
        paddingTop: isSmallScreen ? '20px' : '50px',
        justifyContent: isSmallScreen ? 'center' : 'flex-end',
    };

    const imgStyle = {
        borderRadius: '50%',
        width: isSmallScreen ? '200px' : '350px',
        height: isSmallScreen ? '200px' : '350px',
    };

    return (
        <div style={containerStyle}>
            <div style={textStyle}>
                <h2 style={{ maxWidth: '600px' }}>Olá!</h2>
                <p style={{ paddingTop: '20px', maxWidth: '400px' }}>
                    Me chamo Samuell Aguiar, sou estudante de Sistemas de Informação na
                    <a href="https://ufop.br/" style={{ textDecoration: 'none', color: '#f2f2f2' }}> Ufop</a> e sou desenvolvedor Full-Stack.
                </p>
            </div>

            <div style={imageStyle}>
                <img src="/assets/Eu.jpg" alt="Foto de Samuell Aguiar" style={imgStyle} />
            </div>
        </div>
    );
}

export default Init;
