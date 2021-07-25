import './SearchModal.css';
import { FiSearch } from "react-icons/fi";

const text = "브랜드명, 모델명 ,모델번호 등 "

const SearchModal=({onModal})=>{
        return(
                <div className="SContainer">
                        <div className='SearchArea'>
                                <div className ="SearchBar">
                                        <FiSearch style={dot} />
                                        <textarea className="search" placeholder={text}/>
                                </div>
                                <p>취소</p>
                        </div>
                        <div className="BlackArea" onClick={onModal}/>
                </div>
        )
}

export default SearchModal;


const dot = {
        fontSize : 44,
        color : "#959595"
}