import './Grid.css'
import React,{useState} from 'react';
import Img1 from '../images/1.png'
import Img2 from '../images/2.png'
import Img3 from '../images/3.png'
import Img4 from '../images/4.png'
import Img5 from '../images/5.png'
import Img6 from '../images/6.png'
import Img7 from '../images/7.png'
import Img8 from '../images/8.png'
import Img9 from '../images/더보기.png'
// import Grid2 from './Grid2'

const Grid=()=>{
    const [modal,SetModal]=useState(false);
    const ClickModal=()=>{
        SetModal(!modal);
    }

    function mouseOver(e){
        if(e.target.classList.contains(`grid`)){
           e.target.classList.add('grid:hover',`change_1`)
        }  
        else{
           e.target.classList.add('btn:hover','change2')
        }
    } 
    function mouseOut(e){
        if(e.target.classList.contains(`grid`)){
            e.target.classList.remove(`change_1`,'grid:hover')
        }
        else{
            e.target.classList.remove('change2','btn:hover')
         }
    }

    function mouseOver1(e){
        if(e.target.classList.contains(`grid`)){
           e.target.classList.add('grid:hover',`change_2`)
        }  
        else{
           e.target.classList.add('btn:hover','change2')
        }
    } 
    function mouseOut1(e){
        if(e.target.classList.contains(`grid`)){
            e.target.classList.remove(`change_2`,'grid:hover')
        }
        else{
            e.target.classList.remove('change2','btn:hover')
         }
    }

    return(
        <div className="mother">
            <div className="all">
                <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                    <img src={Img1} className="btn" width="200px" alt=""></img>
                    <li>조던 신발1</li>
                    <li>가격:129,000,000</li></div>
                <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                    <img src={Img2} className="btn" width="200px" alt=""></img>
                    <li>조던 신발2</li>
                    <li>가격:19,000,000</li></div>
                <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                    <img src={Img3} className="btn" width="200px" alt=""></img>
                    <li>조던 신발3</li>
                    <li>가격:18,000,000</li></div>
                <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                    <img src={Img4} className="btn" width="200px" alt=""></img>
                    <li>조던 신발4</li>
                    <li>가격:1,129,000,000</li></div>
            </div>
            <div className>
                    {modal? <div className="all">
                    <div onMouseEnter={mouseOver1} onMouseLeave={mouseOut1} className="grid">
                        <img src={Img5} className="btn" width="200px" alt=""></img>
                        <li>조던 신발1</li>
                        <li>가격:129,000,000</li></div>
                    <div onMouseEnter={mouseOver1} onMouseLeave={mouseOut1} className="grid">
                        <img src={Img6} className="btn" width="200px" alt=""></img>
                        <li>조던 신발2</li>
                        <li>가격:19,000,000</li></div>
                    <div onMouseEnter={mouseOver1} onMouseLeave={mouseOut1} className="grid">
                        <img src={Img7} className="btn" width="200px" alt=""></img>
                        <li>조던 신발3</li>
                        <li>가격:18,000,000</li></div>
                    <div onMouseEnter={mouseOver1} onMouseLeave={mouseOut1} className="grid">
                        <img src={Img8} className="btn" width="200px" alt=""></img>
                        <li>조던 신발4</li>
                        <li>가격:1,129,000,000</li></div>
                </div>:null}
                <button onClick={ClickModal}><img src={Img9} width="75px" alt=""></img></button>
            </div>
        </div>
    )
}

export default Grid;