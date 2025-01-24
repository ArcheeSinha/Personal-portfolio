import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard"; // You can reuse ProjectCard or make a similar Card for Certificates
import PythonEssentials1 from "../assets/img/Python Essentials 1.png";
import PythonEssentials2 from "../assets/img/Python Essentials 2.png";
import DSACodechef from "../assets/img/DSA Codechef.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {

  const certificates = [
    {
      title: "Cisco: Python Essentials 1",
      imgUrl: PythonEssentials1,
    
    },
    {
      title: "Cisco: Python Essentials 2",
      imgUrl: PythonEssentials2,
    },
    {
      title: "DSA CODECHEF",
      imgUrl: DSACodechef,
    }



  ];

  return (
    <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificates</h2>
                <p>Here are the certificates I have earned for completing courses in Artificial Intelligence, Machine Learning, and more.</p>
                <Tab.Container id="certificates-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          certificates.map((certificate, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                title={certificate.title}
                                description={certificate.description}
                                imgUrl={certificate.imgUrl}
                                url={certificate.url}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More to come.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More to come.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
