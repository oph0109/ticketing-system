import "../styles/components.css";

export default function Ticket({ticket, deleteTicket}) {
    return (
        <div id={ticket.ticketId} className="ticket">
            <p className="ticket-title">{ticket.subject}</p>
            <p className="ticket-body">{ticket.body}</p>

            <div className="ticket-lower-buttons">
                <button>Escalate</button>
                <button onClick={() => deleteTicket(ticket.ticketId)}>Delete Ticket</button>
            </div>
        </div>
    );
}