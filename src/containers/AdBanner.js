import styled from "styled-components";

const AdBanner = ({ AD }) => {
    return <Container AD={AD} />;
};

const Container = styled.div`
    width: auto;
    height: 50vh;
    background-color: ${props => props.AD.color};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.AD.img});
    cursor: pointer;
`;
export default AdBanner;
