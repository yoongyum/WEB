import './Grid.css'
import Img1 from '../images/1.png'
import Img2 from '../images/2.png'
import Img3 from '../images/3.png'
import Img4 from '../images/4.png'
import { Fragment } from 'react'

const Grid=()=>{
    // const grid=document.querySelector(`.grid`)
    // const btn=document.querySelector(`.btn`)
    // function onClick(e){
    //     if(e.target.classList.contains(`btn`)){
    //     const text=document.createElement(`div`)
    //     text.innerText="250mm~290mm"
    //     btn.before(text)
    //     }
    // }
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

    return(
        <Fragment>
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
        </Fragment>
    )
}

export default Grid;