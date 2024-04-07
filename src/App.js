import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Intro from './components/Intro/Intro';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <header className=''>
        <Header></Header>
      </header>
      <main>
        <Intro></Intro>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
