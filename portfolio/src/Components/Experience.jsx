import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Divider from '@mui/material/Divider';

export default function Experience() {
    return (
        <div style={{
            display: 'left',
            padding: '20px',
            paddingTop: '80px',
            paddingBottom: '60px',
            fontSize: '20px',
            flexDirection: 'column',
            color: '#f2f2f2',
            paddingLeft: '180px',
        }}>
            <div style={{ color: '#f5f5f5', alignContent: 'center' }}>
                <h2 style={{ maxWidth: '600px' }}>Experiência</h2>
                <p style={{ paddingTop: '20px'}}>Experiências que já tive no decorrer da graduação</p>
            </div>


            <div style={{ paddingTop:'20px' }}>
                <Card sx={{ maxWidth: 600, backgroundColor: '#191919', color: '#f5f5f5' }}>
                    <CardActionArea>
                        <CardContent>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <div>
                                    <Typography gutterBottom variant="h6" component="div" style={{ color: 'f5f5f5' }}>
                                        Desenvolvedor Web
                                    </Typography>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <div>
                                    <Typography variant="body2" color="text.secondary" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        color: '#f5f5f5',
                                    }}>
                                        <ApartmentIcon />
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
