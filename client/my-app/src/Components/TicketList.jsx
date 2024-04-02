//Components import
import Ticket from "./Ticket.jsx";
import "../styles/components.css";

//React import
import React, {useState, useEffect} from 'react';

//API import
import returnTickets from "../api/react-tickets.js";

export default function TicketList() {
  useEffect(() => {
    getTickets();
  }, []);

  const[tickets, setTickets] = useState();

  async function getTickets() {
    const ticketsFetch = await returnTickets();
    setTickets(ticketsFetch);
    console.log(ticketsFetch);
  }

  function deleteTicket(uuid) {
    setTickets(tickets => {
      return tickets.filter(ticket => ticket.uuid !== uuid);
    })
  }

  if (tickets === undefined) {
    return <h1>Ticket data loading...</h1>
  }

  return (
    <div id="ticket-container">
      <div className="ticket-container-header">
        <h2>
          All Tickets
        </h2>
      </div>

      {tickets.map((ticket, index) => (
        <Ticket ticket={ticket} key={index} deleteTicket={deleteTicket} />
      ))}
    </div>
  );
}
