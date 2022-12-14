import React, { useState } from "react";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { Button, Form } from "react-bootstrap";
import { BsPersonFill as PersonIcon } from "react-icons/bs";
import UserPopUp from "./UserPopUp";

const Search = ({ setFilterData, filterData, handleFilterData }) => {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="navbar w-100 py-4 d-flex flex-column align-items-center mb-4">
      <div className="d-flex w-100 justify-content-around">
        <div></div>
        <p className="fs-3 fw-bold text-white">Employee Data</p>
        <div className="position-relative">
          <PersonIcon
            onClick={() => setPopUp(!popUp)}
            className="person p-2 rounded"
          />
          {popUp && <UserPopUp />}
        </div>
      </div>
      <Form className="d-flex align-items-center">
        <Form.Control
          type="search"
          placeholder="Input employee name"
          className="search px-2 mt-3 py-1"
          value={filterData}
          onChange={(e) => setFilterData(e.target.value)}
        />
        <Button
          onClick={handleFilterData}
          className="btn d-flex align-items-center"
        >
          <p>Search</p>
          <span className="mb-1">
            <SearchIcon />
          </span>
        </Button>
      </Form>
    </div>
  );
};

export default Search;
