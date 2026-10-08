import "./About.css";

function About() {
  return (
    <section id="apropos" className="section about">
      <h2>À PROPOS</h2>
      
      <p className="about-intro">
        Notre centre de formation accompagne les étudiants et professionnels
        dans le développement de leurs compétences techniques et numériques.
      </p>

      <div className="about-grid">
        <div className="about-item">
          <h3>🎯 Objectif</h3>
          <p>Proposer des formations pratiques, modernes et adaptées aux exigences du marché du travail.</p>
        </div>

        <div className="about-item">
          <h3>⭐ Valeurs</h3>
          <p>Excellence, innovation, partage et accompagnement personnalisé vers l'emploi.</p>
        </div>

        <div className="about-item">
          <h3>💻 Domaines</h3>
          <p>Développement Web & Mobile, Réseaux, Systèmes et Sécurité informatique.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
