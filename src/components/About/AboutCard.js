import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ananth </span>
            from <span className="purple"> Cuddalore, India.</span>
            <br />I did B.E civil Engineering ,currently i am looking For a job . I'm{" "}
            <b className="purple"> Web developer</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Web development, Testing and Database.
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight />
              Learning New Things
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "NEVER STOP LEARNING AND NEVER GIVE UP!"{" "}
          </p><br/>
          <footer className="blockquote-footer">Ananth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
