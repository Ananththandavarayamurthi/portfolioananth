import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profile1.svg";
<<<<<<< HEAD
import Particle from "../Parti";
=======

>>>>>>> cce08be913f4880a2426e61ff0083fabfeb627a4
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
<<<<<<< HEAD
        <Particle /> 
=======
        
>>>>>>> cce08be913f4880a2426e61ff0083fabfeb627a4
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANANTH</strong>
                <h3>skills with</h3>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            
            <Col md={5} className="myAvtar" style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
            
          </Row>
        </Container>
        <Home2 />
      </Container>
      
    </section>
  );
}

export default Home;
