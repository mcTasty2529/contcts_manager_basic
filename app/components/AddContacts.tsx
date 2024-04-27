import React, { useState } from "react";

const AddContacts = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = { name, phone, address };
    props.onContactAdded(contactData);
  };
  return (
    <>
      <div className="bg-slate-300 p-2 border-2 border-slate-400 rounded-md flex flex-col justify-center items-center gap-2 text-slate-700 ">
        <p className="text-lg font-bold ">Add Contacts</p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row  justify-center items-center m-1 p-2 gap-2 rounded-md">
            <input
              className="rounded-md p-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="rounded-md p-2"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />
            <input
              className="rounded-md p-2"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
            <button className="m-2 p-2 bg-orange-500 text-white border-2 rounded-md font-bold hover:bg-white hover:border-orange-500 hover:text-orange-500">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddContacts;
