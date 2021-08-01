import { createElement, Fragment } from 'react';
import './Chatbox.css'
import enter from '../images/전송.png'
import React,{useState} from 'react';
import {GiSmartphone} from 'react-icons/gi'

const Chatbox=()=>{
    const textarea=document.querySelector(`.text-grid`);
    const display=document.querySelector(`.chat-display`);

    const [modal,SetModal]=useState(false); 
    const ClickModal=()=>{
        SetModal(!modal);
        } //핸드폰 버튼 클릭시 채팅화면의 유무


    const [text, setText] = useState('')  
    const onChange = (e) => {
             setText(e.target.value)		
    }
     

    const list={'제작자':'색귀&여미&탐욕겸과 임현영','용도':'포트폴리오'}
    // const divList=['right-display','left-display']
    

    // const add=(val)=>{
    //     const rCommand=document.createElement(`div`);
    //     rCommand.classList.add(`right-display`);
    //     rCommand.innerText=val;
    //     display.append(rCommand);
        
    //     const lCommand=document.createElement(`div`);
    //     lCommand.classList.add(`left-display`);
    //     lCommand.innerText=list[val];
    //     display.append(lCommand);
    // }

    function textInput(){
        display.innerText=""
        if(text in list){
            const rCommand=document.createElement(`div`);
            rCommand.classList.add(`right-display`);
            rCommand.innerText=text;
            display.append(rCommand);
            
            const lCommand=document.createElement(`div`);
            lCommand.classList.add(`left-display`);
            lCommand.innerText=list[text];
            display.append(lCommand);
        }
        else{
            const rCommand=document.createElement(`div`);
            rCommand.classList.add(`right-display`);
            rCommand.innerText=text;
            display.append(rCommand);
            
            const lCommand=document.createElement(`div`);
            lCommand.classList.add(`left-display`);
            lCommand.innerText="명령어를 제대로 입력해주세요!";
            display.append(lCommand);
        }
        textarea.value="";
    }

    function enterPress(e){
        if(e.key==='Enter'&&!e.shiftKey){
            textInput();
            e.preventDefault();
        }
        e.target.value="";
    }

    return(
        <Fragment className="body">
            {modal?<div className="chatroom">
                <div className='chat-display'>
                </div>
                <textarea onChange={onChange} onKeyPress={enterPress} placeholder="명령어 목록: 제작자, 용도" className="text-grid"></textarea>
                <button onClick={textInput} className="enter-btn"><img className="img-enter" src={enter} width='60px' alt=""></img></button>
            </div>
            :null}
            <button className="chat-btn" onClick={ClickModal}><GiSmartphone className="click-img"/></button>
        </Fragment>
    )
 } 
export default Chatbox;