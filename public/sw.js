self.addEventListener("fetch", (event) => {
  const offlineResponse = new Response(`
    Bienvenido 
    Para usar esta aplicación necesitas conexión a internet
    `)
  const resp = fetch(event.request).catch(() => offlineResponse)
  event.respondWith(resp)
})
