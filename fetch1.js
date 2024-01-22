fetch("https://fakestoreapi.com/products/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    console.log(data.price)
  })
  .catch((error) => console.log(error))
