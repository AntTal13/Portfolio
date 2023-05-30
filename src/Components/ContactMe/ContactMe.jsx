import './ContactMe.css';

export default function ContactMe() {
  return (
    <div id="contactme" className="contact-container">
      <h1 className="contact-header">Let's Get In Touch!</h1>
      <p className="thanks">Thanks so much for checking out my site. Please see further contact info below, and feel free to reach out!</p>
      <div className="contact-icons">
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/anthony-talarico/"><img src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor" alt="LinkedIn" /></a>
          <p>Anthony Talarico</p>
        </div>
        <div className="contact-icon">
          <a href="https://github.com/AntTal13"><img src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor" alt="GitHub" /></a>
          <p>AntTal13</p>
        </div>
        <div className="contact-icon">
          <a href="mailto:anthonytalarico13@gmail.com"><img src="https://icongr.am/octicons/mail.svg?size=128&color=currentColor" alt="Email" /></a>
          <p>Email Me!</p>
        </div>
      </div>
    </div>
  );
}