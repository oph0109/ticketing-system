const BASE_API_CALL = process.env.REACT_APP_BASE_API_CALL;
console.log(BASE_API_CALL);

async function searchForUserByUUID(uuid) {
  console.log("uuid: " + uuid);
  console.log(BASE_API_CALL);

  const searchResult = await fetch(BASE_API_CALL + `/api/users/${uuid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => response.json());

  console.log("result: ");
  console.log(searchResult);
  return searchResult;
}

module.exports = {
  searchForUserByUUID
}