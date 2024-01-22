fetch("https://wikipedia.org")
  .then((resp) => resp.text())
  .then((html) => {
    console.log(html)
    document.open()
    document.write(html)
    document.close()
  })
