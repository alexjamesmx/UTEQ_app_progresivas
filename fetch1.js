let promesaConError = new Promise((resolve, reject) => {
  reject("Algo salió mal")
})

//Manejar la promesa con error
promesaConError
  .then((mensaje) => {
    console.log(mensaje)
  })
  .catch((error) => {
    console.log(error)
  })
