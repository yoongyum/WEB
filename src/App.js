import './App.css';
import React, {useState} from 'react'
import TopBar from './components/TopBar'
import Grid from './components/Grid'
import SearchModal from './components/SearchModal'
import Banner from './components/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/Chatbox'
// import Grid2 from './components/Grid2'
 


function App() {
  const [modal, SetModal] = useState(false);
  const onModal =()=>{
    SetModal(!modal);
  }
  return (
    <div className="App">
      <TopBar onModal={onModal}/>
      {modal?<SearchModal onModal={onModal}/>:null}
      <Banner />
      <Chat />
      <header className="App-header"> 
        <Grid />
      </header>
      </div>
  );
}

export default App;
