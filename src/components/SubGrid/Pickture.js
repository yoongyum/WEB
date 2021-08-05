import styled from 'styled-components'


const Pickture=({content})=>{

        return(
                <Container bg = {content.img}>
                        <Profile prof={content.prof}/>
                        <Name>{'@'+content.name}</Name>
                </Container>
        )

}


export default Pickture;

//컨테이너 =============================
const Container = styled.div`
        float : left;
        margin : 0 .8vw 0 .8vw;
        padding : 0.9vh;
        display : flex;
        flex : 1;
        height: 30vh;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 2vh;
        box-shadow: 5px 5px 1.5vh #484848;
        cursor: pointer;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${props=>props.bg});
`
const Profile=styled.div`
        display : flex;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        border : 3px solid white;
        background-size: cover;
        background-image: url(${props=>props.prof});
`
const Name=styled.div`
        display : flex;
        font-family: sans-serif;
        font-size: 2.5vh;
        font-weight: bold;
        color : #FdFdFd;

`
