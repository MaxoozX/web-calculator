import './App.css';

// The backend functionnality
import Equation from './back-end/equation.js';

// The components
import Keyboard from './components/Keyboard';
import Screen from './components/Screen';


function App() {

  window.equation = new Equation();

  return (<div className="app">
    <Screen />
    <Keyboard />
  </div>);
}

export default App;
