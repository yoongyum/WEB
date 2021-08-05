import styled from 'styled-components'
import ad from '../images/ad/ad1.png'

const AdBanner=()=>{
        return (
                <Container>

                </Container>
        )

}

const Container = styled.div`
        margin : 2vh 0 2vh 0;
        width: 100vw;
        height: 50vh;
        background-color: #3682b0;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${ad});
        cursor: pointer;
`
export default AdBanner;