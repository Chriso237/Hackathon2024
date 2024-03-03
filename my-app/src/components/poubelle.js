import React, { useEffect } from 'react';
import '../css/poubelle.css'; // Assuming your styles are in App.css
import { database } from '../firebase';
import { onValue, ref, set } from "firebase/database";


/*console.log(chemin);
console.log(database);*/

const Poubelle = () => {
  const [etat, setEtat] = React.useState({});
    const iconStyles = {
    fontSize: '150px',
    position:'absolute',
    left: '50%',
    top: '15%',
    transform: 'translate(-50%,-50%)'
  };  
  const chemin = ref(database, 'poubelle/etat')

  useEffect(() => {
    onValue(chemin, (snapshot) => {
      const data = snapshot.val();
      setEtat(data);
    });
  }, [chemin]);
  
  

  const fermer = () => {
    // Implement closing logic here (e.g., toggle visibility of hidden content)
    //setEtat({ ...etat, verrouillage: !etat.verrouillage }); // Toggle lock state
    set(chemin,{ ...etat, verrouillage: !etat.verrouillage })
  };

   /*const notify = () =>{
    set(chemin,{...etat, remplissage: etat.remplissage})
   } */

   
   
  return (
    <div className="poubelle-container">
      <ion-icon name="trash-outline" className="trash-icon" style={iconStyles} />
      <div className="container">
       
        <button className="fermer" onClick={fermer}>
          {etat.verrouillage ? 'Déverrouiller' : 'Vérrouiller'}
        </button>
      </div>
      <div className="informations">
        <div className="remplissage info">
          <ion-icon name="trash-outline" />
          <h4>Niveau de remplissage: {etat.remplissage}%</h4>
          
        </div>
        <div className="humidite info">
          <ion-icon name="speedometer-sharp" />
          <h4>Taux d'humidité: {etat.humidite}%</h4>
          {/* Update data here to reflect actual humidity */}
        </div>
        <div className={etat.verrouillage  ? 'info verrouillage' : 'info active'}>
          <ion-icon name={etat.verrouillage ? 'lock-closed-sharp' : 'lock-open-sharp'} />
          <h4>{etat.verrouillage  ? 'Verrouillée' : 'Non vérouillée'}</h4>
        </div>
      </div>
    </div>
  );
};

export default Poubelle;
