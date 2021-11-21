import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { CharacterList } from './pages/CharacterList';
import { CharacterDetails } from './pages/CharacterDetails';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';


const App = () => { 
  const [characters, setCharacters] = useState([]);
  const characterRef = collection(db, 'users/XstZLwmG2dT59YVmLrI8/characters');

  useEffect(() => 
  {
    const getCharacters = async () =>
    {
      if(!characters.length) {
        const data = await getDocs(characterRef);
        setCharacters(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }
      console.log(characters);
    }

    getCharacters();
  }, [characterRef, characters]);

  return (
    <IonApp className="App">
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/characters">
            <CharacterList characters={characters} />
          </Route>
          <Route path="/detail">
            <CharacterDetails />
          </Route>
          <Route exact path="/" render={() => <Redirect to ="/characters" />}/>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
