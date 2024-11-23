import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/ProjectsSection.css";
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
    <section
      id="projects"
      className="projects-section"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Container fluid>
        <h1 className="text-center mb-4" style={{ color: "black" }}>
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
                      backgroundColor: "#f7f9fc",
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
                      <Button
                        variant="link"
                        className="placeholder col-6"
                      ></Button>
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            ) : (
              <Row className="justify-content-center g-2">
                {projectData.map((project, index) => (
                  <Col
                    key={index}
                    xs={12}
                    md={6}
                    lg={4}
                    className="d-flex mb-4"
                  >
                    <Card
                      className="project-card"
                      style={{
                        width: "100%",
                        backgroundColor: "#1f1f1f",
                        color: "white",
                        borderRadius: "16px",
                        boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.3)",
                        overflow: "hidden",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        position: "relative",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow =
                          "0px 8px 24px rgba(0, 0, 0, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0px 6px 18px rgba(0, 0, 0, 0.3)";
                      }}
                    >
                      <Card.Body style={{ padding: "1.5rem" }}>
                        <Card.Title
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            marginBottom: "1rem",
                            color: "#e9e9e9",
                          }}
                        >
                          {project.title}
                        </Card.Title>
                        <Card.Text
                          style={{
                            fontSize: "1rem",
                            lineHeight: "1.6",
                            color: "#bdbdbd",
                          }}
                        >
                          {project.description}
                        </Card.Text>
                        <div
                          style={{ marginTop: "1rem", marginBottom: "1.5rem" }}
                        >
                          <small
                            style={{
                              display: "block",
                              color: "#a0a0a0",
                              marginBottom: "0.3rem",
                            }}
                          >
                            ⭐ Stars: {project.stars}
                          </small>
                          <small style={{ display: "block", color: "#a0a0a0" }}>
                            ⏰ Last Updated: {project.lastUpdated}
                          </small>
                        </div>
                        <Button
                          variant="outline-light"
                          href={project.link}
                          style={{
                            borderRadius: "30px",
                            padding: "0.75rem 1.5rem",
                            fontWeight: "bold",
                            boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.3)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f5f5f5";
                            e.currentTarget.style.color = "#1f1f1f";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = "white";
                          }}
                        >
                          Visit Me
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
