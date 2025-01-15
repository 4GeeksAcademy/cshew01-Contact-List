import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [contacts, setContacts] = useState([]);
  const [removeId, setRemoveId] = useState(null);

  // checks for the API URL.  If it doesnt exist it will throw an error and create one.
  // If it does exist it will read the data from the API
  const getContacts = async () => {
    try {
      const resp = await fetch(
        "https://playground.4geeks.com/contact/agendas/cshew01"
      );
      const data = await resp.json();
      setContacts(data.contacts);
    } catch (e) {
      fetch("https://playground.4geeks.com/contact/agendas/cshew01", {
        method: "POST",
      });
    }
  };

  //Deletes Contacts
  const removeContact = (id) => {
    fetch(
      `https://playground.4geeks.com/contact/agendas/cshew01/contacts/${id}`,
      {
        method: "DELETE",
      }
    ).then((resp) => {
      if (!resp.ok) {
        throw new Error("Failed to delete");
      }
      setContacts(contacts.filter((contact) => contact.id !== id));
      setRemoveId(null);
    });
  };

  //Edit Contacts
  const editContact = async (id) => {
    //open a new page to edit contact
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="container m-2 p-2 d-flex justify-content-end">
        <Link className="btn btn-primary" to="/AddContact">
          Add A New Contact
        </Link>
      </div>
      {contacts.map((contact) => (
        <div className="container border m-2 p-2">
          <div className="row">
            <div className="col-3 my-auto">
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                id="large_img"
                className="rounded-circle"
              />
            </div>

            <div className="col-7">
              <h1>{contact.name}</h1>
              <div className="d-flex align-items-baseline text-secondary mb-2 mt-3">
                <i className="fa-solid fa-location-dot"></i>
                <h5>{contact.address}</h5>
              </div>
              <div className="d-flex align-items-baseline text-secondary">
                <i className="fa-solid fa-phone-flip"></i>
                <p>{contact.phone}</p>
              </div>
              <div className="d-flex align-items-baseline text-secondary">
                <i className="fa-solid fa-envelope"></i>
                <p>{contact.email}</p>
              </div>
            </div>

            <div className="col-2 d-flex justify-content-end">
              <i
                className="fa-solid fa-pencil"
                style={{ cursor: "pointer" }}
                onClick={() => editContact(contact.id)}
              ></i>
              <i
                className="fa-solid fa-trash"
                style={{ cursor: "pointer" }}
                onClick={() => setRemoveId(true)}
              ></i>
            </div>
          </div>
        </div>
      ))}
      {/* modal for the delete icon */}
      {removeId && (
        <div class="modal show d-block" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{removeId} Delete Contact</h5>
                <button
                  type="button"
                  class="btn-close"
                  onClick={() => setRemoveId(null)}
                ></button>
              </div>
              <div class="modal-body">
                <p>Are you sure you want to delete this contact?</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => setRemoveId(null)}
                >
                  No
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => removeContact(removeId)}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
