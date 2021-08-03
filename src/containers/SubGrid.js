import styled from 'styled-components'
import Pickture from '../components/SubGrid/Pickture'
const SubGrid=()=>{
        return(
                <Container>
                        <Title>#shoeKREAM</Title>
                        <GridArea>
                                <Pickture/>
                                <Pickture/>
                                <Pickture/>
                                <Pickture/>
                                <Pickture/>
                                <Pickture/>
                        </GridArea>
                </Container>
        )
}

//컨테이너 =============================
const Container = styled.div`
        margin: 8vh 0 8vh 0;
        padding: 0 16vw 0 16vw;
        display : flex;
        flex-direction: column;
        height : 40vh;
        /* background-color : lavender; */
        transition: 1s;
`

//타이틀 
const Title = styled.div`
        display : flex;
        flex : 0 1 0 0;
        height: 8vh;
        margin-left: 1vw;
        /* background-color: pink; */
        align-items: center;
        font-size: 3vh;
        font-family: 'Roboto-Black';
        color : #000;
`
//그리드 컨텐츠
const GridArea = styled.div`
        display : flex;
        flex : 1;
        justify-content: center;
        align-items: center;
        /* background-color: gray; */
`
export default SubGrid;