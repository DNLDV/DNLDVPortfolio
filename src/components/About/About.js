import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
// Display a static certificate image from the project
import certificateImg from "../../Assets/certificate.png";

function CertificateViewer() {
  return (
    <div style={{ marginBottom: "30px", textAlign: "center" }}>
      <img
        src={certificateImg}
        alt="Certificate"
        style={{ maxWidth: "100%", maxHeight: "700px", margin: "0 auto", boxShadow: "0 4px 24px rgba(0,0,0,0.15)", borderRadius: "12px", background: "transparent" }}
      />
      <p style={{ color: "#888", fontSize: "0.95em", marginTop: 10 }}>
        This is a static certificate preview.<br/>
        For best results, use a PNG with transparent background and crop as needed.
      </p>
    </div>
  );
}

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Certificate</strong> I Achievement

        </h1>
        <CertificateViewer />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
