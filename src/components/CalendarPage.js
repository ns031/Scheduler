import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MeetingPopup from '../components/MeetingPopup';
import '../App.css'

const CalendarPage = () => {
  const [isMeetingPopupOpen, setIsMeetingPopupOpen] = useState(false);
  // eslint-disable-next-line
  const [meetings, setMeetings] = useState([]);

  const handleDateClick = () => {
    setIsMeetingPopupOpen(true);
  };

  const handleMeetingSave = (meeting) => {
    setMeetings((prevMeetings) => [...prevMeetings, meeting]);
    setIsMeetingPopupOpen(false);
  };

  return (
    <div className="cal">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'today prev,next',
          center: 'dayGridMonth,timeGridWeek,timeGridDay',
          end: 'title',
        }}
        height={'90vh'}
        dateClick={handleDateClick}
      />
      {isMeetingPopupOpen && (
        <MeetingPopup onSave={handleMeetingSave} />
      )}
    </div>
  );
};

export default CalendarPage;

// import React, { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import MeetingPopup from '../components/MeetingPopup';
// import ClientPopup from '../components/ClientPopup';
// import MeetingPage from './MeetingsPage';
// import ClientPage from './ClientsPage';
// import '../App.css';

// const CalendarPage = () => {
//   const [showMeetingPopup, setShowMeetingPopup] = useState(false);
//   const [showClientPopup, setShowClientPopup] = useState(false);
//   const [meetingDetails, setMeetingDetails] = useState({});
//   const [meetings, setMeetings] = useState([]);
//   const [clients, setClients] = useState([]);

//   const handleDateClick = (arg) => {
//     const { date } = arg;
//     setMeetingDetails({ date: date.toISOString() });
//     setShowMeetingPopup(true);
//   };

//   const handleAddClientClick = () => {
//     setShowClientPopup(true);
//   };

//   const handleMeetingSave = (meeting) => {
//     setMeetings([...meetings, meeting]);
//     setShowMeetingPopup(false);
//   };

//   const handleClientSave = (client) => {
//     setClients([...clients, client]);
//     setShowClientPopup(false);
//   };

//   return (
//     <div className="cal">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           start: 'today prev,next',
//           center: 'dayGridMonth,timeGridWeek,timeGridDay',
//           end: 'title',
//         }}
//         height={'90vh'}
//         dateClick={handleDateClick}
//       />

//       {showMeetingPopup && (
//         <MeetingPopup
//           meetingDetails={meetingDetails}
//           onSave={handleMeetingSave}
//         />
//       )}

//       {showClientPopup && (
//         <ClientPopup
//           onSave={handleClientSave}
//         />
//       )}

//       <button onClick={handleAddClientClick}>Add Client</button>

//       <MeetingPage meetings={meetings} />
//       <ClientPage clients={clients} />
//     </div>
//   );
// };

// export default CalendarPage;

// import React from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import '../App.css';

// const CalendarPage = () => {

//   return (
//     <div className='cal' >
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           start: 'today prev,next',
//           center: 'dayGridMonth,timeGridWeek,timeGridDay',
//           end: 'title',
//         }}
//         height={'90vh'}
//       />
//     </div>
//   );
// };

// export default CalendarPage;