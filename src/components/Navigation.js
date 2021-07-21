import './Navigation.css'

var itemlist = ["Home","Menu","Profile","Event","Setting"];

const Navigation = ()=>{
        return(
                <div className="NVcontainer" >
                        {
                                itemlist.map(value=>{
                                        return <button className="Navi_item">{value}</button>
                                })
                        }             
                </div>
        )
}

export default Navigation;
