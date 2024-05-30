import React, { useState } from "react";
import "../styles/home.css";
import { Container, Row, Col, Button } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import RegisterForm from "./RegisterForm";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Meghalaya"} />
              </div>
              <h1>
                Travelling opens the door for creating{" "}
                <span className="highlight">memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores sapiente quos consequatur tempora laudantium? Magni ea
                fuga quam sunt voluptatum, nulla maxime, ullam sequi dolores
                pariatur vel, qui at fugiat!
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" autoPlay muted loop />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
        </Row>
        <SearchBar />
      </Container>
    </>
  );
};

export default Home;
