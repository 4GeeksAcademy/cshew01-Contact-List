import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const resp = await fetch(
      "https://playground.4geeks.com/contact/agendas/cshew01"
    );
    const data = await resp.json();
    setContacts(data.contacts);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="container m-2 p-2 d-flex justify-content-end">
        <button className="btn btn-primary">Add A New Contact</button>
      </div>
      {contacts.map((contact) => (
        <div className="container border m-2 p-2">
          <div className="row">
            <div className="col-3">
              <h1>Picture</h1>
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
