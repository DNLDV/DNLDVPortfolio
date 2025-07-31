import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daniel De Vega </span>
            from <span className="purple"> Malolos City, Phillipines.</span>
            <br />
            I am currently student at Bulacan State University, taking up
            Bachelor of Science in Information Technology.
            <br />
            I have completed Salesforce Admin and Salesforce Developer
            training, and I hold certificates in both Salesforce Admin and
            Salesforce Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."{" "}
          </p>
          <footer className="blockquote-footer">Jeremiah 29:11 NIV </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
