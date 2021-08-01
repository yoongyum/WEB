
import { useEffect, useState } from "react"
import styled from 'styled-components'
import Timer from '../components/SubBanner/Timer'
//이미지 불러오기
import content1 from '../images/luckydraw/luck1.png'
import content2 from '../images/luckydraw/luck2.png'
import content3 from '../images/luckydraw/luck3.png'
import content4 from '../images/luckydraw/luck4.png'

//상품 정보
const DrawContents = [
        { 
                img : content1,
                name : 'Converse x Play Comme des Garcons Chuck 70 Ox Blue Quartz',
                Dday : '2021-08-03 12:00',
        },{
                img : content2,
                name : 'Dior B23 Low Dior Oblique White & Black',
                Dday : '2021-08-21 12:00',
        },{
                img : content3,
                name : 'sadfasdf',
                Dday : '2021-08-31 13:00',
        }
]

let curNum=0;
const SubBanner =()=>{
        const [num,setnum] = useState(0);
        const ChangeNum=(number)=>{
                setnum(number);
        }
        return(
                <Container>
                        <Content>
                                <TitleBar>
                                        <TitleText>LUCKY DRAW</TitleText>
                                        <Timer Dday={DrawContents[num].Dday}/>
                                </TitleBar>
                                <Item num={num}/> 
                                <Name>{DrawContents[num].name}</Name>
                        </Content>
                        <TabBar>
                                {DrawContents.map((value,idx)=>{
                                        return <Tab onClick={()=>ChangeNum(idx)}/>
                                })}
                        </TabBar>
                </Container>
        )
}

export default SubBanner;

//배너 컨테이너 =============================
const Container = styled.div`
        display : flex;
        flex-direction: column;
        height : 75vh;
        background-color : #252525;
        align-items: center;
        transition: 1s;
`
//타이틀바 ==================================
const TitleBar = styled.div`
        display : flex;
        width: 25vw;
        flex-direction : column;
        /* background-color: pink; */
        justify-content: center;
        align-items: center;
`
const TitleText = styled.div`
        color : #ffd700;
        font-family: 'Roboto-Black';
        font-style: italic;
        font-size: 4vh;
`
//상품명 영역
const Name = styled.div`
        display : flex;
        width: 25vw;
        padding-top: 5vh;
        /* background-color: pink; */
        align-items: center;
        text-align:  center;
        font-size: 4vh;
        font-family: 'Suranna';
        color : #dbdbdb
`
//====================================
const Content = styled.div`
        display: flex;
        height: 80vh;
        width: 100vw;
        justify-content: center;
`
//이미지 영역
const Item = styled.div`
        display : flex;
        margin:0 3vw 0 3vw;
        width: 30vw;
        /* background-color: #969696; */
        background-size: contain;
        background-image: url("${(props)=>DrawContents[props.num].img}");
        justify-content: center;
        align-items: center;
`
//하단탭 =====================================
const TabBar = styled.div`
        display: flex;
        flex-direction: row;
        width: 20vw;
        height: 5vh;
        justify-content: center;
        /* background-color: cyan; */
        font-size: 3vh;
        color : #dbdbdb
        
`
const Tab = styled.div`
        margin : 0 0.5vw 0 0.5vw;
        width: 3vw;
        height: 0.6vh;
        background-color: #969696;
        cursor: pointer;

`