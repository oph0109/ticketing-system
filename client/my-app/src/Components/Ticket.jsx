import "../styles/components.css";
import trashIcon from "../images/trash_icon.png"

export default function Ticket({ticket, deleteTicket}) {
    return (
        <div id={ticket.ticketId} className="ticket">
            <p className="ticket-title">{ticket.subject}</p>
            <p className="ticket-body">{ticket.body}</p>

            <div className="ticket-lower-buttons">
                <button>Escalate</button>
                {/* <button onClick={() => deleteTicket(ticket.uuid)}>Delete Ticket</button> */}
                <img src={trashIcon} alt="trash" style={{maxWidth: "20px"}} onClick={() => deleteTicket(ticket.uuid)}></img>
            </div>
        </div>
    );
}