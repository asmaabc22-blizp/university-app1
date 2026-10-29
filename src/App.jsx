import { useState } from "react";
import "./App.css";
import Header from "./component/Header.jsx";
import Navbar from "./component/Navbar.jsx";
import StudentCard from "./component/Studentcard.jsx";
import Footer from "./component/Footer.jsx";
import StudentImage from "./assets/etudiant.jpg";
import StudentImage2 from "./assets/im2.jpg";
import StudentImage3 from "./assets/img3.jpg";



function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Asma",
      nom: "Zouari",
      email: "asmaabc22@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Tunis",
      image: StudentImage,
    },
    {
      id: 2,
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      image: StudentImage2,
    },
    {
      id: 3,
      prenom: "Mariem",
      nom: "Khalfallah",
      email: "mariem.khalfallah@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: StudentImage3,
    },
  ]);
  const [filtre, setFiltre] = useState("");

  function ajouterEtudiant() {
    const id = Date.now();
    const nouvelEtudiant = {
      id,
      prenom: "Yassine",
      nom: "Ben Salem",
      groupe: "GLSI 2",
      ville: "Sfax",
      email: `yassine.bensalem.${id}@gmail.com`,
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel",
      anneeEtude: "2026/2027",
      image: AmaniImage,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
  }

  function modifierPrenom(id, nouveauPrenom) {
    setEtudiants(
      etudiants.map((e) => (e.id === id ? { ...e, prenom: nouveauPrenom } : e))
    );
  }
  function ajouteretudiant() {
    props.onSupprimer(props.id);
  }


  const etudiantsFiltres = etudiants.filter((e) =>
    e.filiere.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Navbar />

      <div className="actions">
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
      </div>

      <div className="filtre">
        <input
          type="text"
          placeholder="Filtrer par filière..."
          value={filtre}
          onChange={(e) => setFiltre(e.target.value)}
        />
      </div>

      <div className="container">
        {etudiantsFiltres.length === 0 && <p>Aucun étudiant trouvé.</p>}

        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            id={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierPrenom}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;