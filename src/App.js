
import './App.css';
import TopBar from './components/TopBar'
import Grid from './components/Grid'
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Grid2 from './components/Grid2'
 
function App() {
  return (
      <div className="App">
        <TopBar />
        <Banner />
        <header className="App-header"> 
        <Grid />
        </header>
      </div>
  );
}

export default App;
