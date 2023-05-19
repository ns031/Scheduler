import React from 'react';

const MeetingsPage = ({ meetings }) => {
  return (
    <div>
      <h1>Meetings Page</h1>
      {meetings.map((meeting) => (
        <div key={meeting.id}>
          <p>Client Name: {meeting.clientName}</p>
          <p>Date: {meeting.date}</p>
          <p>Time: {meeting.time}</p>
          <p>Duration: {meeting.duration}</p>
          <p>Charge: {meeting.charge}</p>
        </div>
      ))}
    </div>
  );
};

export default MeetingsPage;


// import React from 'react';

// const MeetingPage: React.FC = () => {
//   const meetings = [
//     {
//       title: 'Meeting 1',
//       date: '2023-05-20',
//       duration: '1 hour',
//       payment: '$100',
//     },
//     {
//       title: 'Meeting 2',
//       date: '2023-05-21',
//       duration: '2 hours',
//       payment: '$200',
//     },
//   ];

//   return (
//     <div>
//       <h2>Meetings</h2>
//       {meetings.map((meeting, index) => (
//         <div className="meeting" key={index}>
//           <h3>{meeting.title}</h3>
//           <p>Date: {meeting.date}</p>
//           <p>Duration: {meeting.duration}</p>
//           <p>Payment: {meeting.payment}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MeetingPage;