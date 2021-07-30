import { Fragment } from 'react';
import './Chatbox.css'
import enter from '../images/전송.png'
import React,{useState} from 'react';
import {GiSmartphone} from 'react-icons/gi'

const Chatbox=()=>{
    const [modal,SetModal]=useState(false);
    const ClickModal=()=>{
        SetModal(!modal);
    }

    return(
        <Fragment>
            {modal?<div className="chatroom">
                <div className='chat-display'></div>
                <textarea placeholder="명령어를 입력해주세요." className="text-grid"></textarea>
                <button className="enter-btn"><img className="img-enter" src={enter} width='60px' alt=""></img></button>
            </div>
            :null}
            <button className="chat-btn" onClick={ClickModal}><GiSmartphone className="click-img"/></button>
        </Fragment>
    )
}

export default Chatbox;