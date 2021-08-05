import { Fragment } from 'react'
import './Scroll.css'

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
            <div id="scroll"></div>
        </Fragment>
    )
}

export default Scroll