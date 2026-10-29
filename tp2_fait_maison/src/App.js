import CompteurClasse from "./CompteurClass";
import Message from "./Message";
import Bouton from "./Bouton";
import Connexion from "./Connexion";
import ListeTaches from "./ListeTaches";
import Notification from "./Notification";
function App() {
   const taches =[
        {id:1,texte:"Faire les courses"},
        {id:2,texte:"Apprendre React"},
        {id:3,texte:"Prendre une pause café"}
      ];
  return (
    <div>
      <Message nom = "adam"/>
      <Message nom ="admin"/>
      <Message/> 
      <CompteurClasse/>
      <Bouton couleur = "red"/>
      <Bouton couleur = "pink"/>
      <Bouton couleur = "white"/>
      <Connexion estConnect = {true} />
      <Connexion estConnect = {false} />
      <h1> Ma liste de taches</h1>
      <ListeTaches items={taches}/>
      <Notification nbr={0}/>
      <br/>
      <Notification nbr={2}/>
      <br/>
      <Notification nbr={3}/>
      <br/>
      <Notification nbr={4}/>
      <br/>
      <Notification nbr={5}/>

    
    </div>
  );
}

export default App;
