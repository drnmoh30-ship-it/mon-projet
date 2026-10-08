import Formation from "./Formation";
import "./Formations.css";

function Formations() {
  const formations = [
    {
      nom: "Web",
      description: "Développement des sites et applications web.",
      duree: "2 ans",
      niveau: "Débutant"
    },
    {
      nom: "Réseau",
      description: "Administration et sécurité des réseaux informatiques.",
      duree: "2 ans",
      niveau: "Intermédiaire"
    },
    {
      nom: "Mobile",
      description: "Création d'applications mobiles iOS et Android.",
      duree: "2 ans",
      niveau: "Intermédiaire"
    }
  ];

  return (
    <section id="formations" className="section">
      <h2>FORMATIONS</h2>
      <div className="cards">
        {formations.map((formation, index) => (
          <Formation
            key={index}
            nom={formation.nom}
            description={formation.description}
            duree={formation.duree}
            niveau={formation.niveau}
          />
        ))}
      </div>
    </section>
  );
}

export default Formations;
