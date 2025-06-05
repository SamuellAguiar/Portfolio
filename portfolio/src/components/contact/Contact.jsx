import "./Contact.css";
import {
     Instagram,
     GitHub,
     LinkedIn,
     Email,
} from "@mui/icons-material";

function Contact() {
     return (
          <section className="contact-section" id="contact">
               <div className="contact-container">
                    {/* Formulário */}
                    <form className="contact-form">
                         <input type="text" placeholder="Digite o seu nome" required />
                         <input type="email" placeholder="Insira o seu e-mail" required />
                         <input type="tel" placeholder="Deixe o seu número para contato" />
                         <textarea placeholder="Como posso te ajudar?" required></textarea>
                         <button type="submit">Enviar</button>
                         <div className="social-icons">
                              <a href="https://www.linkedin.com/in/samuell-aguiar/"><LinkedIn /></a>
                              <a href="https://github.com/SamuellAguiar"><GitHub /></a>
                              <a href="https://www.instagram.com/samuell.ag/"><Instagram /></a>
                              <a href="mailto:samuellcarlosaguiar@gmail.com"><Email /></a>
                         </div>
                    </form>

                    {/* Texto e contato */}
                    <div className="contact-text">
                         <h2><span>Fale comigo! </span></h2>
                         <p>
                              Se tiver dúvidas, sugestões ou quiser iniciar um projeto comigo, é só me chamar. Responderei o mais rápido possível.
                         </p>
                         <p><strong>samuellcarlosaguiar@gmail.com</strong></p>
                         <p><strong>(31) 98208-9884</strong></p>
                    </div>
               </div>
          </section>
     );
}

export default Contact;
