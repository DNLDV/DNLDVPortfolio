import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Display a static certificate file from the project (PDF or image)
// Make sure the file exists at this path, or update the path as needed.
import certificatePdf from "../../Assets/certificate.pdf";
// import certificateImg from "../Assets/certificate.png"; // Uncomment if using image

function CertificateViewer() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ marginBottom: "30px", textAlign: "center" }}>
      {/* For PDF certificate */}
      <Document file={certificatePdf} className="d-flex justify-content-center">
        <Page pageNumber={1} scale={width > 786 ? 2 : 1} />
      </Document>
      {/* For image certificate, use below instead and comment out the PDF block above */}
      {/* <img src={certificateImg} alt="Certificate" style={{ maxWidth: "80%", maxHeight: "500px", margin: "0 auto" }} /> */}
      <p style={{ color: "#888", fontSize: "0.95em", marginTop: 10 }}>
        This is a static certificate preview. To change, replace <code>src/Assets/certificate.pdf</code>.
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
          <strong className="purple">Certificates</strong>
        </h1>
        <CertificateViewer />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
