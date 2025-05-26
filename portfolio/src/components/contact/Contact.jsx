import "./Contact.css";
import {
     Facebook,
     Instagram,
     Twitter,
     GitHub,
} from "@mui/icons-material";

function Contact() {
     return (
          <section className="contact-section" id="contact">
               <div className="contact-container">
                    {/* Formulário */}
                    <form className="contact-form">
                         <input type="text" placeholder="Your name" required />
                         <input type="email" placeholder="Email" required />
                         <input type="text" placeholder="Your website (if exists)" />
                         <textarea placeholder="How can I help?" required></textarea>
                         <button type="submit">Get In Touch</button>
                         <div className="social-icons">
                              <a href="#"><Facebook /></a>
                              <a href="#"><Instagram /></a>
                              <a href="#"><Twitter /></a>
                              <a href="#"><GitHub /></a>
                         </div>
                    </form>

                    {/* Texto e contato */}
                    <div className="contact-text">
                         <h2>Let’s <span>talk</span> for</h2>
                         <h2>Something special</h2>
                         <p>
                              I seek to push the limits of creativity to create high-engaging, user-friendly,
                              and memorable interactive experiences.
                         </p>
                         <p><strong>youremail@gmail.com</strong></p>
                         <p><strong>1234567890</strong></p>
                    </div>
               </div>
          </section>
     );
}

export default Contact;
