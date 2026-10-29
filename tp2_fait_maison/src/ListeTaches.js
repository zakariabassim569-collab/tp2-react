import React from "react";

function ListeTaches(prop){
    const listElement = prop.items.map((taches)=>{
        return <li key={taches.id} >{taches.texte}</li>

    });
    return(
        <ul>
            {listElement}
        </ul>
    )
}
export default ListeTaches;