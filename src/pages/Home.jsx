import React, { useState } from "react";
import "../styles/home.css";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import heroVideo02 from "../assets/images/hero-video02.mp4";
import heroVideo03 from "../assets/images/hero-video03.mp4";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import RegisterForm from "./RegisterForm";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [modal, setModal] = useState(false);
  const [recipient, setRecipient] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleOpenModal = (recipient) => {
    setRecipient(recipient);
    toggleModal();
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
        <Button
          color="btn primary__btn mt-4"
          onClick={() => handleOpenModal("@mdo")}
        >
          Register
        </Button>

        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            New message to {recipient}
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Phone No:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="recipient-name"
                  value={recipient}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Number of people:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="recipient-name"
                  value={recipient}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Recipient:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  value={recipient}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Message:
                </label>
                <textarea className="form-control" id="message-text"></textarea>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button color="primary">Send message</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </>
  );
};

export default Home;
