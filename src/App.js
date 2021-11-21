import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { CharacterList } from './pages/CharacterList';


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
    <div className="App">
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
