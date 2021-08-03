import { Fragment } from 'react';
import './Chatbox.css'
import enter from '../images/전송.png'
import React,{useState} from 'react';
import {GiSmartphone} from 'react-icons/gi'

const Chatbox=()=>{
    const textarea=document.querySelector(`.text-grid`);
    const display=document.querySelector(`.chat-display`);

    //핸드폰 버튼 클릭시 채팅화면의 유무
    const [modal,SetModal]=useState(false); 
    const ClickModal=()=>{
        SetModal(!modal);
        }

        
    //textarea 인풋
    const [text, setText] = useState('')  
    const onChange = (e) => {
        setText(e.target.value)		
    }
     

    //chatbox 명령어 및 설정 리스트
    const list={'제작자':'색귀&여미&탐욕겸과 임현영','용도':'포트폴리오'}
    const divList=['right-display','left-display',"명령어를 제대로 입력해주세요!"]
    
    //채팅이 화면에 나오게끔 구현해주는 함수
    const add=(val,divlist)=>{
        const rCommand=document.createElement(`div`);
        rCommand.classList.add(divlist[0]);
        rCommand.innerText=val;
        display.append(rCommand);
        
            if(list[val]){
                const lCommand=document.createElement(`div`);
                lCommand.classList.add(divlist[1]);
                lCommand.innerText=list[val];
                display.append(lCommand);
            }
            else{
                const lCommand=document.createElement(`div`);
                lCommand.classList.add(divlist[1]);
                lCommand.innerText=divlist[2];
                display.append(lCommand);
            }
        }
    
    //클릭 구현
    function textInput(){
        display.innerText=""
        add(text,divList);
        textarea.value="";
    }
    //엔터 구현
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