import "./Formation.css";

function Formation({ nom, description, duree, niveau }) {
  return (
    <div className="formation-card">
      <h3>{nom}</h3>
      <p className="desc">{description}</p>
      
      <div className="formation-meta">
        <span className="duree-tag">⏱ <strong>Durée :</strong> {duree}</span>
        <span className="badge-niveau">{niveau}</span>
      </div>
    </div>
  );
}

export default Formation;
