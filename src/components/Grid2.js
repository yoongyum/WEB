import './Grid.css'
import Img5 from '../images/5.png'
import Img6 from '../images/6.png'
import Img7 from '../images/7.png'
import Img8 from '../images/8.png'
import { Fragment } from 'react'

const Grid2=()=>{
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
        <Fragment>
            <div className="all">
                <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                    <img src={Img5} className="btn" width="200px" alt=""></img>
                    <li>조던 신발1</li>
                    <li>가격:129,000,000</li></div>
                <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                    <img src={Img6} className="btn" width="200px" alt=""></img>
                    <li>조던 신발2</li>
                    <li>가격:19,000,000</li></div>
                <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                    <img src={Img7} className="btn" width="200px" alt=""></img>
                    <li>조던 신발3</li>
                    <li>가격:18,000,000</li></div>
                <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid">
                    <img src={Img8} className="btn" width="200px" alt=""></img>
                    <li>조던 신발4</li>
                    <li>가격:1,129,000,000</li></div>
            </div>
        </Fragment>

    )
}

export default Grid2