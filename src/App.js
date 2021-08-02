import './App.css';
import React, {useState} from 'react'
import TopBar from './components/TopBar'
import Grid from './components/Grid'
import SearchModal from './components/SearchModal'
import Banner from './components/Banner'
import './components/Banner.css';
import Chat from './components/Chatbox'
import SubBanner from './containers/SubBanner';
 

function App() {
  const [modal, SetModal] = useState(false);
  const onModal =()=>{
    SetModal(!modal);
  }
  return (
    <div className="App">
      <TopBar onModal={onModal}/>
      {modal?<SearchModal onModal={onModal}/>:null}
      <Chat />
      <header className="App-header"> 
        <Banner />
      </header>
      <Grid />
      <SubBanner />
      <p>end</p>
    </div>
  );
}

export default App;
