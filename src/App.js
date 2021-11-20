import logo from './logo.svg';
import './App.css';
import { IonButton, IonDatetime } from '@ionic/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
      <IonButton fill="clear" onClick={() => console.log('Bekken Ja Goosch')}>Start</IonButton> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
