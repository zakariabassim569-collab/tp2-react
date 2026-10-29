import React from "react";

function Notification(prop){
    return(
        <>
        Mon profil
        {prop.nbr>0 && (<span>{prop.nbr}</span>)}
        </>
    );
}
export default Notification;
