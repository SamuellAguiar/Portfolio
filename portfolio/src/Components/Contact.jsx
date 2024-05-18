import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Contact = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px', marginBottom: '50px', height: '60vh' }}>
            <div style={{
                width: '100vh',
                fontSize: 'bold',
                display: 'flex',
                marginTop: '110px',
                marginLeft: '120px',
            }}>
                <Box sx={{ width: '300px', height: '260px', maxWidth: 360, color: '#f5f5f5', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <a href="https://github.com/SamuellAguiar" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <GitHubIcon style={{ color: "#f5f5f5" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="GitHub" />
                                    </ListItemButton>
                                </ListItem>
                            </a>

                            <Divider />

                            <a href="https://www.linkedin.com/in/samuell-aguiar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LinkedInIcon style={{ color: "#f5f5f5" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="LinkedIn" />
                                    </ListItemButton>
                                </ListItem>
                            </a>

                            <Divider />

                            <a href="https://www.instagram.com/samuell.ag/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InstagramIcon style={{ color: "#f5f5f5" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Instagram" />
                                    </ListItemButton>
                                </ListItem>
                            </a>

                            <Divider />

                            <a href="mailto:samuellcarlosaguiar@gmail.com" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <EmailIcon style={{ color: "#f5f5f5" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Email" />
                                    </ListItemButton>
                                </ListItem>
                            </a>

                            <Divider />

                            <a href="/assets/Curriculo.jpg" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ContactPageIcon style={{ color: "#f5f5f5" }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Curriculo" />
                                    </ListItemButton>
                                </ListItem>
                            </a>
                        </List>
                    </nav>
                    <Divider />
                </Box>
            </div>
            <div style={{
                marginTop: '100px',
                fontFamily: 'Roboto Condensed',
                fontSize: 'bold 18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#f5f5f5',
                marginRight: '120px',
            }}>
                <h1>Contate Me</h1>
                <p style={{ maxWidth: '50vh', }}>Se você gostou de mim ou se interessou em algum projeto, você pode entrar em contato comigo através das minhas redes sociais ou se preferir, pode me enviar um e-mail.</p>
                <p style={{ maxWidth: '50vh', }}>Também sinta-se a vontade para enviar críticas, dicas ou conversar sobre áreas correlacionadas!</p>
            </div>
        </div>
    )
}

export default Contact;