import React, { useState } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onChangeListener = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Col lg="12">
        <div className="search-bar">
          <Form className="d-flex alihn-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i class="ri-map-pin-line"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input type="text" placeholder="Where are you going?" onChange={onChangeListener} />
              </div>
            </FormGroup>

            <span className="search__icon" type="submit" onClick={() => onSearch(search)}>
              <i class="ri-search-eye-line"></i>
            </span>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default SearchBar;
