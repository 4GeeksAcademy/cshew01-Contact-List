import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const submitForm = async () => {
    const resp = await fetch(
      "https://playground.4geeks.com/contact/agendas/cshew01/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      }
    );
    const data = await resp.json();
  };

  return (
    <form className="px-3" onSubmit={submitForm}>
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
          value={contact.name}
          onChange={(ev) =>
            setContact({
              ...contact,
              name: ev.target.value,
            })
          }
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
          value={contact.email}
          onChange={(ev) =>
            setContact({
              ...contact,
              email: ev.target.value,
            })
          }
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
          placeholder="Enter Phone Number"
          value={contact.phone}
          onChange={(ev) =>
            setContact({
              ...contact,
              phone: ev.target.value,
            })
          }
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
          value={contact.address}
          onChange={(ev) =>
            setContact({
              ...contact,
              address: ev.target.value,
            })
          }
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary mx-1 col-4">SAVE</button>
        <Link className="btn btn-primary mx-1 col-4" to="/">
          Return to Contacts
        </Link>
      </div>
    </form>
  );
};

export default AddContact;
