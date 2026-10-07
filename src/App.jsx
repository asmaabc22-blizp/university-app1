import './App.css'

function App() {
  return (
    <div className="card">

      <img
        src="/etudiant.jpg"
        alt="Photo de l'étudiant"
        className="photo"
      />

      <h1>Fiche étudiant</h1>

      <p><strong>Nom & Prénom :</strong> Asma Aouari</p>
      <p><strong>Email :</strong> asmaabc22@gmail.com</p>
      <p><strong>Téléphone :</strong> +216 99 999 999</p>
      <p><strong>Filière :</strong> Génie Logiciel et Systèmes d'Information</p>
      <p><strong>Année d'étude :</strong> 2ème année</p>
      <p><strong>Groupe :</strong> GLSI 2</p>
      <p><strong>Ville :</strong> Tunis</p>

      <a
        href="mailto:asmaabc22@gmail.com"
        className="contact"
      >
        Contacter
      </a>

    </div>
  )
}

export default App