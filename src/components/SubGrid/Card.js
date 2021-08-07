import styled from 'styled-components'


const Card=({content})=>{

        return(
                <Container bg = {content.img}>
                        <Profile prof={content.prof}/>
                        <Name>{'@'+content.name}</Name>
                </Container>
        )

}


export default Card;

//컨테이너 =============================
const Container = styled.div`
        margin : 1vh 0.5vw 0.5vw;
        width: 10vw;
        height: 30vh;
        padding : 1vh;
        display : inline-flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 2vh;
        box-shadow: .3vh .3vh 1vh #484848;
        cursor: pointer;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${props=>props.bg});
        transition: .8s;
        &:hover{
                transform: translateY(15px);
        }
`
const Profile=styled.div`
        width: 6vh;
        height: 6vh;
        position: relative;
        border-radius: 50px;
        border : 3px solid white;
        background-size: cover;
        background-image: url(${props=>props.prof});
        transition: .5s;
`
const Name=styled.div`
        display : flex;
        font-family: sans-serif;
        font-size: 2.5vh;
        font-weight: bold;
        color : #FdFdFd;

`
