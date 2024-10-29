import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);

  // List of your projects on GitHub
  const projects = [
    {
      name: "Spotsim",
      owner: "king101-bit",
      link: "https://github.com/king101-bit/Spotsim",
    },
    {
      name: "Stock Teller",
      owner: "king101-bit",
      link: "https://github.com/king101-bit/Stock_teller",
    },
    {
      name: "DAVID",
      owner: "king101-bit",
      link: "https://github.com/king101-bit/DAVID",
    },
    {
      name: "Password-Gen",
      owner: "king101-bit",
      link: "https://github.com/king101-bit/Password-Gen",
    },
    {
      name: "University-system",
      owner: "king101-bit",
      link: "https://github.com/king101-bit/University_system",
    },
  ];

  useEffect(() => {
    const fetchProjectData = async () => {
      const data = await Promise.all(
        projects.map(async (project) => {
          const response = await fetch(
            `https://api.github.com/repos/${project.owner}/${project.name}`
          );
          const repoData = await response.json();
          return {
            title: project.name,
            description: repoData.description || "No description available.",
            link: project.link,
            stars: repoData.stargazers_count,
            lastUpdated: new Date(repoData.updated_at).toLocaleDateString(),
          };
        })
      );
      setProjectData(data);
      setIsLoading(false);
    };

    fetchProjectData();
  }, []);

  return (
    <section id="projects" className="d-flex" style={{ backgroundColor: "#121212" }}>
      <Container fluid>
        <h1 className="text-center mb-4" style={{ color: "white" }}>
          Projects
        </h1>
        <Col xs={12} className="mb-4">
          <div className="d-flex flex-wrap justify-content-center">
            {isLoading ? (
              // Loading state with placeholders
              <Row className="justify-content-center">
                {[...Array(6)].map((_, index) => (
                  <Card
                    key={index}
                    className="project-card"
                    style={{
                      width: "18rem",
                      margin: "0.5rem",
                      backgroundColor: "#3e3b3b",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <span className="placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </span>
                      </Card.Title>
                      <Card.Text>
                        <span className="placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                        </span>
                      </Card.Text>
                      <Button variant="link" className="placeholder col-6"></Button>
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            ) : (
              <Row className="justify-content-center">
                {projectData.map((project, index) => (
                  <Col key={index} xs={12} md={6} lg={4} className="d-flex mb-4">
                    <Card
                      className="project-card"
                      style={{
                        width: "100%",
                        backgroundColor: "#1e1e1e",
                        color: "white",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <div>
                          <small>Stars: {project.stars}</small><br />
                          <small>Last Updated: {project.lastUpdated}</small><br />
                        </div>
                        <Button variant="outline-light" href={project.link}>
                          Visit me
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Projects;
