import './TopBar.css';
import Navigation from './Navigation';


const fun=()=>{
        console.log("gg")
}
const TopBar=()=> {
        
        return(
                <div className="TBcontainer">
                        {/* <button className="titleBTN" onClick={fun}>Kream</button>
                        <Navigation/>  
                        <p>Hello</p> */}
                        <div className="MinContainer"></div>
                        <div className="MinContainer"><Navigation/> </div>
                        <div className="MinContainer"></div>
                </div>
        )
}

export default TopBar;