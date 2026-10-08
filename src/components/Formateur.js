import "./Formateur.css";

function Formateur({ nom, specialite, experience, description }) {
  const initial = nom ? nom.charAt(0).toUpperCase() : "F";

  return (
    <div className="formateur-card">
      <div className="formateur-avatar">{initial}</div>
      <h3>{nom}</h3>
      <p className="formateur-specialite">{specialite}</p>
      <span className="formateur-exp">💼 Expérience : {experience}</span>
      <p className="formateur-desc">{description}</p>
    </div>
  );
}

export default Formateur;
