import { Tab } from "bootstrap";
import { Container, Row,Nav  } from "react-bootstrap";
import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';

export const Repos = () => {
    
    const  projects = [
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg2,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Developement",
            imgUrl: projImg3,
        },
    ];

    return(
        <section className="project" id="project">
             <Container>
                <Row>
                    <col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sint!</p>

                    <Nav variant="pills" defaultActiveKey={"/home"}>
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
                                projects.map((project, index) => {
                                    return(
                                        <p>{project.title}</p>
                                    )
                                })
                            }
                           </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </col>
                </Row>
             </Container>
        </section>
    )
} 