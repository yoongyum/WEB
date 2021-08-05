import styled from 'styled-components'
import Pickture from '../components/SubGrid/Pickture'
import { BiChevronLeft,BiChevronRight } from "react-icons/bi";
//이미지소스
import img1 from '../images/shoeKream/content1.jpeg'
import prof1 from '../images/shoeKream/prof1.jpeg'
import img2 from '../images/shoeKream/content2.jpeg'
import prof2 from '../images/shoeKream/prof2.jpeg'
import img3 from '../images/shoeKream/content3.jpeg'
import prof3 from '../images/shoeKream/prof3.jpeg'
import img4 from '../images/shoeKream/content4.jpeg'
import prof4 from '../images/shoeKream/prof4.jpeg'
import img5 from '../images/shoeKream/content5.jpeg'
import prof5 from '../images/shoeKream/prof5.jpeg'
import img6 from '../images/shoeKream/content6.jpg'
import prof6 from '../images/shoeKream/prof6.jpg'
import img7 from '../images/shoeKream/content7.jpeg'
import prof7 from '../images/shoeKream/prof7.jpeg'
import img8 from '../images/shoeKream/content8.jpg'
import prof8 from '../images/shoeKream/prof8.jpg'
import img9 from '../images/shoeKream/content9.jpeg'
import prof9 from '../images/shoeKream/prof9.jpeg'

//상품 정보
const Contents = [
        { 
                img : img1,
                prof : prof1,
                name : 'kimPream',
        },{
                img : img2,
                prof : prof2,
                name : 'jinjuiii',
        },{
                img : img3,
                prof : prof3,
                name : 'Lemona',
        },{
                img : img4,
                prof : prof4,
                name : 'preero',
        },{
                img : img5,
                prof : prof5,
                name : 'kkkk324',
        },{
                img : img6,
                prof : prof6,
                name : 'sensemun',
        },{
                img : img7,
                prof : prof7,
                name : 'Roloz',
        },{
                img : img8,
                prof : prof8,
                name : 'redsun',
        },{
                img : img9,
                prof : prof9,
                name : 'nineY',
        }
]


const SubGrid=()=>{
        return(
                <Container>
                        <Title>#shoeKREAM</Title>
                        <GridArea>
                                {Contents.map((val,idx)=>{
                                        if(idx > 5) return null;
                                        return <Pickture content={val}/>
                                })}
                                <PreButton><BiChevronLeft/></PreButton>
                                <NextButton><BiChevronRight /></NextButton>
                        </GridArea>
                </Container>
        )
}

//컨테이너 =============================
const Container = styled.div`
        margin: 8vh 0 4vh 0;
        padding: 0 16vw 0 16vw;
        display : flex;
        flex-direction: column;
        width: 100vw;
        height : 40vh;
        /* background-color : lavender; */
        transition: 1s;
`

//타이틀 
const Title = styled.div`
        display : flex;
        flex : 0 1 0 0;
        height: 8vh;
        padding-bottom: 1vh;
        margin-left: 1vw;
        /* background-color: pink; */
        align-items: flex-end;
        font-size: 3.5vh;
        font-family: 'Roboto-Black';
        color : #000;
`
const PreButton = styled.div`
        display : flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
        opacity: 0;
        width: 5vh;
        height: 5vh;
        z-index: 1000;
        border-radius: 50vw;
        cursor: pointer;
        left:-1%;
        border: 1px #000 solid;
        transition: .4s;
        /* left: -50%; */
        &:hover{
                transform: scale(1.2);
                background-color: #303030;
                color : #FFF;
        }
`
const NextButton = styled.div`
        display : flex;
        position: absolute;
        background-color: #FFF;
        align-items: center;
        justify-content: center;
        opacity: 0;
        width: 5vh;
        height: 5vh;
        z-index: 1000;
        right: -1%;
        border-radius: 50vw;
        border: 1px #000 solid;
        cursor: pointer;
        /* right: -50%; */
        transition: .4s;
        &:hover{
                transform: scale(1.2);
                background-color: #303030;
                color : #FFF;
        }
`
//그리드 컨텐츠
const GridArea = styled.div`
        display : flex;
        position: relative;
        flex : 1;
        justify-content: left;
        align-items: center;
        /* background-color: gray; */
        white-space: nowrap;
        cursor: pointer;
        transition: .7s;
        &:hover ${PreButton}  {
                opacity: 0.9;
        }
        &:hover ${NextButton}  {
                opacity: 0.9;
        }
`
export default SubGrid;