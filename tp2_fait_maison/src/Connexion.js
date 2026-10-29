import React from "react";

function Connexion (prop){

    if (prop.estConnect===true){
        return<p>Bienvenue sur l'application React !</p>;
    }
    else {
        return<p>Veuillez-vous connecte</p>;}
}
export default Connexion;