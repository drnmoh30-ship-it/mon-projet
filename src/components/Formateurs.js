import Formateur from "./Formateur";
import "./Formateurs.css";

function Formateurs() {
  const formateurs = [
    {
      nom: "Ahmed",
      specialite: "Développement Web",
      experience: "8 ans",
      description: "Formateur expérimenté en JavaScript et React."
    },
    {
      nom: "Sara",
      specialite: "Réseaux & Sécurité",
      experience: "6 ans",
      description: "Experte en administration réseau et cybersécurité."
    },
    {
      nom: "Youssef",
      specialite: "Développement Mobile",
      experience: "7 ans",
      description: "Spécialiste des applications Flutter et React Native."
    }
  ];

  return (
    <section id="formateurs" className="section">
      <h2>FORMATEURS</h2>
      <div className="cards">
        {formateurs.map((formateur, index) => (
          <Formateur
            key={index}
            nom={formateur.nom}
            specialite={formateur.specialite}
            experience={formateur.experience}
            description={formateur.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Formateurs;
