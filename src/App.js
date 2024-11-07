import './App.css';
import Header from './components/Header/Header.js';
import About from './components/About/About.js';
import Minigallery from './components/Minigallery/Minigallery.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Minigallery />
      <About />
    </div>
  );
}

export default App;
