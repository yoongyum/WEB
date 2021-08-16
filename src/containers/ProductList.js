import styled from "styled-components";

const ProductList = () => {
    return (
        <Container>
            <TopArea>
                <Title>Most Popular</Title>
                <SubTitle>인기 상품</SubTitle>
            </TopArea>
            <Body></Body>
        </Container>
    );
};

export default ProductList;

const Container = styled.div`
    padding: 0 17vw 0 17vw;
    height: 65vh;
    background-color: #fff;
`;
const TopArea = styled.div`
    display: flex;
    padding-top: 40px;
    flex-direction: row;
    width: 100%;
    height: 15%;
    justify-content: flex-start;
    align-items: center;
    /* background-color: pink; */
`;
const Title = styled.div`
    margin: 1vh;
    height: fit-content;
    font-size: 20px;
    font-family: "Roboto-Black";
    color: #000;

    letter-spacing: -0.21px;
    /* background-color: red; */
`;
const SubTitle = styled.div`
    height: fit-content;
    font-size: 14px;
    color: #909090;
    text-align: center;
    letter-spacing: -0.21px;
    /* background-color: yellow; */
`;
const Body = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: teal;
`;
