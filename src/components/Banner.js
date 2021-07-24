import { Fragment } from "react"
import { Carousel } from 'react-bootstrap'
import Gray from '../images/회색.png'
import Gray2 from '../images/회색2.png'
import Gray3 from '../images/회색3.png'

const Banner=()=>{
    return(
        <Fragment>
                <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Gray} height="700px"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Gray2} height="700px"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Gray3} height="700px"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Fragment>
    )
}

export default Banner;