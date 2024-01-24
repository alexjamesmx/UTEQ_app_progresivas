//ejercicio
// crea una solicitud de la api de fake y pinta los datos en el archivo
// index.html
// Utiliza promseas para en caso de que la solicitud no sea exitosa devuelva el contenido
// del archivo not=found.html con el mensaje de que no se ha podido completar la solicitud

fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
    let html = ""
    data.forEach((element) => {
      html += `
        <div>
        <img src="${element.image}">
          <h5>${element.title}</h5>
          <p>${element.description}</p>
      </div>
        `
    })
    div = document.createElement("div")
    div.innerHTML = html
    document.body.appendChild(div)
  })
