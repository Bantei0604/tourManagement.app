import React, { useEffect, useState } from "react";
import TourCards from "../../shared/TourCards";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const db = getFirestore();
      const packagesCollection = collection(db, "packages");
      const packagesSnapshot = await getDocs(packagesCollection);
      const packageList = packagesSnapshot.docs.map((doc) => doc.data());
      setPackages(packageList);
    };

    fetchPackages();
  }, []);
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
