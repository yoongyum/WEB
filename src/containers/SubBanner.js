
import { useState, useEffect } from "react"
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
                Dday : '2021-08-05 12:00',
        },{
                img : content2,
                name : 'Dior B23 Low Dior Oblique White & Black',
                Dday : '2021-08-21 12:00',
        },{
                img : content3,
                name : 'Nike SB Dunk Low What The Paul',
                Dday : '2021-08-31 13:00',
        },{
                img : content4,
                name : 'Nike x Peaceminusone Air Force 1 Low Para-Noise 2.0',
                Dday : '2021-08-25 23:00',
        }
]

const SubBanner =()=>{
        const [num,setnum] = useState(0);
        const [offsetY,SetoffsetY] = useState(0);
        const handleScroll=()=> SetoffsetY(window.pageYOffset);
        useEffect(()=>{
                window.addEventListener('scroll',handleScroll);
                return()=>window.removeEventListener('scroll',handleScroll);
        },[])
        return(
                <Container>
                        <Content>
                                <TitleBar>
                                        <TitleText offsetY={offsetY}>LUCKY DRAW</TitleText>
                                        <Timer Dday={DrawContents[num].Dday}/>
                                </TitleBar>
                                <Item num={num}/> 
                                <Name>{DrawContents[num].name}</Name>
                        </Content>
                        <TabBar>
                                {DrawContents.map((value,idx)=>{
                                        return <Tab num={num} idx={idx} onClick={()=>setnum(idx)}/>
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
        padding-top: 8vh;
        flex-direction : column;
        justify-content: center;
        align-items: center;
`
const TitleText = styled.div`
        position: relative;
        left: -110%;
        color : #ffd700;
        font-family: 'Roboto-Black';
        font-style: italic;
        font-size: 6vh;
        transition: .6s;
        transform: translateX(${(props)=>props.offsetY*0.019}vw) ;
`
//상품명 영역
const Name = styled.div`
        display : flex;
        width: 25vw;
        padding-top: 8vh;
        align-items: center;
        text-align:  center;
        font-size: 4vh;
        font-family: 'Suranna';
        color : #dbdbdb;
`
//====================================
const Content = styled.div`
        display: flex;
        height: 70vh;
        width: 100vw;
        justify-content: center;
        align-items: center;
        transition: 1s;
`
//이미지 영역
const Item = styled.div`
        display : flex;
        margin:0 5vw 0 5vw;
        width: 22vw;
        height: 22vw;
        background-size: contain;
        /* background-color: pink; */
        background-image: url("${(props)=>DrawContents[props.num].img}");
        cursor: pointer;
        transition: 0.4s;
        &:hover{
                transform: scale(1.2);
        }
        &:active{
                transform: scale(1.1);
        }
`
//하단탭 =====================================
const TabBar = styled.div`
        display: flex;
        flex-direction: row;
        width: 20vw;
        height: 8vh;
        justify-content: center;
        /* background-color: cyan; */
        font-size: 3vh;
        color : #dbdbdb;
`
const Tab = styled.div`
        flex : 1;
        width: 4vw;
        height: 1vh;
        position: relative;
        overflow:hidden;
        background-color: ${(props)=>props.num === props.idx ? '#fff':'#969696'};
        cursor: pointer;
        transition: .3s;
        &::after{
                position: absolute;
                content: '';
                width: 0;
                left: 50%;
                height: 100%;
                transition: .5s;
                background-color: #FFF;
        }
        &:hover{
                transform: scaleY(2);
        }
        &:hover::after{
                width : 100%;
                left: 0;
                opacity : .5;
        }
`