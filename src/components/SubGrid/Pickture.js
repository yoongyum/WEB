import styled from 'styled-components'
import content1 from '../../images/shoeKream/shoeKream1.jpeg'
import content2 from '../../images/shoeKream/prof1.jpeg'

const Pickture=()=>{

        return(
                <Container src={content1}>
                        <Profile></Profile>
                        <Name>@asdf</Name>
                </Container>
        )

}


export default Pickture;

//컨테이너 =============================
const Container = styled.div`
        margin : 0 .8vw 0 .8vw;
        padding : 0.9vh;
        display : flex;
        flex-direction: column;
        justify-content: space-between;
        width: 15%;
        height: 85%;
        border-radius: 2vh;
        box-shadow: 5px 5px 1.5vh #484848;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${content1});
`
const Profile=styled.div`
        display : flex;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        border : 3px solid white;
        background-size: cover;
        background-image: url(${content2});
`
const Name=styled.div`
        display : flex;
        font-family: sans-serif;
        font-size: 2.5vh;
        font-weight: bold;
        color : #FdFdFd;

`
