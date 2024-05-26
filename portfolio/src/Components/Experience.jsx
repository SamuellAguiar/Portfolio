import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useMediaQuery } from '@mui/material';

export default function Experience() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(max-width: 960px)');

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: isSmallScreen ? '10px' : isMediumScreen ? '15px' : '20px',
        paddingTop: isSmallScreen ? '20px' : '30px',
        paddingBottom: isSmallScreen ? '30px' : '60px',
        fontSize: isSmallScreen ? '16px' : '20px',
        color: '#f2f2f2',
        paddingLeft: isSmallScreen ? '10px' : isMediumScreen ? '80px' : '180px',
        width: isSmallScreen ? '100%' : isMediumScreen ? '80%' : '60%', 
    };

    const headerStyle = {
        color: '#f5f5f5',
        textAlign: isSmallScreen ? 'center' : 'left',
        maxWidth: '600px',
    };

    const cardContainerStyle = {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: isSmallScreen ? 'center' : 'flex-start',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h2>Experiência</h2>
                <p style={{ paddingTop: '20px' }}>Experiências que já tive no decorrer da graduação</p>
            </div>

            <div style={cardContainerStyle}>
                <Card sx={{ maxWidth: 1000, backgroundColor: '#191919', color: '#f5f5f5' }}>
                    <CardActionArea>
                        <CardContent>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: isSmallScreen ? 'column' : 'row',
                            }}>
                                <div>
                                    <Typography gutterBottom variant="h6" component="div" style={{ color: '#f5f5f5' }}>
                                        Desenvolvedor Web
                                    </Typography>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: isSmallScreen ? 'column' : 'row',
                                gap: '100px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f5f5f5' }}>
                                    <ApartmentIcon />
                                    <Typography variant="body2" color="text.secondary" style={{ color: '#f5f5f5' }}>
                                        Visão Tecnologia e Sistemas
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="body2" color="text.secondary" style={{ color: '#f5f5f5' }}>
                                        Agosto 2022 - Abril 2023
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}
