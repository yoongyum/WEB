import { Fragment } from "react"
import { Carousel } from 'react-bootstrap'
import Gray from '../images/사진.PNG'
import Gray2 from '../images/사진2.PNG'
import Gray3 from '../images/사진3.PNG'

const Banner=()=>{
    return(
        <Fragment>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Gray} height="800vh"

                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Gray2} height="800vh"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Gray3} height="800vh"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Fragment>
    )
}

export default Banner;