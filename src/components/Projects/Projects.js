import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';
import colorSharp2 from '../../assets/img/color-sharp2.png';

export const Projects = () => {
    
    const Tabs = [
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
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">

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
                Tabs.map((tab,index) => {
                    return (
                       <ProjectCard
                       key={index}
                       {...Tabs}
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