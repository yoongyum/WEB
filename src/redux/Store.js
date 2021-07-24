import { createStore } from "redux";
//액션 타입
const CLICK = "CLICK"

//액션생성자
export const clickSearch=()=>({ type : CLICK });

//초기상태
const initialState = {
        check : false
}

//리듀서
const reducer =(state=initialState, action)=>{
        switch(action.type){
                case CLICK:
                        return {
                                ...state,
                                check : !state.check
                        }
                default:
                        return state;
        }
}
export default reducer;




