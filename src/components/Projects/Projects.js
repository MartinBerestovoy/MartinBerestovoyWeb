import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import martinBerestovoyWeb from "../../Assets/Projects/martinBerestovoyWeb.png";
import storyTime from "../../Assets/Projects/storyTime.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={martinBerestovoyWeb}
              isBlog={false}
              title="Martin Berestovoy Web"
              description="This is my personal website. It's a simple webpage that shows my skills and projects."
              ghLink="https://github.com/MartinBerestovoy/MartinBerestovoyWeb"
              demoLink="https://martinberestovoy.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storyTime}
              isBlog={false}
              title="StoryTime"
              description="This is a webpage adapted to children with mental disabilities that allows them to create their own stories via pictograms. Then it creates the story and lets them save and listen to it whenever they want."
              ghLink="https://github.com/martinberestovoy/StoryTime"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
