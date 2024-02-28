const BASE_API_CALL = "http://10.0.0.151:8080";

export async function searchForUserByUUID(uuid) {
  console.log("uuid: " + uuid);

  const searchResult = await fetch(BASE_API_CALL + `/api/users/${uuid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  console.log("result: ");
  return searchResult;
}

export default function() {
  return 0;
}