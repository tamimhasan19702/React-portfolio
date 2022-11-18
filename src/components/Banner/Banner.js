import { Container, Row ,Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
         <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi, I am Tamim Hasan`} <span className="wrap">Web Developer</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur, voluptas laboriosam perspiciatis assumenda eaque ratione nihil </p>
                  <button onClick={() => console.log(`connect`)}>Let's Connect</button>
                </Col>
            </Row>
         </Container>
        </section>
    )
}