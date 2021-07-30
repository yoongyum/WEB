import './SearchModal.css';
import { FiSearch } from "react-icons/fi";

const text = "브랜드명, 모델명 ,모델번호 등 "

const SearchModal=({onModal})=>{
        return(
                <div className="SContainer">
                        <div className='SearchArea'>
                                <div className ="SearchBar">
                                        <FiSearch style={dot} />
                                        <input type = "text" maxlength='13' className="search" placeholder={text}/>
                                </div>
                                <div style={cancel} onClick={onModal}>취소</div>
                        </div>
                        <div className="BlackArea" onClick={onModal}/>
                </div>
        )
}

export default SearchModal;


const dot = {
        fontSize : '1.6vw',
        color : "#959595"
}
const cancel = {
        fontSize : '1.2vw',
        fontWeight : 'bold',
        cursor : 'pointer',
        color : "#959595"
}