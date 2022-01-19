import {
  IonList,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonButton,
  IonPage,
} from "@ionic/react";
import { useAuth } from '../contexts/authContext';
import { useHistory } from "react-router-dom";

export const CharacterList = ({ characters = [] }) => {
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  const handleSignout = async () => {
    try {
      await signout();
      history.push('/login');
    } catch(error) {
      console.error(error);
    }
  }
  return (
    <IonPage>
      <IonLabel color="secondary">{currentUser?.email}</IonLabel>
      <IonList>
        {characters.map((character) => (
          <IonCard routerLink="/detail">
            <IonCardHeader>
              <IonLabel color="secondary">{character?.name}</IonLabel>
            </IonCardHeader>
            <IonCardContent>
              <IonLabel>{`${
                character?.level ? `Level ${character?.level} | ` : ""
              }`}</IonLabel>
              <IonLabel>{`${
                character?.race ? `${character?.race} | ` : ""
              }`}</IonLabel>
              <IonLabel>{`${
                character?.class ? `${character?.class}` : ""
              }`}</IonLabel>
            </IonCardContent>
            <IonCardContent>
              <IonLabel>{`${
                character?.campaign ? `Campaign: ${character?.campaign}` : ""
              }`}</IonLabel>
            </IonCardContent>
          </IonCard>
        ))}
      </IonList>
      <IonButton onClick={() => handleSignout()}>Sign Out</IonButton>
    </IonPage>
  )
};
