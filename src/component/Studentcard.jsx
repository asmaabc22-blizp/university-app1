import StudentImage from "../assets/etudiant.jpg";



function Studentcard(props) {
    return (
        <div className="card">
            <img src={props.image} alt="Photo de l'étudiant" />

            <h1>Fiche étudiant</h1>

            <p>
                Nom & Prénom : {props.prenom} {props.nom}
            </p>

            <p>Email : {props.email}</p>
            <p>Téléphone : {props.telephone}</p>
            <p>Filière : {props.filiere}</p>
            <p>Année : {props.anneeEtude}</p>
            <p>Groupe : {props.groupe}</p>
            <p>Ville : {props.ville}</p>

        </div>
    );
}

export default Studentcard;