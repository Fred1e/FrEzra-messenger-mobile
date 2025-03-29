import React from "react";
import "./Contacts.css";

const contacts = [
  { id: 1, name: "John Doe", phone: "+1234567890" },
  { id: 2, name: "Jane Smith", phone: "+9876543210" },
];

const Contacts = () => {
  return (
    <div className="contacts-list">
      <h3>Select a Contact</h3>
      {contacts.map((contact) => (
        <div key={contact.id} className="contact">
          <p>{contact.name}</p>
          <span>{contact.phone}</span>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
