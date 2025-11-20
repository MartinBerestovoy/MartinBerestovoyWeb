import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Martin Berestovoy </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            I am currently studying a degree in Digital Business.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Training at the GYM
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
