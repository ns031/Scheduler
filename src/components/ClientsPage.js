import React, { useState } from 'react';
import ClientPopup from '../components/ClientPopup';
import '../App.css'

const ClientsPage = ({ clients, setClients }) => {
  const [isClientPopupOpen, setIsClientPopupOpen] = useState(false);

  const handleAddClient = () => {
    setIsClientPopupOpen(true);
  };

  const handleClientSave = (client) => {
    setClients((prevClients) => [...prevClients, client]);
    setIsClientPopupOpen(false);
  };

  return (
    <div>
      <h1>Clients Page</h1>
      <button onClick={handleAddClient}>Add Client</button>
      {isClientPopupOpen && <ClientPopup onSave={handleClientSave} />}
      {clients.map((client) => (
        <div key={client.id}>
          <p>Client Name: {client.name}</p>
          <p>Client Email: {client.email}</p>
          <p>Client Phone: {client.phone}</p>
          {/* Display other client details */}
        </div>
      ))}
    </div>
  );
};

export default ClientsPage;

// import React from 'react';

// const ClientsPage = ({ clients }) => {
//   return (
//     <div>
//       <h2>Clients</h2>
//       {clients.length === 0 ? (
//         <p>No clients found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Phone Number</th>
//               <th>Client Type</th>
//               <th>Billing Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client, index) => (
//               <tr key={index}>
//                 <td>{client.firstName}</td>
//                 <td>{client.lastName}</td>
//                 <td>{client.email}</td>
//                 <td>{client.phoneNumber}</td>
//                 <td>{client.clientType}</td>
//                 <td>{client.billingType}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ClientsPage;

// export default ClientsPage;

// import React from 'react';

// const ClientsPage: React.FC = () => {
  
//   return (
//     <div>
//       <h1>Hello</h1>
//         </div>
//       )
// };

// export default ClientsPage;