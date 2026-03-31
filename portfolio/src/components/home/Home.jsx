import "./Home.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatIcon from '@mui/icons-material/Chat';
import useMediaQuery from '@mui/material/useMediaQuery';

function Home() {
     const isMobile = useMediaQuery('(max-width:1024px)');

     return (
          <section className="about-section" id="home">
               <div className="about-text">
                    <h1>
                         Olá, Eu sou o<strong> Samuell</strong>.
                    </h1>

                    <h2>
                         FullStack <span className="outline">Developer</span>
                    </h2>

                    <div className="description">
                         <p>
                              Sou graduando em <strong>Sistemas de Informação pela UFOP</strong> e desenvolvedor apaixonado por transformar ideias em experiências digitais. Meu foco está na criação de interfaces modernas, responsivas e acessíveis, unindo design e funcionalidade.
                         </p>
                         <p>
                              Sou movido por desafios técnicos e pelo aprendizado contínuo, buscando evoluir a cada projeto através de uma visão analítica e colaborativa.
                         </p>
                    </div>

                    <Stack
                         direction={isMobile ? 'column' : 'row'}
                         spacing={2}
                         sx={{
                              marginTop: '2rem',
                              alignItems: 'center',
                         }}
                    >
                         <Button variant="outlined" startIcon={<GitHubIcon />} href="https://github.com/SamuellAguiar" target="_blank" sx={buttonStyle}> GitHub </Button>
                         <Button variant="outlined" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/samuell-aguiar/" target="_blank" sx={buttonStyle}> LinkedIn </Button>
                         <Button variant="outlined" startIcon={<InstagramIcon />} href="https://www.instagram.com/samuell.ag/" target="_blank" sx={buttonStyle}> Instagram </Button>
                         <Button variant="outlined" startIcon={<ChatIcon />} href="#contact" sx={buttonStyle}> Contato </Button>
                    </Stack>
               </div>

               <div className="about-image">
                    <div className="photo-placeholder">
                         <img
                              src="/Me.jpeg"
                              alt="Sua Foto"
                         />
                    </div>
               </div>
          </section>
     );
}

const buttonStyle = {
     color: '#000000',
     borderColor: '#000000',
     transition: 'background 0.2s, color 0.2s',
     width: '100%',
     maxWidth: '250px',
     justifyContent: 'center',
     '&:hover': {
          backgroundColor: '#000000',
          color: '#fff',
          borderColor: '#000000',
     },
};

export default Home;
