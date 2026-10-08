import "./Etudiant.css";

function Etudiant({ nom, niveau, formation, annee }) {
  return (
    <div className="etudiant-card">
      <h3>👨‍🎓 {nom}</h3>
      <div className="etudiant-info">
        <p>
          <strong>Niveau :</strong> <span className="etudiant-tag">{niveau}</span>
        </p>
        <p>
          <strong>Formation :</strong> {formation}
        </p>
        <p>
          <strong>Année :</strong> {annee}
        </p>
      </div>
    </div>
  );
}

export default Etudiant;
