import './Navigation.css'

var itemlist = ["Home","Menu","Profile","Event","Setting"];

const Navigation = ()=>{
        return(
                <div class="NVcontainer" >
                        {
                                itemlist.map(value=>{
                                        return <div className="Navi_item">{value}</div>
                                })
                        }             
                </div>
        )
}

export default Navigation;

