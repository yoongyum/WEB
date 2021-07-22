import './Grid.css'
import Img1 from '../images/1.png'
import Img2 from '../images/2.png'
import Img3 from '../images/3.png'
import Img4 from '../images/4.png'

const Grid=()=>{
    function mouseOver(e){
        if(e.target.classList.contains(`grid`)){
            return e.target.classList.add(`change`)
        }
        else{
            return e.target.classList.toggle(`btn`,'btn:hover')
        }
    } 
    function mouseOut(e){
        if(e.target.classList.contains(`grid`)){
            return e.target.classList.remove(`change`)
        }
    }

    return(
        <>
        <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid"><img src={Img1} width="200px" alt=""></img></div>
        <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid"><img src={Img2} width="200px" alt=""></img></div>
        <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid"><img src={Img3} width="200px" alt=""></img></div>
        <div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="grid"><img src={Img4} width="200px" alt=""></img></div>
        </>
    )
}

export default Grid;