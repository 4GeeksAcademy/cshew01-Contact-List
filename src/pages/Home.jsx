import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [contacts, setContacts] = useState([]);

  // checks for the API URL.  If it doesnt exist it will throw an error and create one.
  // If it does exist it will read the data from the API
  const getContacts = async () => {
    const resp = await fetch(
      "https://playground.4geeks.com/contact/agendas/cshew01"
    );
    if (!resp.ok) {
      throw Error("User doesn't exist");
      fetch("https://playground.4geeks.com/contact/agendas/cshew01", {
        method: "POST"
      });
    }
    const data = await resp.json();
    setContacts(data.contacts);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="container m-2 p-2 d-flex justify-content-end">
        <Link className="btn btn-primary" to="/AddContact">Add A New Contact</Link>
      </div>
      {contacts.map((contact) => (
        <div className="container border m-2 p-2">
          <div className="row">
            <div className="col-3 my-auto">
              <img src="https://randomuser.me/api/portraits/men/86.jpg" id="large_img" className="rounded-circle"/>
            </div>

            <div className="col-7">
              <h1>{contact.name}</h1>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-location-dot"></i>
                <h3>{contact.address}</h3>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-phone-flip"></i>
                <h3>{contact.phone}</h3>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-envelope"></i>
                <h3>{contact.email}</h3>
              </div>
            </div>

            <div className="col-2 d-flex justify-content-end">
              <i className="fa-solid fa-pencil"></i>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
