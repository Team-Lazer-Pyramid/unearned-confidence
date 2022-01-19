import { useState, useEffect } from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { collection, getDocs } from "firebase/firestore";
import { Redirect, Route } from "react-router-dom";
import { db } from "../firebase.config";
import { CharacterList } from "../pages/CharacterList";
import { CharacterDetails } from "../pages/CharacterDetails";
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/SignUp/SignUp";
import { PrivateRoute } from "./PrivateRoute";

export const Routes = () => {
  const [characters, setCharacters] = useState([]);
  const characterRef = collection(db, "users/XstZLwmG2dT59YVmLrI8/characters");

  useEffect(() => {
    const getCharacters = async () => {
      if (!characters.length) {
        const data = await getDocs(characterRef);
        setCharacters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
      console.log(characters);
    };

    getCharacters();
  }, [characterRef, characters]);

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute path="/characters">
          <CharacterList characters={characters} />
        </PrivateRoute>
        <PrivateRoute path="/detail">
          <CharacterDetails />
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Redirect to="/characters" />
        </PrivateRoute>
        <PrivateRoute exact path="/one">
          <CharacterDetails />
        </PrivateRoute>
        <PrivateRoute exact path="/two">
          <CharacterDetails />
        </PrivateRoute>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
