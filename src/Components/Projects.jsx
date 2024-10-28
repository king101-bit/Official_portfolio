import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <section id="projects"
      className="d-flex"
      id="projects"
      style={{ backgroundColor: "#121212"}}
    >
      <Container fluid>
        <h1 className="text-center mb-4" style={{ color: "white" }}>
          Projects
        </h1>
        <Col md={4} className="mb-4">
          <div className="d-flex flex-wrap">
            {isLoading ? (
              <>
              <Col md="auto" className="d-flex">
                <Card className="project-card" style={{ width: "25rem", margin: "0.5rem", backgroundColor: "#3e3b3b"}}>
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
                <Card className="project-card" style={{ width: "25rem", margin: "0.5rem", backgroundColor: "#3e3b3b"}}>
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
                <Card className="project-card" style={{ width: "25rem", margin: "0.5rem", backgroundColor: "#3e3b3b" }}>
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md="auto" className="d-flex">
              <Card className="project-card" style={{ width: "25rem", margin: "0.5rem",backgroundColor: "#3e3b3b" }}>
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
              <Card className="project-card" style={{ width: "25rem", margin: "0.5rem",backgroundColor: "#3e3b3b"}}>
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </Col>
              </>
            ) : (
              <>
                <Row className="justify-content-center">
                  <Col md="auto" className="d-flex">
                    <Card
                      className="project-card"
                      style={{
                        width: "25rem",
                        margin: "0.5rem",
                        backgroundColor: "#1e1e1e",
                        color: "white",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>
                          Spotsim
                        </Card.Title>
                        <Card.Text>
                          A music recommendation program that recommends based
                          on the given song URI. You can visit this project made
                          with Python and Spotify API.
                        </Card.Text>
                        <Button variant="outline-light" href="https://github.com/king101-bit/Spotsim">
                          Visit me
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card
                      className="project-card"
                      style={{
                        width: "25rem",
                        margin: "0.5rem",
                        backgroundColor: "#1e1e1e",
                        color: "white",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>
                          Stock Teller
                        </Card.Title>
                        <Card.Text>
                          This code gets the exchange rate for USD and GBP and
                          converts it to NGN using openexchangerates.org.
                        </Card.Text>
                        <Button variant="outline-light" href="https://github.com/king101-bit/Stock_teller">
                          Visit me
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card
                      className="project-card"
                      style={{
                        width: "25rem",
                        margin: "0.5rem",
                        backgroundColor: "#1e1e1e",
                        color: "white",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>
                        DAVID
                        </Card.Title>
                        <Card.Text>
                        DAVID is a tool designed to provide location and carrier information about phone numbers. This tool is useful for individuals and businesses looking to validate phone numbers and get more information about the location of the phone number's owner. 
                        </Card.Text>
                        <Button variant="outline-light" href="https://github.com/king101-bit/DAVID">
                          Visit me
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="auto" className="d-flex">
                    <Card
                      className="project-card"
                      style={{
                        width: "25rem",
                        margin: "0.5rem",
                        backgroundColor: "#1e1e1e",
                        color: "white",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>
                        Password-Gen
                        </Card.Title>
                        <Card.Text>
                        A powerful and useful password generator written in Python. This program generates secure passwords based on user preferences and checks if a password has been compromised in known data breaches. 
                        </Card.Text>
                        <Button variant="outline-light" href="https://github.com/king101-bit/Password-Gen">
                          Visit me
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card
                      className="project-card"
                      style={{
                        width: "25rem",
                        margin: "0.5rem",
                        backgroundColor: "#1e1e1e",
                        color: "white",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>
                        University-system                        </Card.Title>
                        <Card.Text>
                          Experience the future of student data management! University System, tailored for the Nigerian university model, offers a streamlined biodata program. Developers, register now to usher in a new era of efficient and insightful student record-keeping
                        </Card.Text>
                        <Button variant="outline-light" href="https://github.com/king101-bit/University_system">
                          Visit me
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </>
            )}
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Projects;
