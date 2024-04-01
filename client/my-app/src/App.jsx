//Components import
import MainNav from "./Components/MainNav.jsx";
import TicketList from "./Components/TicketList.jsx";

//CSS import
import "./App.css";

//API import
import returnTickets from "./api/react-tickets.js";

//Hooks import
import {useState, useEffect} from "react";

const HOME_PAGE = "http://localhost:3000";

function App() {
  //OLD --- const [tickets, setTickets] = useState(ticketsFetch);
  useEffect(() => {
    getTickets();
  }, []);

  const[tickets, setTickets] = useState([]);

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
