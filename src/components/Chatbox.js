import { createElement, Fragment } from 'react';
import './Chatbox.css'
import enter from '../images/전송.png'
import React,{useState} from 'react';
import {GiSmartphone} from 'react-icons/gi'

const Chatbox=()=>{
    const textgrid=document.querySelector(`.text-grid`)
    const display=document.querySelector(`.chat-display`)

    const [modal,SetModal]=useState(false); 
    const ClickModal=()=>{
        SetModal(!modal);
        }
 
     

    
    //text : 현재값 / setText: 변경할 값 / useState({초기값})
    const [text, setText] = useState('')  
     
    const onChange = (e) => {
             setText(e.target.value)		//이벤트 발생한 value값으로 {text} 변경
    }
     
    const onReset = () => {			
         setText("")			     // onClick함수 발생시 ''으로 {text} 변경
    }


    let list={'제작자':'색귀&여미&탐욕겸과 임현영','용도':'포트폴리오'}

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
    }

    function enterPress(e){
        if(e.key==='Enter'&&!e.shiftKey){
            textInput();
            e.preventDefault();
        }

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