
import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase.config';
import { collection, getDocs, addDoc } from 'firebase/firestore';


function App() 
{
  const [characters, setCharacters] = useState([]);
  const characterRef = collection(db, "character");
  const [newName, setNewName] = useState("");

  const createCharacter = async () =>
  {
    await addDoc(characterRef, {character_name: newName});
  };

  useEffect(() => 
  {
    const getCharacters = async () =>
    {
        const data = await getDocs(characterRef);
        setCharacters(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getCharacters();
  });

  return (
  <div className="App">
    <input placholder="Name..." onChange={event => setNewName(event.target.value)} />
    <button onClick={createCharacter}>Create Character</button>
    {
      characters.map((character) => 
      { 
        return (
        <div> 
          <h1>ID: {character.id}</h1>
          <h2>Name: {character.character_name}</h2>
          <text>Strength: {character.attribute_strength}</text> <button>+</button><button>-</button>
          
        </div>);
      })
    }
    </div>
    );
}

export default App;
