import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { FaCode, FaHtml5, FaCss3Alt, FaGlobe,FaJs, FaReact, FaPython } from 'react-icons/fa';
  
const skills = [
    {name: 'React', icon: <FaReact />, level: 85},
    {name: 'HTML & CSS', icon:<><FaHtml5 /> <FaCss3Alt /> </> , level: 95},
    {name: 'Javascript', icon: <FaJs />, level: 80},
    {name: 'Python', icon: <FaPython />, level: 75},
    {name: 'C++', icon:  <FaCode/>, level: 65},
    {name: 'German', icon: <FaGlobe />, level: 65},
];

function Skillset() {
return(
    <>
<section className="vh-100 d-flex align-items-center justify-content-center">
  <Container className="mt-5">
    <h1 className="mb-4 text-center">Skillset</h1>
    <Row className="justify-content-center">
      {skills.map((skill, index) => (
        <Col md={4} className="mb-4" key={index}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <div className="mb-3" style={{ fontSize: '2rem', color: '#962411' }}>
                {skill.icon}
              </div>
              <Card.Title>{skill.name}</Card.Title>
              <ProgressBar
                now={skill.level}
                label={`${skill.level}%`}
                variant="info"
                className="mt-3"
                style={{ height: '10px' }}
              />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>
    </>
);
};

export default Skillset;