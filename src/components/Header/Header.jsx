import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { db, auth } from "../../firebaseConfig";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setProfilePic(currentUser.photoURL);
      } else {
        setProfilePic(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogle = async () => {
    if (user) {
      await signOut(auth);
      navigate("/home");
      setProfilePic(null);
    } else {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/home");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/home");
    setProfilePic(null);
  };

  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
              <div className="logo">
                <img style={{ height: "100px" }} src={logo} alt="Logo" />
              </div>
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink to={item.path} className={(navClass) => (navClass.isActive ? "active__link" : "")}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4">
                  {!user ? (
                    <Button className="btn primary__btn" onClick={handleGoogle}>
                      Login
                    </Button>
                  ) : (
                    <>
                      <Button className="btn primary__btn" onClick={() => navigate("/bookingList")}>
                        Your Bookings{" "}
                      </Button>
                      <Button className="btn primary__btn" onClick={handleLogout}>
                        Sign Out
                      </Button>
                      {profilePic && (
                        <img
                          src={profilePic}
                          alt="Profile"
                          style={{
                            height: "40px",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </>
                  )}
                </div>
                <span className="mobile__menu">
                  <i className="ri-menu-5-fill">Meghalaya Tours</i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
