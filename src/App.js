
import './App.css';
import TopBar from './components/TopBar'
import Grid from './components/Grid'
// import Grid2 from './components/Grid2'
 
function App() {
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <Grid />
        {/* <Grid2/> */}
      </header>
        
     
    </div>
  );
}

export default App;
