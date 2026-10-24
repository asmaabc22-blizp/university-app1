import './App.css';
import Studentcard from "./component/Studentcard.jsx";
import StudentImage from "./assets/etudiant.jpg";
import StudentImage2 from "./assets/im2.jpg";
import StudentImage3 from "./assets/img3.jpg";
function App() {


  const etudiant = [
    {
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
  ];
  return (
    <div className="container">
      {etudiant.map((etudiant) => (
        <Studentcard
          key={etudiant.email}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.anneeEtude}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image={etudiant.image}
        />
      ))}
    </div>
  );
}
export default App;