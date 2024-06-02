import React from "react";
import TourCards from "../../shared/TourCards";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
const Packages = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4 " key={tour.id}>
          <TourCards tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default Packages;
