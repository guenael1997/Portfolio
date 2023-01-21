import './App.css';
import Intro from './Components/intro';
import Matricielle from './Components/matriciel';
import Vectoriel from './Components/vectoriel';
import MusicPlayer from './Components/musiques';
import Programation from './Components/programation';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Intro/>
      <Matricielle/>
      <Vectoriel/>
      <MusicPlayer/>
      <Programation/>
      <Contact/>
    </div>
  );
}

export default App;
