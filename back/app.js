const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"], //anade DELETE
    credentials: true,
  })
)

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido al servidor" }).status(200)
})

app.get("/api/cors", (req, res) => {
  console.log("get")
  if (req.query.correo == "ana" && req.query.password == "123") {
    res.json({ message: "¡correcto!" }).status(200)
  } else {
    res.json({ message: "Datos incorrectos" }).status(401)
  }
})

app.delete("/api/cors", (req, res) => {
  console.log("delete")
  if (req.query.correo == "ana" && req.query.password == "123") {
    res.json({ message: "Eliminado correctamente" }).status(200)
  } else {
    res.json({ message: "Usuario no existe" }).status(401)
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
