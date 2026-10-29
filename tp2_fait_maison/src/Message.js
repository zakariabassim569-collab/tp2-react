import React from "react";

function Message (props){
    const nom = props.nom || "invite";
    let messageadmin;
    if (nom ==="admin"){
        messageadmin = <p>Vous avez les
droits d’administrateur</p>
    }
    return (
        <>
        <p> Bienvenue sur
        l'application React,{props.nom}</p>
        {messageadmin}
        </>
    )
}
export default Message;