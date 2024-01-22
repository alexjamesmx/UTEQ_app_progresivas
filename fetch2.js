fetch("https://fakestoreapi.com/products/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    console.log(`precio ${data.price}`)
  })
  .catch((error) => console.log(error))
