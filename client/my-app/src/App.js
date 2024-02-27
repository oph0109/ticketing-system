//Components import
import MainNav from "./Components/MainNav.js";
import Ticket from "./Components/Ticket.js";

//CSS import
import "./App.css";

//API import
import returnTickets from "./api/react-tickets.js";

//Hooks import
import {useState} from "react";

const HOME_PAGE = "http://localhost:3000";

const ticketsFetch = await returnTickets();
console.log(ticketsFetch);

function App() {
  //console.log(ticketsFetch[0].ticketId);
  const [tickets, setTickets] = useState(ticketsFetch);

  function deleteTicket(id) {
    setTickets(tickets => {
      return tickets.filter(ticket => ticket.ticketId !== id);
    })
  }

  if (tickets === undefined) {
    return <p>No tickets found.</p>
  }

  return (
    <>
      <MainNav homePage={HOME_PAGE} />

      <div id="ticket-container">
        {tickets.map((ticket, index) => (
          <Ticket ticket={ticket} key={index} deleteTicket={deleteTicket}/>
        ))}
      </div>
    </>
  );
}

export default App;
