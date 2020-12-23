
import './App.css';

import About from './components/About';
import TopMenu from "./components/TopMenu";
import Highlights from "./components/Highlights";
import ContactForm from "./components/Contact";


function App() {
  return (
    <div className="App">
    
    <TopMenu/>
      
        <main>
          
          
      <Highlights/>
      <About></About>
      <ContactForm></ContactForm>
      
        </main>
      </div>
    
  );
}

export default App;
