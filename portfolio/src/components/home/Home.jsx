import "./Home.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatIcon from '@mui/icons-material/Chat';
import React from 'react';

function Home() {
     return (
          <>
               <section className="about-section">
                    <div className="about-text">
                         <h1>
                              Olá, Eu sou o<strong> Samuell</strong>.
                         </h1>
                         
                         <h2>
                              FullStack <span className="outline">Developer</span>
                         </h2>
                         
                         <p>
                              Sou um desenvolvedor apaixonado por criar experiências digitais. Tenho foco em
                              interfaces modernas e responsivas, com atenção aos detalhes e usabilidade.
                         </p>
                         <div>
                              <Stack direction="row" spacing={2} sx={{ marginTop: '1.5rem' }}>
                                   <Button
                                        variant="outlined"
                                        startIcon={<GitHubIcon />}
                                        href="https://github.com/SamuellAguiar"
                                        target="_blank"
                                        sx={{
                                             color: '#000000',
                                             borderColor: '#000000',
                                             transition: 'background 0.2s, color 0.2s',
                                             '&:hover': {
                                                  backgroundColor: '#000000',
                                                  color: '#fff',
                                                  borderColor: '#000000',
                                             },
                                        }}
                                   >
                                        GitHub
                                   </Button>

                                   <Button
                                        variant="outlined"
                                        startIcon={<InstagramIcon />}
                                        href="https://www.instagram.com/samuell.ag/"
                                        target="_blank"
                                        sx={{
                                             color: '#000000',
                                             borderColor: '#000000',
                                             transition: 'background 0.2s, color 0.2s',
                                             '&:hover': {
                                                  backgroundColor: '#000000',
                                                  color: '#fff',
                                                  borderColor: '#000000',
                                             },
                                        }}
                                   >
                                        Instagram
                                   </Button>

                                   <Button
                                        variant="outlined"
                                        startIcon={<LinkedInIcon />}
                                        href="https://www.linkedin.com/in/samuell-aguiar/"
                                        target="_blank"
                                        sx={{
                                             color: '#000000',
                                             borderColor: '#000000',
                                             transition: 'background 0.2s, color 0.2s',
                                             '&:hover': {
                                                  backgroundColor: '#000000',
                                                  color: '#fff',
                                                  borderColor: '#000000',
                                             },
                                        }}
                                   >
                                        LinkedIn
                                   </Button>

                                   <Button
                                        variant="outlined"
                                        startIcon={<ChatIcon />}
                                        sx={{
                                             color: '#000000',
                                             borderColor: '#000000',
                                             transition: 'background 0.2s, color 0.2s',
                                             '&:hover': {
                                                  backgroundColor: '#000000',
                                                  color: '#fff',
                                                  borderColor: '#000000',
                                             },
                                        }}
                                   >
                                        Contato
                                   </Button>
                              </Stack>
                         </div>
                    </div>
                    <div className="about-image">
                         <div className="photo-placeholder">
                              <img
                                   src="/Me.jpeg" // substitua pelo caminho real
                                   alt="Sua Foto"
                              />
                         </div>
                    </div>
               </section>
          </>
     );
}

export default Home;