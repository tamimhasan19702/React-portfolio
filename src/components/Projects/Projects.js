import { Container, Row, Col, Nav } from "react-bootstrap";
import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';

export const Projects = () => {
    
    const projects = [
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]
    
    return (
    <section className="project" id="project">
       <Container>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur labore aut debitis sed nobis at.</p>
            <Nav>

            </Nav>
            </Col>
        </Row>
       </Container>
    </section>
    )
}