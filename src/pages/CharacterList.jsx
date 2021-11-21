import React from 'react';
import { IonList, IonLabel, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';

export const CharacterList = ({ characters = [] }) =>
  <IonList>
    {
      characters.map(character => (
        <IonCard>
          <IonCardHeader>
            <IonLabel>{character?.name}</IonLabel>
          </IonCardHeader>
          <IonCardContent>
            <IonLabel>{`${character?.level ? `Level ${character?.level} | ` : ''}`}</IonLabel>
            <IonLabel>{`${character?.race ? `${character?.race} | ` : ''}`}</IonLabel>
            <IonLabel>{`${character?.class ? `${character?.class}` : ''}`}</IonLabel>
          </IonCardContent>
          <IonCardContent>
            <IonLabel>{`${character?.campaign ? `Campaign: ${character?.campaign}` : ''}`}</IonLabel>
          </IonCardContent>
        </IonCard>
      ))
    }
  </IonList>
