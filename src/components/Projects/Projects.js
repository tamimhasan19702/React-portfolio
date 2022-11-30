import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const Projects = [
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
            <Col size={12}>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animated__animated animate__bounce" : ""}>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur labore aut debitis sed nobis at.</p>
            </div>
            }
            </TrackVisibility>
            
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

             <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
             </Nav.Item>
             
             <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
             </Nav.Item>
             
             <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
             </Nav.Item>
            
            </Nav>

             <Tab.Content>
               <Tab.Pane eventKey="first">
               <Row>
               {
                Projects.map((tab,index) => {
                    return (
                       <ProjectCard
                       key={index}
                       {...tab}
                       /> 
                    )
                })
               } 
               </Row> 
               </Tab.Pane>
               <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>    
               <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>    
             </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
       </Container>
       <img src={colorSharp2} alt="colorSharp2" className="background-image-right"/>
    </section>

    )
}