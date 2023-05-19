import React, { useState } from 'react';
import ClientPopup from './ClientPopup';
import '../App.css'

const MeetingPopup = ({ onSave }) => {
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);

  const handleAddClient = () => {
    setIsAddClientOpen(true);
  }
  const [meetingDetails, setMeetingDetails] = useState({
    clientName: '',
    date: '',
    time: '',
    duration: '',
    charge: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(meetingDetails);
  };

  return (
    <div className="meeting-popup">
      <h2>Meeting Details</h2>
      <input
        type="text"
        name="clientName"
        placeholder="Client Name"
        value={meetingDetails.clientName}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        value={meetingDetails.date}
        onChange={handleInputChange}
      />
      <input
        type="time"
        name="time"
        value={meetingDetails.time}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration"
        value={meetingDetails.duration}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="charge"
        placeholder="Charge"
        value={meetingDetails.charge}
        onChange={handleInputChange}
      />
      <button onClick={handleAddClient}>Add Client</button>
      <button onClick={handleSave}>Save</button>
      {isAddClientOpen && <ClientPopup />}
    </div>
  );
};

export default MeetingPopup;

// import React, { useState } from 'react';

// const MeetingPopup = ({ meetingDetails, onSave }) => {
//   const [clientName, setClientName] = useState('');
//   const [time, setTime] = useState('');
//   const [duration, setDuration] = useState('');
//   const [charge, setCharge] = useState('');

//   const handleSave = () => {
//     const meeting = {
//       clientName,
//       date: meetingDetails.date,
//       time,
//       duration,
//       charge,
//     };
//     onSave(meeting);
//   };

//   return (
//     <div className="popup">
//       <h2>Meeting Details</h2>
//       <label>
//         Client Name:
//         <input
//           type="text"
//           value={clientName}
//           onChange={(e) => setClientName(e.target.value)}
//         />
//       </label>
//       <label>
//         Time:
//         <input
//           type="text"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//       </label>
//       <label>
//         Duration:
//         <input
//           type="text"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//         />
//       </label>
//       <label>
//         Charge:
//         <input
//           type="text"
//           value={charge}
//           onChange={(e) => setCharge(e.target.value)}
//         />
//       </label>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default MeetingPopup;
