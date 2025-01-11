import React, { useEffect, useState } from "react";

const AddContact = () => {
  return (
    <form className="px-3">
      <h1>Add A New Contact</h1>
      <div className="mb-3">
        <label for="fullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          aria-describedby="fullNameHelp"
          placeholder="Enter Full Name"
        />
      </div>
      <div className="mb-3">
        <label for="emailAddress" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailAddress"
          aria-describedby="emailHelp"
          placeholder="Enter Email"
        />
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          aria-describedby="phoneHelp"
          pattern="[0-9]{3}.[0-9]{3}.[0-9]{4}"
          placeholder="Enter Phone Number"
        />
      </div>
      <div className="mb-3">
        <label for="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          aria-describedby="addressHelp"
          placeholder="Enter Address"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary mx-1 col-4">SAVE</button>
        <button className="btn btn-primary mx-1 col-4">Return to contacts</button>
      </div>
    </form>
  );
};

export default AddContact;
