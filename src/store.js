export const initialStore = () => {
  return {
    contacts: [],
  };
};

export default function storeReducer(store, action = {}) {
  if (action.type === "load_contacts") {
    const { contacts } = action;

    return {
      ...store,
      contacts: contacts
    }
  }

 
  if (action.type === "update_contact") {
    // Get the updated contact
    const { updated_contact } = action;

    // Find the index of the old contact
    const contact_idx = store.contacts.findIndex(
      (contact) => contact.id === updated_contact.id
    );

    // Replace the old contact with new.
    let updated_contacts = store.contacts;
    updated_contacts.splice(contact_idx, 1, updated_contact);

    // Return the updated store.
    return {
      ...store,
      contacts: updated_contacts,
    }
  }

  
  if (action.type === "remove_contact") {
    // Get the contact to be removed
    const { remove_contact } = action;

    // Find the index of the contact
    const contact_idx = store.contacts.findIndex(
      (contact) => contact.id === remove_contact
    );

    // Return the updated store.
    return {
      ...store,
      contacts: store.contacts.toSpliced(contact_idx, 1),
    }
  }  
}
