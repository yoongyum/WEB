
import styled from 'styled-components'

//이미지 불러오기
import content1 from '../images/luckydraw/luck1.png'
import content2 from '../images/luckydraw/luck2.png'
import content3 from '../images/luckydraw/luck3.png'
import content4 from '../images/luckydraw/luck4.png'


const SubBanner =()=>{
        return(
                <Container>
                        <Content>
                                <TitleBar>
                                        <TitleText>LUCKY DRAW</TitleText>
                                        <Time>DD HH MM SS</Time>
                                </TitleBar>
                                <Item> 
                                          
                                </Item>
                                <Name>Converse x Play Comme des Garcons Chuck 70 Ox Blue Quartz</Name>
                        </Content>
                        <TabBar>
                                <Tab />
                                <Tab />
                                <Tab />
                                <Tab />
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
        color : #808080;
        font-family: 'Roboto-Black';
        font-size: 3.5vh;
`
const Time = styled.div`
        display : flex;
        margin-top: 5vh;
        text-align: center;
        font-size: 5.5vh;
        color : #dbdbdb
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
        background-image: url("${content1}");
        justify-content: center;
        align-items: center;
        z-index : 2;
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