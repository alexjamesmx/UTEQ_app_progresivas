if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          reg.showNotification("Hello from SW")
        }
      })
    })
    .catch((err) => console.log(err))
  // .then((reg) => {
  //   setTimeout(() => {
  //     reg.sync.register("Enviar-fotos")
  //     console.log("Se enviaron fotos al server")
  //   }, 5000)
  // })
  // .catch((err) => console.error("Error al registrar el service worker", err))
  // .then((req) => console.log("Service Worker Registered!"))
  // .catch((err) => console.log("Service Worker Failed to Register!"))
}

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
