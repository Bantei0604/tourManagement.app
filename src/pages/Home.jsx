import React, { useState } from "react";
import "../styles/home.css";
import { Container, Row, Col, Button } from "reactstrap";
import heroVideo02 from "../assets/images/hero-video02.mp4";
import heroVideo03 from "../assets/images/hero-video03.mp4";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import LoginForm from "./Login";
import Packages from "../components/Packages/Packages";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleLoginModal = () => setIsLoginOpen(!isLoginOpen);
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
              <video src={heroVideo} alt="" autoPlay muted loop />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
              <video src={heroVideo03} alt="" autoPlay muted loop />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <video src={heroVideo02} alt="" autoPlay muted loop />
            </div>
          </Col>
        </Row>
        <SearchBar />
        <Button className="btn primary__btn mt-4" onClick={toggleLoginModal}>
          Start Booking
        </Button>
        <LoginForm isOpen={isLoginOpen} toggle={toggleLoginModal} />
      </Container>
      {/* Section for packages  */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Packages"} />
              <h2 className="featured__tour-title">Our Packages</h2>
            </Col>
            <Packages />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
