// public/js/index.js

const backendPort = 8080;
const backendServerUrl = `http://localhost:${backendPort}/`;

async function getUsers() {
  const endpointUrl = `${backendServerUrl}users`;
  const response = await fetch(endpointUrl);
  const userData = await response.json();
  return userData;
}

async function getUsersWithContentType() {
  const endpointUrl = `${backendServerUrl}users`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(endpointUrl, options);
  const userData = await response.json();
  return userData;
}

(async () => {
  // console.log(await getUsers());
  console.log(await getUsersWithContentType());
})()
