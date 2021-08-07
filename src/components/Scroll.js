import { Fragment } from 'react'
import './Scroll.css'
import UP from '../images/위화살표.png'
import DOWN from '../images/아래화살표.png'
import Basket from '../images/장바구니.png'
import Trans from '../images/번역.png'

const Scroll=()=>{
    const onScroll=()=>{
        const STANDARD=300
        const scroll=document.querySelector(`#scroll`)
    
        if(window.scrollY>STANDARD){
          scroll.classList.add(`visible`)
        }
        else{
          scroll.classList.remove('visible')
        }
      }
      window.addEventListener('scroll',onScroll)
    return(
        <Fragment>
            <div id="scroll">
              <div><img src={UP} alt=""></img></div>
              <div><img src={Basket} alt=""></img></div>
              <div><img src={Trans} alt=""></img></div>
              <div><img src={DOWN} alt=""></img></div>
            </div>
        </Fragment>
    )
}

export default Scroll