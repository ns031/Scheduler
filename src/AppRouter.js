import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CalendarPage from './components/CalendarPage';
import ClientsPage from './components/ClientsPage';
import MeetingsPage from './components/MeetingsPage';
import Nav from './components/Nav';
import './App.css'


const AppRouter: React.FC = () => {
  // eslint-disable-next-line
  const [clients, setClients] = useState([]); 
  // eslint-disable-next-line
  const [meetings, setMeetings] = useState([]);

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/clients" render={() => <ClientsPage clients={clients} />} />
        <Route path="/meetings" render={() => <MeetingsPage meetings={meetings} />} />
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;