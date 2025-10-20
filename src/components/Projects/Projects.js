import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import martinBerestovoyWeb from "../../Assets/Projects/martinBerestovoyWeb.png";
import storyTime from "../../Assets/Projects/storyTime.png";
import automa from "../../Assets/Projects/automa.png";

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
              imgPath={automa}
              isBlog={false}
              title="Automa"
              description="Automate your business effortlessly with Automa — the no-code platform that connects your apps, executes repetitive tasks, and keeps your operations running while you sleep. Designed for entrepreneurs and teams who value time and efficiency, Automa streamlines workflows, boosts productivity, and ensures every process runs seamlessly in the background. Focus on growth while we handle the routine. Turn automation into your competitive edge today!"
              ghLink="https://automa-ag.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storyTime}
              isBlog={false}
              title="StoryTime"
              description="Empower children with mental disabilities to express their creativity through our inclusive platform, where they can craft personalized stories using pictograms and AI. Designed for accessibility and engagement, it allows kids to save and listen to their stories anytime, fostering self-expression, confidence, and joy in a safe, supportive space. Transform storytelling into a tool for growth and imagination today!"
              ghLink="https://github.com/martinberestovoy/StoryTime"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={martinBerestovoyWeb}
              isBlog={false}
              title="Martin Berestovoy Web"
              description="Welcome to my personal website—a clean and straightforward space showcasing my skills, projects, and what I bring to the table."
              ghLink="https://github.com/MartinBerestovoy/MartinBerestovoyWeb"
              demoLink="https://martinberestovoy.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
