import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import logoImg from "../../../assets/logoImg.png";

export default function SideMenu() {
  return (
    <Container>
      <div className="ellipse">
        <img src={logoImg} alt="my pic" />
        <Link className="about" to="/">
          <p>About</p>
        </Link>
        <Link className="portfolio" to="/Portfolio">
          <p>Portfolio</p>
        </Link>
        <Link className="work" to="/Work">
          <p>Work Experience</p>
        </Link>
        <Link className="education" to="/Education">
          <p>Education</p>
        </Link>
        <Link className="skills" to="/Skills">
          <p>Skills</p>
        </Link>
      </div>
    </Container>
  );
}
