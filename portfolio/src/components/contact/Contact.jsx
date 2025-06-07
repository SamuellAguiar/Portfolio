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
               'service_7v5ynpq', // Substitua pelo seu Service ID
               'template_g9vi1wj', // Substitua pelo seu Template ID
               form.current,
               'JfEVFBFv1GoGP43bo' // Substitua pelo seu User ID (public key)
          ).then((result) => {
               alert("Mensagem enviada com sucesso!");
               form.current.reset(); // Limpa o formulário após o envio
          }, (error) => {
               alert("Erro ao enviar mensagem.");
          });
     };

     return (
          <section className="contact-section" id="contact" >
               <div className="contact-container">
                    {/* Formulário */}
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                         <input type="text" placeholder="Digite o seu nome" required />
                         <input type="email" placeholder="Insira o seu e-mail" required />
                         <input type="tel" placeholder="Deixe o seu número para contato" />
                         <textarea name="message" placeholder="Como posso te ajudar?" required></textarea>
                         <button type="submit">Enviar</button>

                    </form>

                    {/* Texto e contato */}
                    <div className="contact-text">
                         <h2><span>Fale comigo! </span></h2>
                         <p>
                              Se tiver dúvidas, sugestões ou quiser iniciar um projeto comigo, é só me chamar. Responderei o mais rápido possível.
                         </p>
                         <p><strong>samuellcarlosaguiar@gmail.com</strong></p>
                         <p><strong>(31) 98208-9884</strong></p>
                         <p>Ou me encontre nas redes sociais:</p>
                         {/* Ícones de redes sociais */}
                         <div className="social-icons">
                              <a href="https://www.linkedin.com/in/samuell-aguiar/"><LinkedIn /></a>
                              <a href="https://github.com/SamuellAguiar"><GitHub /></a>
                              <a href="https://www.instagram.com/samuell.ag/"><Instagram /></a>
                              <a href="mailto:samuellcarlosaguiar@gmail.com"><Email /></a>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Contact;
