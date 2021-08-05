import './App.css';
import React, {useState} from 'react'
import TopBar from './components/TopBar'
import Grid from './components/Grid'
import SearchModal from './components/SearchModal'
import Banner from './components/Banner'
import './components/Banner.css';
import Chat from './components/Chatbox'
import SubBanner from './containers/SubBanner';
import SubGrid from './containers/SubGrid';
import Scroll from './components/Scroll'
 

function App() {
  const [modal, SetModal] = useState(false);
  const onModal =()=>{
    SetModal(!modal);
  }
  
  return (
    <div className="App">
      <Scroll />
      <TopBar onModal={onModal}/>
      {modal?<SearchModal onModal={onModal}/>:null}
      <Chat />
      <header className="App-header"> 
        <Banner />
      </header>
      <Grid />
      <SubBanner />
      <SubGrid />
      <p>LoremEa aliquip exercitation culpa laboris consectetur irure ea. Voluptate ipsum tempor esse veniam reprehenderit occaecat labore nulla nulla id magna. Sint aliquip veniam quis laborum nulla mollit nisi sint do quis sit id. Enim cupidatat ad mollit et duis deserunt Lorem duis fugiat eiusmod ipsum.</p>
    </div>
  );
}

export default App;
