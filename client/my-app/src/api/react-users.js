const BASE_API_CALL = "http://localhost:8080";

export async function searchForUserByUUID(uuid) {
  const searchResult = await fetch(BASE_API_CALL + `/api/users/${uuid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  console.log(searchResult);
  return searchResult;
}
