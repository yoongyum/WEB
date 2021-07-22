import './TopBar.css';
import Navigation from './Navigation';
import { FiAlignJustify } from "react-icons/fi";

const TopBar=()=> {
        
        return(
                <div className="TBcontainer">
                        <div class="MinC minc1">
                                <button className="logo_default">KREAM</button>
                        </div>
                        <div class="MinC minc2">
                                <Navigation/>
                        </div>
                        <div class="MinC minc3">
                                <button className="hamburgBTN"><FiAlignJustify/></button>
                        </div>
                </div>
        )
}

export default TopBar;