import "./Statistiques.css";

function Statistiques() {
  return (
    <section id="statistiques" className="section statistiques">
      <h2>STATISTIQUES</h2>
      <div className="stats">
        <div className="stat-box">
          <h3>500+</h3>
          <p>Étudiants formés</p>
        </div>
        <div className="stat-box">
          <h3>12</h3>
          <p>Formations certifiantes</p>
        </div>
        <div className="stat-box">
          <h3>25</h3>
          <p>Formateurs experts</p>
        </div>
        <div className="stat-box">
          <h3>10</h3>
          <p>Années d'expérience</p>
        </div>
      </div>
    </section>
  );
}

export default Statistiques;
