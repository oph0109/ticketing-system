const BASE_API_CALL = "http://localhost:8080";

export default async function returnTickets() {
    const ticketResponse = await fetch(BASE_API_CALL + "/api/tickets", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    // .then((response) => {
    //     response;
    // })
    .catch((error) => {
        console.log(error);
        return {status: 502};
    })

    return ticketResponse.json();
}