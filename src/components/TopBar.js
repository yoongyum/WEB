import './TopBar.css';
import Navigation from './Navigation';
import Logo from '../images/KREAMLOGOWHITE.svg'
import { FiAlignJustify } from "react-icons/fi";

const TopBar=({onModal})=> {
        
        return(
                <div className="TBcontainer">
                        <div className="MinC minc1"> 
                                <img src={Logo} className="KreamLogo" alt="haha"/>
                        </div>
                        <div className="MinC minc2">
                                <Navigation onModal={onModal}/>
                        </div>
                        <div className="MinC minc3">
                                <FiAlignJustify className="hamburgBTN"/>
                        </div>
                </div>
        )
}

export default TopBar;