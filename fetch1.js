fetch("./images/asiaticfood.jpg")
  .then((response) => {
    console.log(response)
    return response.blob()
  })
  .then((blob) => {
    console.log(blob)
    let img = document.createElement("img")
    img.setAttribute("id", "img")
    img.src = URL.createObjectURL(blob)

    document.body.appendChild(img)
  })
  .catch((err) => {
    console.error("Error personalizado: " + err)
  })
