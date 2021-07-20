import EyeOn from './images/EyeOn.png'
import './App.css';
import TopBar from './components/TopBar'
 
function App() {
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <h1 className="App-title">SAVER</h1>
        <img src={EyeOn} className="App-logo" alt="logo" />
        <p>
          리액트 프로젝트 버전1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트 배우러가기
        </a>
      </header>
    </div>
    
  );
}

export default App;
