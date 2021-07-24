import './Navigation.css'
import { FiSearch } from "react-icons/fi";
import React from 'react';

var itemlist = ["Style","Shop","About","Event"];

const Navigation = ({onModal})=>{
        return(
                <div className="NVcontainer" >
                        {
                                itemlist.map((value)=>{
                                        return <div key={value} className="NVitem">{value}</div>
                                })
                        }     
                        <FiSearch className="NVicon" onClick={onModal}/>
                </div>
        )
}

export default Navigation;

