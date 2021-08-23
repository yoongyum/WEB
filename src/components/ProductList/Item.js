import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";
const Item = () => {
    return (
        <Container>
            <PicArea></PicArea>
            <TextArea>
                <BrandTag>
                    <BrandTop>
                        Brand Logo
                        <BsBookmark style={{ fontSize: 22 }} />
                    </BrandTop>
                    Anim sint anim dolor id ex ullamco.Non deserunt nostrud enim pariatur laboris.
                </BrandTag>
                <PriceTag>
                    <text>즉시 구매가 </text>
                    <text>1.300.000원</text>
                </PriceTag>
            </TextArea>
        </Container>
    );
};

export default Item;

const Container = styled.div`
    display: flex;
    margin: 1vw;
    width: 15vw;
    flex-direction: column;
    /* background-color: darkviolet; */
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid #000; */
`;
const PicArea = styled.div`
    display: flex;
    width: 27.5vh;
    height: 27.5vh;
    background-color: #dadd;
    border-radius: 1.5vw;
`;
const TextArea = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    margin-top: 1vh;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    font-size: 14px;
`;
const BrandTag = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    /* background-color: dimgray; */
`;
const BrandTop = styled.div`
    margin-bottom: 5px;
    display: flex;
    flex: 0.66;
    justify-content: space-between;
    align-items: top;
    font-family: "Roboto-Black";
    /* background-color: orange; */
`;
const PriceTag = styled.div`
    display: flex;
    height: 40%;
    flex-direction: row;
    align-items: center;
    /* background-color: #000; */
`;
