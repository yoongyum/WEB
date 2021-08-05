import styled from 'styled-components'
import ad from '../images/ad/ad1.png'

const AdBanner=()=>{
        return (
                <Container />
        )

}

const Container = styled.div`
        width: 100vw;
        height: 55vh;
        background-color: #3682b0;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${ad});
        cursor: pointer;
`
export default AdBanner;