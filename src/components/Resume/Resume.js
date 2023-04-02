import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "../Home/Home2"
import Particle from "../Parti";
import Resumecontent from "./ResumeContent";


function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
       
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Sureveyor(Non-it)"
              date="Dec 2019 - apr 2022"
              content={[
                "Doing Survey work in Highway department .",
              ]}
            />
            <Resumecontent
              title="lidar analyst(Non-it)"
              date="june 2022 - mar 2023"
              content={[
                "perform classification, feature extraction and mapping from processed LIDAR data.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Certified MERN stack developer"
              content={[
                "i complete mern stack development course in guvi organisation ",
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.E in CivilEngineering [Mailam engineering college,mailam] "
              date="2019 passed out"
              content={[`CGPA: 7.3 `]}
            />
            <Resumecontent
              title="Diploma civil [Elumalai Polytechnic,villupuram]"
              date="2014-2016"
              content={["Precentage: 71%"]}
            />
            <Resumecontent
              title="12th [Government Higher Sec.school,villupram]"
              date="2012-2014"
              content={["Precentage: 60%"]}
            />
            <Resumecontent
              title="10th  [Government Higher Sec.school.villupuram] "
              date="2002 - 2012"
              content={["Precentage: 60%"]}
            />
            
          </Col>
        </Row>
        <Home2 />
      </Container>
    </Container>
  );
}

export default Resume;