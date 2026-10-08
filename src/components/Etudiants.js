import Etudiant from "./Etudiant";
import "./Etudiants.css";

function Etudiants() {
  const etudiants = [
    {
      nom: "Ali",
      niveau: "2ème année",
      formation: "Web",
      annee: "2026"
    },
    {
      nom: "Omar",
      niveau: "1ère année",
      formation: "Réseau",
      annee: "2026"
    },
    {
      nom: "Salma",
      niveau: "2ème année",
      formation: "Mobile",
      annee: "2026"
    }
  ];

  return (
    <section id="etudiants" className="section">
      <h2>ÉTUDIANTS</h2>
      <div className="cards">
        {etudiants.map((etudiant, index) => (
          <Etudiant
            key={index}
            nom={etudiant.nom}
            niveau={etudiant.niveau}
            formation={etudiant.formation}
            annee={etudiant.annee}
          />
        ))}
      </div>
    </section>
  );
}

export default Etudiants;
