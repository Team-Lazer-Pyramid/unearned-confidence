import { useEffect, useRef } from "react";
import {
  IonPage,
  IonItem,
  IonInput,
  IonContent,
  IonIcon,
  IonButton,
  IonText,
} from "@ionic/react";
import {
  personOutline,
  lockClosedOutline,
  logoGoogle,
  logoApple,
} from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import { useAuth } from "../../contexts/authContext";

export const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const { currentUser, emailLogin, googleLogin } = useAuth();
  const history = useHistory();

  const handleLogin = async (type = 'email') => {
    try {
      await emailLogin(email.current.value, password.current.value);
      history.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(currentUser);
    currentUser && history.replace('/');
  }, [])

  return (
    <IonPage>
      <IonContent className={styles.wrapper}>
        <div className={styles.internal}>
          <div className={styles.loginFields}>
            <IonText color="primary">
              <h1>Login</h1>
            </IonText>
            <IonText color="medium">
              <p>Please sign in to continue</p>
            </IonText>
            <IonItem lines="inset">
              <IonIcon icon={personOutline} slot="start" />
              <IonInput type="email" placeholder="Email" ref={email}></IonInput>
            </IonItem>
            <IonItem lines="inset">
              <IonIcon icon={lockClosedOutline} slot="start" />
              <IonInput
                type="password"
                placeholder="Password"
                ref={password}
              ></IonInput>
            </IonItem>
            <div className={styles.forgotPassword}>
              <Link to="/signup">Forgot password?</Link>
            </div>
            <IonButton
              className={styles.signInButton}
              shape="round"
              color="secondary"
              onClick={() => handleLogin()}
            >
              Sign In
            </IonButton>
            <div className={styles.seperator}>OR</div>
            <IonButton
              shape="round"
              className={styles.google}
              onClick={() => googleLogin()}
            >
              <IonIcon slot="start" icon={logoGoogle} />
              Log in with Google
            </IonButton>
            <IonButton shape="round" fill="outline" color="medium">
              <IonIcon slot="start" icon={logoApple} />
              Log in with Apple
            </IonButton>
          </div>
          <div className={styles.accountToggle}>
            <p>
              Don't have an account?&nbsp;
              <Link className={styles.accountLink} to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
