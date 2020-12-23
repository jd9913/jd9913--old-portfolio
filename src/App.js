import logo from './mountain.svg';
import './App.css';
import About from './components/About';
import Nav from "./components/Nav";
// import {ReactComponent as ReactLogo} from './assets/images/logo';

function App() {
  return (
    <div className="App">
      ${logo}
    <Nav></Nav>
      
      
        <main>
          <About></About>
        </main>
      </div>
    
  );
}

export default App;
