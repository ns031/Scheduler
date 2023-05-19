import React, { useState } from 'react';

const ClientPopup = ({ onSave }) => {
  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    clientType: '',
    billingType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prevClientInfo) => ({
      ...prevClientInfo,
      [name]: value,
    }));
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Add Client</h2>
        <form >
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={clientInfo.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={clientInfo.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={clientInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={clientInfo.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Client Type:</label>
            <select
              name="clientType"
              value={clientInfo.clientType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="adult">Adult</option>
              <option value="minor">Minor</option>
              <option value="couple">Couple</option>
            </select>
          </div>
          <div>
            <label>Billing Type:</label>
            <select
              name="billingType"
              value={clientInfo.billingType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="self-pay">Self-pay</option>
              <option value="insurance">Insurance</option>
            </select>
          </div>
          <button type="submit" onClick={onSave}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default ClientPopup;
