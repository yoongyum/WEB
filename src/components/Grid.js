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
import Img9 from '../images/화살표.png'
// import Grid2 from './Grid2'

let list=[{img:Img1,title:'조던 신발1',content:'가격:129,000,000',}
,{img:Img2,title:'조던 신발2',content:'가격:129,000,000',}
,{img:Img3,title:'조던 신발3',content:'가격:129,000,000',}
,{img:Img4,title:'조던 신발4',content:'가격:129,000,000',},
]
let list2=[{img:Img5,title:'조던 신발1',content:'가격:129,000,000',}
,{img:Img6,title:'조던 신발2',content:'가격:129,000,000',}
,{img:Img7,title:'조던 신발3',content:'가격:129,000,000',}
,{img:Img8,title:'조던 신발4',content:'가격:129,000,000',},
]

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
                {
                    list.map((val)=>{
                        return <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                        <img src={val.img} className="imgset" width="200px" alt=""></img>
                        <li>{val.title}</li>
                        <li>{val.content}</li></div>
                    })
                }
            </div>

            <div className="all">
                    {modal?
                        list2.map((val)=>{    
                        return <div onMouseEnter={mouseOver1} onMouseLeave={mouseOut1} className="grid">
                        <img src={val.img} className="imgset" width="200px" alt=""></img>
                        <li>{val.title}</li>
                        <li>{val.content}</li></div>}):null} 
            </div>
            <button className="Btn" onClick={ClickModal}><img src={Img9} width="75px" alt=""></img></button>
        </div>
    )
}

export default Grid;