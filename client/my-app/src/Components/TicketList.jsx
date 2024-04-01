import Ticket from "./Ticket.jsx";
import "../styles/components.css";

export default function TicketList({ tickets, deleteTicket }) {
  return (
    <div id="ticket-container">
      {tickets.map((ticket, index) => (
        <Ticket ticket={ticket} key={index} deleteTicket={deleteTicket} />
      ))}
    </div>
  );
}
