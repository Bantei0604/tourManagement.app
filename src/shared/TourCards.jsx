import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";
import { Button } from "reactstrap";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { db, auth } from "../firebaseConfig";

const TourCards = ({ tour, toggleLoginModal }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };
  const { id, title, city, photo, price, featured, avgRating, reviews } = tour;
  return (
    <div className="tour__card">
      <Card>
        <div className="tour-img">
          <img src={photo} alt="tour-img" />
          <span>Featured</span>
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i>
              {avgRating} <span>({reviews.length})</span>
            </span>
          </div>
          <h5 className="tour__title">
            {" "}
            <Link to={`/tours/${id}`}>{title}</Link>{" "}
          </h5>
          <div className="card__bottom d-flex align-items-center justify-content-between  mt-3">
            <h5>
              &#8377; {price} <span>/per person</span>
            </h5>
            {user ? (
              <Button className="btn primary__btn" onClick={() => toggleLoginModal(id, title)}>
                Book Now
              </Button>
            ) : (
              <Button color="success" onClick={handleGoogle}>
                Login To Book
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCards;
