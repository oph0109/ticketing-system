//Components import
import MainNav from "./Components/MainNav.js";
import TicketList from "./Components/TicketList.js";

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

  function deleteTicket(uuid) {
    setTickets(tickets => {
      return tickets.filter(ticket => ticket.uuid !== uuid);
    })
  }

  if (tickets === undefined) {
    return <p>No tickets found.</p>
  }

  return (
    <>
      <MainNav homePage={HOME_PAGE} />

      <TicketList tickets={tickets} deleteTicket={deleteTicket}/>
    </>
  );
}

export default App;
