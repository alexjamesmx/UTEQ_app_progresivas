fetch("https://www.youtube.com")
  .then((resp) => resp.text())
  .then((html) => {
    console.log(html)
    document.open()
    document.write(html)
    document.close()
  })
