import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import Grid from "./components/Grid";
import SearchModal from "./components/SearchModal";
import Banner from "./components/Banner";
import "./components/Banner.css";
import Chat from "./components/Chatbox";
import SubBanner from "./containers/SubBanner";
import SubGrid from "./containers/SubGrid";
import AdBanner from "./containers/AdBanner";
import Scroll from "./components/Scroll";
import ProductList from "./containers/ProductList";
import { sony } from "./inform/SonyInform";
import { jordan } from "./inform/JordanTravis";

function App() {
    const [modal, SetModal] = useState(false);
    const onModal = () => {
        SetModal(!modal);
    };

    return (
        <div className="App">
            <Scroll />
            <TopBar onModal={onModal} />
            {modal ? <SearchModal onModal={onModal} /> : null}
            <Chat />
            <header className="App-header">
                <Banner />
            </header>
            <ProductList />
            <Grid />
            <AdBanner AD={sony} />
            <SubBanner />
            <SubGrid />
            <AdBanner AD={jordan} />
            <Bottom>여기는 아직 빈공간입니다.</Bottom>
        </div>
    );
}

export default App;

//스타일
const Bottom = styled.div`
    width: auto;
    height: 65vh;
    background-color: #fff;
    cursor: pointer;
`;
