import styled from "styled-components";
import Card from "../components/SubGrid/Card";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
//이미지소스
import img1 from "../images/shoeKream/content1.jpeg";
import prof1 from "../images/shoeKream/prof1.jpeg";
import img2 from "../images/shoeKream/content2.jpeg";
import prof2 from "../images/shoeKream/prof2.jpeg";
import img3 from "../images/shoeKream/content3.jpeg";
import prof3 from "../images/shoeKream/prof3.jpeg";
import img4 from "../images/shoeKream/content4.jpeg";
import prof4 from "../images/shoeKream/prof4.jpeg";
import img5 from "../images/shoeKream/content5.jpeg";
import prof5 from "../images/shoeKream/prof5.jpeg";
import img6 from "../images/shoeKream/content6.jpg";
import prof6 from "../images/shoeKream/prof6.jpg";
import img7 from "../images/shoeKream/content7.jpeg";
import prof7 from "../images/shoeKream/prof7.jpeg";
import img8 from "../images/shoeKream/content8.jpg";
import prof8 from "../images/shoeKream/prof8.jpg";
import img9 from "../images/shoeKream/content9.jpeg";
import prof9 from "../images/shoeKream/prof9.jpeg";

//상품 정보
const Contents = [
    {
        img: img1,
        prof: prof1,
        name: "kimPream",
    },
    {
        img: img2,
        prof: prof2,
        name: "jinjuiii",
    },
    {
        img: img3,
        prof: prof3,
        name: "Lemona",
    },
    {
        img: img4,
        prof: prof4,
        name: "preero",
    },
    {
        img: img5,
        prof: prof5,
        name: "kkkk324",
    },
    {
        img: img6,
        prof: prof6,
        name: "sensemun",
    },
    {
        img: img7,
        prof: prof7,
        name: "Roloz",
    },
    {
        img: img8,
        prof: prof8,
        name: "redsun",
    },
    {
        img: img9,
        prof: prof9,
        name: "nineY",
    },
];
const SubGrid = () => {
    const [posX, setidx] = useState(0);

    return (
        <Container>
            <Title>#shoeKREAM</Title>
            <Content posX={posX}>
                <ListArea posX={posX}>
                    {Contents.map((val, idx) => {
                        return <Card content={val} />;
                    })}
                </ListArea>
                <PreButton type={0} onClick={() => setidx(posX + 11)}>
                    <BiChevronLeft />
                </PreButton>
                <NextButton type={1} onClick={() => setidx(posX - 11)}>
                    <BiChevronRight />
                </NextButton>
            </Content>
        </Container>
    );
};

//컨테이너 =============================
const Container = styled.div`
    padding: 8vh 0 6vh 0;
    display: flex;
    flex-direction: column;
    width: 99.1vw;
    height: 52vh;
    background-color: #f4f4f4;
    align-items: center;
    transition: 1s;
`;
//타이틀
const Title = styled.div`
    display: flex;
    height: 8vh;
    padding-bottom: 1vh;
    margin-left: 17vw;
    /* background-color: pink; */
    align-self: flex-start;
    align-items: flex-end;
    font-size: 2.6vh;
    font-family: "Roboto-Black";
    color: #000;
`;
const PreButton = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    opacity: 0;
    width: 5vh;
    height: 5vh;
    border-radius: 50vw;
    cursor: pointer;
    ${props => (props.type === 0 ? { left: "-1%" } : { right: "-1%" })};
    transition: 0.4s;
    &:hover {
        transform: scale(1.3);
        background-color: #000;
        opacity: 0.5;
        color: #fff;
    }
`;
const NextButton = styled.div`
    display: flex;
    position: absolute;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    opacity: 0;
    width: 5vh;
    height: 5vh;
    ${props => (props.type === 0 ? { left: "-1%" } : { right: "-1%" })};
    border-radius: 50vw;
    border: 1px #000 solid;
    cursor: pointer;
    /* right: -50%; */
    transition: 0.4s;
    &:hover {
        transform: scale(1.3);
        background-color: #909090;
        border: 1.5px #fff solid;
        color: #fff;
    }
`;
//그리드 컨텐츠
const Content = styled.div`
    display: flex;
    position: relative;
    width: 66vw;
    height: 100%;
    overflow-x: hidden;
    /* background-color: lavender; */
    align-items: center;
    transition: 0.7s;
    &:hover ${PreButton} {
        display: ${props => (props.posX !== 0 ? "flex" : "none")};
        opacity: 0.7;
    }
    &:hover ${NextButton} {
        display: ${props => (props.posX !== -11 * (Contents.length - 6) ? "flex" : "none")};
        opacity: 0.7;
    }
`;
const ListArea = styled.div`
    display: inline-block;
    height: 100%;
    /* background-color: yellow; */
    position: relative;
    vertical-align: bottom;
    transition: 0.6s;
    left: ${props => props.posX}vw;
    white-space: nowrap;
`;
export default SubGrid;
