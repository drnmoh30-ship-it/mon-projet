import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>CONTACT</h2>
      
      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon">📍</div>
          <h4>Adresse</h4>
          <p>123 Boulevard Hassan II, Casablanca, Maroc</p>
        </div>

        <div className="contact-card">
          <div className="icon">📞</div>
          <h4>Téléphone</h4>
          <p>+212 5 22 12 34 56</p>
        </div>

        <div className="contact-card">
          <div className="icon">✉️</div>
          <h4>Email</h4>
          <p>contact@centre-formation.ma</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
