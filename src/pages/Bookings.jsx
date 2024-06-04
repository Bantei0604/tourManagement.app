// src/components/BookingForm.js
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";
import { auth } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../styles/home.css";

const BookingForm = ({ isOpen, toggle }) => {
  const [name, setName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = auth.currentUser ? auth.currentUser.uid : null;
    const db = getFirestore();
    const bookingsCollection = collection(db, "bookings");
    const booking = {
      userId,
      name,
      numberOfPeople,
      phone,
      startDate,
      notes,
      isActive: true,
    };

    try {
      const docRef = await addDoc(bookingsCollection, booking);
      console.log("Booking added with ID: ", docRef.id);
    } catch (error) {
      console.log("Error handling booking", error);
    }
    toggle();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="booking-modal custom-width"
    >
      <ModalHeader toggle={toggle}>Book a Tour</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="number">Number of people</Label>
                <Input
                  type="number"
                  id="number"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="start-date">Start Date</Label>
                <Input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <FormGroup>
              <Label for="notes">Additional Notes</Label>
              <Input
                type="textarea"
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </FormGroup>
          </Row>
          <Button type="submit" color="primary" className="mt-3">
            Book Now
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default BookingForm;
