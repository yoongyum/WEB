import styled from "styled-components";

const Card = ({ content }) => {
    return (
        <Container bg={content.img}>
            <Mask />
            <Profile prof={content.prof} />
            <Name>{"@" + content.name}</Name>
        </Container>
    );
};

export default Card;

//컨테이너 =============================
const Container = styled.div`
    margin: 1vh 0.5vw;
    width: 10vw;
    height: 90%;
    display: inline-flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1.5vh;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.bg});
    transition: 0.8s;
    &:hover {
        transform: translateY(10px);
    }
`;
const Mask = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 1.5vh;
    opacity: 0.15;
    background: #000;
`;
const Profile = styled.div`
    width: 4vh;
    height: 4vh;
    margin: 1vh;
    position: relative;
    border-radius: 50px;
    border: 2.5px solid white;
    background-size: cover;
    background-image: url(${props => props.prof});
    transition: 0.5s;
`;
const Name = styled.div`
    display: flex;
    margin: 1vh;
    font-family: sans-serif;
    font-size: 1.5vh;
    font-weight: bold;
    color: #fdfdfd;
    z-index: 2;
`;
