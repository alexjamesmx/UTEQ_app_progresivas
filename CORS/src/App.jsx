import { useState } from "react"
import "./App.css"

function App() {
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    const url = `http://localhost:3000/api/cors?correo=${correo}&password=${password}`
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Incluir credenciales
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMessage(data.message)
      })
      .catch((error) => console.log("Error CORS: ", error))
  }

  const deleteUser = () => {
    const url = `http://localhost:3000/api/cors`
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Asegúrate de incluir las credenciales
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMessage(data.message)
      })
      .catch((error) => console.log("Error CORS: ", error))
  }

  return (
    <div>
      <h1>CORS Example</h1>
      <input
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Obtener fecha de nacimiento</button>
      <h2>Fecha de nacimiento</h2>
      <p>{message}</p>
      <button onClick={() => deleteUser()}>Borrar usuario</button>
    </div>
  )
}

export default App
