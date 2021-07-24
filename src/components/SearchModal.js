import './SearchModal.css';


const SearchModal=({onModal})=>{
        return(
                <div className="SContainer">
                        <div className='SearchArea'>
                                <textarea type="text" className="search" placeholder="브랜드 명"/>
                        </div>
                        <div className="BlackArea" onClick={onModal}/>
                </div>
        )
}

export default SearchModal;