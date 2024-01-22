let user = {
  name: "Alex Santiago",
  age: 21,
}

fetch("https://reqres.in/api/users", {
  method: "POST",
  body: JSON.stringify(user),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error("error personalizado ", error))
