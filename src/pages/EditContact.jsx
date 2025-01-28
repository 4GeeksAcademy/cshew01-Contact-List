import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";


const EditContact = () => {
  const {id} = useParams();
  const [contact, setContact] = useState({});
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    setContact(store.contacts.find((contact) => contact.id == id));
  }, [store,id]);

  const submitEdit = async () => {
    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/cshew01/contacts/${contact.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    });
    const data = await resp.json();

    dispatch({
      type: "update_contact",
      updated_contact: data
    });
    
    setContact(data);
    window.location.replace("https://studious-guacamole-x5vv9wqwprr43prg6-3000.app.github.dev/")
  }

  return (
        <form className="px-3" onSubmit={submitEdit}>
          <h1>Edit Contact</h1>
          <div className="mb-3">
            <label for="fullName" className="form-label">
              Full Name
            </label>
             <input
              type="text"
              className="form-control"
              id="fullName"
              aria-describedby="fullNameHelp"
              value={contact?.name}
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
              value={contact?.email}
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
              value={contact?.phone}
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
              value={contact?.address}
              onChange={(ev) =>
                setContact({
                  ...contact,
                  address: ev.target.value,
                })
              }
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary mx-1 col-4">Submit</button>
            <Link className="btn btn-primary mx-1 col-4" to='/'>
              Cancel
            </Link>
          </div>
        </form>
  );
};

export default EditContact;
