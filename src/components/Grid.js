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

let list=[{img:Img1,title:'조던 신발1',content:'가격:129,000,000'}
,{img:Img2,title:'조던 신발2',content:'가격:129,000,000',}
,{img:Img3,title:'조던 신발3',content:'가격:129,000,000',}
,{img:Img4,title:'조던 신발4',content:'가격:129,000,000',},
]
let list2=[{img:Img5,title:'조던 신발1',content:'가격:129,000,000'}
,{img:Img6,title:'조던 신발2',content:'가격:129,000,000',}
,{img:Img7,title:'조던 신발3',content:'가격:129,000,000',}
,{img:Img8,title:'조던 신발4',content:'가격:129,000,000',},
]

const Grid=()=>{
    const [modal,SetModal]=useState(false);
    const ClickModal=()=>{
        SetModal(!modal);
    }


    function mouseDown(e){
        if(e.target.classList.contains(`fake`)&&e.button===0){
            e.target.classList.add('grid_hover','change_1')
            e.target.classList.remove('fake')
            e.target.firstElementChild.classList.remove(`stopEvent`)
        }
        else if((!e.target.classList.contains(`fake`)&&e.target.classList.contains(`grid`))&&e.button===0) {
             e.target.classList.remove('grid_hover','change_1')
             e.target.classList.add(`fake`)
             e.target.firstElementChild.classList.add(`stopEvent`)
        }
    } 

    function mouseDown2(e){
        if(e.target.classList.contains(`grid`)&&e.button===0){
            e.target.classList.add('grid_hover','change_2')
            e.target.firstElementChild.classList.remove(`stopEvent`)
        }
        if((e.target.classList.contains(`grid`))&&e.button===2) {
             e.target.classList.remove('grid_hover','change_2')
             e.target.firstElementChild.classList.add(`stopEvent`)
        }
    } 

    function del(e){
            e.preventDefault();
      }
    

    return(
        <div  onContextMenu={del} className="mother">
            <div className="all">
                {
                    list.map((val)=>{
                        return <div onMouseDown={mouseDown} onContextMenu={del} className="grid fake">
                        <img src={val.img} className="imgset stopEvent" width="200px" alt=""></img>
                        <li className="list">{val.title}</li>
                        <li>{val.content}</li>
                        </div>

                    })
                }
            </div>

            <div className="all">
                    {modal?
                        list2.map((val)=>{    
                        return <div onMouseDown={mouseDown2} onContextMenu={del} className="grid fake">
                        <img src={val.img} className="imgset stopEvent" width="200px" alt=""></img>
                        <li>{val.title}</li>
                        <li>{val.content}</li>
                        </div>
                    }):null} 
            </div>
            <button className="Btn" onClick={ClickModal}><img src={Img9} width="75px" alt=""></img></button>
        </div>
    )
}

export default Grid;