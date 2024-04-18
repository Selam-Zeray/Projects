import './App.css';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='container'>
        <Bio/>
        <Gallery/>
      </div>
    

    </div>
  );
}

export default App;
