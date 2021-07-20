import './TopBar.css';
import Navigation from './Navigation';
import { FiAlignJustify } from "react-icons/fi";

const TopBar=()=> {
        
        return(
                <div className="TBcontainer">
                        <div className="MinContainer1">
                                <button className="logo_default">KREAM</button>
                        </div>
                        <div className="MinContainer2"><Navigation/></div>
                        <div className="MinContainer3">
                                <button className="hamburgBTN"><FiAlignJustify/></button>
                        </div>
                </div>
        )
}

export default TopBar;