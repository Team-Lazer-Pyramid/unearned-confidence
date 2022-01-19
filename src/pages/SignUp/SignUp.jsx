import { useRef } from "react";
import {
  IonPage,
  IonItem,
  IonInput,
  IonContent,
  IonText,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { personOutline, lockClosedOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useAuth } from '../../contexts/authContext';

export const SignUp = () => {
  const email = useRef('');
  const password = useRef('');
  const confirmPassword = useRef('');
  const { signup } = useAuth();

  return (
    <IonPage>
      <IonContent className={styles.wrapper}>
        <div className={styles.internal}>
          <div className={styles.signUpFields}>
            <IonText color="primary">
              <h1>Create Account</h1>
            </IonText>
            <IonItem lines="inset">
              <IonIcon icon={personOutline} slot="start" />
              <IonInput
                type="email"
                placeholder="Email"
                ref={email}
              ></IonInput>
            </IonItem>
            <IonItem lines="inset">
              <IonIcon icon={lockClosedOutline} slot="start" />
              <IonInput
                type="password"
                placeholder="Password"
                ref={password}
              ></IonInput>
            </IonItem>
            <IonItem lines="inset">
              <IonIcon icon={lockClosedOutline} slot="start" />
              <IonInput
                type="password"
                placeholder="Confirm Password"
                ref={confirmPassword}
              ></IonInput>
            </IonItem>
            <IonButton
              className={styles.signUpButton}
              shape="round"
              color="secondary"
              onClick={() => signup(email.current.value, password.current.value)}
            >
              Sign Up
            </IonButton>
          </div>
          <div className={styles.accountToggle}>
            <p className={styles.accountToggle}>
              Already have an account?&nbsp;
              <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
