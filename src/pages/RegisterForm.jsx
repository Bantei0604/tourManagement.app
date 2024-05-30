import React from "react";
import "./register-form.css";

const RegisterForm = () => {
  return (
    <>
      <div className="booking-form">
        <form>
          <div className="form-group">
            <span className="form-label">Your Destination</span>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your destination "
            />
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <span className="form-label">Check In</span>
                <input className="form-control" type="date" required />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <span className="form-label">Check out</span>
                <input className="form-control" type="date" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <span className="form-label">Rooms</span>
                <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <span className="form-label">Adults</span>
                <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <span className="form-label">Children</span>
                <select className="form-control">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
          </div>
          <div className="form-btn">
            <button className="submit-btn">Check availability</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
