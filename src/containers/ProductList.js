import styled from "styled-components";
import Item from "../components/ProductList/Item";

const ProductList = () => {
    return (
        <Container>
            <TopArea>
                <Title>Most Popular</Title>
                <SubTitle>인기 상품</SubTitle>
            </TopArea>
            <Body>
                <ItemList>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemList>
                <MoreBar>
                    <MoreBtn>더보기</MoreBtn>
                </MoreBar>
            </Body>
        </Container>
    );
};

export default ProductList;

const Container = styled.div`
    display: flex;
    position: relative;
    height: 65vh;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;
const TopArea = styled.div`
    display: flex;
    padding-top: 40px;
    flex-direction: row;
    width: 64vw;
    height: 15%;
    justify-content: flex-start;
    align-items: center;
    /* background-color: pink; */
`;
const Title = styled.div`
    margin-left: 1vw;
    height: fit-content;
    font-size: 20px;
    font-family: "Roboto-Black";
    color: #000;

    letter-spacing: -0.21px;
    /* background-color: red; */
`;
const SubTitle = styled.div`
    height: fit-content;
    margin-left: 0.5vw;
    font-size: 14px;
    color: #909090;
    text-align: center;
    letter-spacing: -0.21px;
    /* background-color: yellow; */
`;
const Body = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    flex-direction: column;
    align-items: center;
    /* background-color: teal; */
`;
const ItemList = styled.div`
    display: flex;
    position: relative;
    width: 64vw;
    padding-bottom: 2%;
    flex: 0.9;
    /* background-color: #e6e6fa; */
    justify-content: center;
`;
const MoreBar = styled.div`
    display: flex;
    flex: 0.2;
    justify-content: center;
    /* background-color: orange; */
`;
const MoreBtn = styled.div`
    display: flex;
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 1vh;
    border: 1px solid #979797;
    color: #484848;
    font-size: 14px;
    letter-spacing: -0.21px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: #fff;
        background-color: #989898;
    }
`;
