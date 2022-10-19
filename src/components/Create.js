import React from "react";

const Create = () => {
  return (
    <div>
      <input
        type="text"
        className="nameinput"
        id="name-input"
        name="Name"
        placeholder="Name"
      />
      <input
        type="text"
        className="statusinput"
        id="status-input"
        name="Status Message"
        placeholder="Status Message"
      />
      <input
        type="email"
        className="emailinput"
        id="email-input"
        name="email"
        placeholder="Email"
      />
      <input
        type="number"
        className="ageinput"
        id="age-input"
        name="age"
        placeholder="Age"
      />
      <input
        type="text"
        className="publicinput"
        id="public-input"
        name="ispublic"
        placeholder="isPublic"
      />

      <button className="create-btn" id="user-create" type="submit">
        Create
      </button>
    </div>
  );
};

export default Create;
