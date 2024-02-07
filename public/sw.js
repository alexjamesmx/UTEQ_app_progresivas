self.addEventListener("install", function (event) {
  console.log("Service worker installed")
  const instalacion = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Instalaciones terminadas")
      self.skipWaiting()
      resolve()
    }, 1000)
  })
  event.waitUntil(instalacion)
})

self.addEventListener("activate", function (event) {
  console.log("Service worker activated")
})

self.addEventListener("fetch", function (event) {
  // console.log("Fetch: ", event.request.url)
  // if (event.request.url.includes("https://fakestoreapi.com/products")) {
  //   const resp = new Response(`{"ok": false, "message": "Interceptado por sw"}`)
  //   event.respondWith(resp)
  // }
})

// self.addEventListener("sync", function (event) {
//   console.log("Tenemos conexión")
//   console.log(event)
//   console.log(event.tag)
// })

self.addEventListener("push", (event) => {
  console.log("push")
})
