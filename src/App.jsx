import "./App.css";

const student = {
  nom: "Asma Zouari",
  email: "asmaabc22@gmail.com",
  telephone: "+216 99 999 999",
  filiere: "Génie Logiciel et Systèmes d'Information",
  annee: "2ème année",
  groupe: "GLSI 2",
  ville: "Mahdia",
};

function App() {
  return (
    <div>
      <h1>Fiche étudiant</h1>
      <p><strong>Nom & Prénom :</strong> {student.nom}</p>
      <p><strong>Email :</strong> {student.email}</p>
      <p><strong>Téléphone :</strong> {student.telephone}</p>
      <p><strong>Filière :</strong> {student.filiere}</p>
      <p><strong>Année d'étude :</strong> {student.annee}</p>
      <p><strong>Groupe :</strong> {student.groupe}</p>
      <p><strong>Ville :</strong> {student.ville}</p>
    </div>
  );
}

export default App;