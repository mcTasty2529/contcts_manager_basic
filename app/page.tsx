"use client";
import React, { useState } from "react";
import Contacts from "./components/Contacts";
import AddContacts from "./components/AddContacts";

const Page = () => {
  const getContacts = JSON.parse(localStorage.getItem("contactlist"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    setContacts([contactData, ...contacts]);
    localStorage.setItem(
      "contactlist",
      JSON.stringify([contactData, ...contacts])
    );
  };

  const handleRemoveCOntacts = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center m-2 gap-2">
        <p className="text-2xl font-bold">CONTACTS MANAGER</p>
        <div>
          <AddContacts onContactAdded={addContactData} />
        </div>
        {contacts.map((contact, index) => (
          <Contacts data={contact} key={index} />
        ))}
        <button
          className="m-2 p-2 bg-red-600 text-white border-2 rounded-md font-bold hover:bg-white hover:border-red-600 hover:text-red-600"
          onClick={handleRemoveCOntacts}
        >
          Remove All Contacts
        </button>
      </div>
    </>
  );
};

export default Page;
