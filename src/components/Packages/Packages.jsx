import React, { useEffect, useState } from "react";
import TourCards from "../../shared/TourCards";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const Packages = ({ toggleLoginModal, search }) => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const db = getFirestore();
      const packagesCollection = collection(db, "packages");
      const startAtSearch = where("city", ">=", search);
      const endAtSearch = where("city", "<", search + "\uf8ff");
      const q = query(packagesCollection, startAtSearch, endAtSearch);
      const packagesSnapshot = await getDocs(q);
      const packageList = packagesSnapshot.docs.map((doc) => doc.data());
      console.log("packageList", packageList);
      setPackages(packageList);
    };

    fetchPackages();
  }, [search]);
  return (
    <>
      {packages?.map((tour) => (
        <Col lg="3" className="mb-4 " key={tour.id}>
          <TourCards tour={tour} toggleLoginModal={toggleLoginModal} />
        </Col>
      ))}
    </>
  );
};

export default Packages;
