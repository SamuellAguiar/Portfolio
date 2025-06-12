import "./Contact.css";
import {
     Instagram,
     GitHub,
     LinkedIn,
     Email,
} from "@mui/icons-material";
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

function Contact() {
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm(
               'service_7v5ynpq', // Seu Service ID
               'template_g9vi1wj', // Seu Template ID
               form.current,
               'JfEVFBFv1GoGP43bo' // Sua Public Key (User ID)
          ).then(() => {
               alert("Mensagem enviada com sucesso!");
               form.current.reset(); // Limpa o formulário após envio
          }).catch(() => {
               alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
          });
     };

     return (
          <section className="contact-section" id="contact">
               <div className="contact-container">

                    {/* Formulário */}
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                         <input
                              type="text"
                              name="name"
                              placeholder="Digite o seu nome"
                              required
                         />
                         <input
                              type="email"
                              name="email"
                              placeholder="Insira o seu e-mail"
                              required
                         />
                         <input
                              type="tel"
                              name="phone"
                              placeholder="Deixe o seu número para contato"
                         />
                         <input
                              type="text"
                              name="title"
                              placeholder="Assunto da mensagem"
                              required
                         />
                         <textarea
                              name="message"
                              placeholder="Como posso te ajudar?"
                              required
                         ></textarea>
                         <button type="submit">Enviar</button>
                    </form>

                    {/* Texto lateral e redes sociais */}
                    <div className="contact-text">
                         <h2><span>Fale comigo!</span></h2>
                         <p>
                              Se tiver dúvidas, sugestões ou quiser iniciar um projeto comigo, é só me chamar. Responderei o mais rápido possível.
                         </p>
                         <p><strong>samuellcarlosaguiar@gmail.com</strong></p>
                         <p><strong>(31) 98208-9884</strong></p>
                         <p>Ou me encontre nas redes sociais:</p>

                         <div className="social-icons">
                              <a href="https://www.linkedin.com/in/samuell-aguiar/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                              <a href="https://github.com/SamuellAguiar" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                              <a href="https://www.instagram.com/samuell.ag/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                              <a href="mailto:samuellcarlosaguiar@gmail.com"><Email /></a>
                         </div>
                    </div>

               </div>
          </section>
     );
}

export default Contact;
