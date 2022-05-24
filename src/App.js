import logo from './logo.svg';
import './App.css';
import WelcomeFunction from './components/function';
import WelcomeClass from './components/component';

function App() {
  return (
    <div className="App">
      <img src={logo} style={{width: "140px"}} alt="logo" />
      <WelcomeFunction name="robert"></WelcomeFunction>
      <WelcomeClass name="Not robert"></WelcomeClass>
    </div>
  );
}

export default App;
