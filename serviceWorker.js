// istallation
self.addEventListener("install",(event)=>{
  event.waitUntil(
    caches.open("sample").then((cache)=>{
      cache.addAll([

      ]);
    })
  )
})
// fetch event
self.addEventListener("frtch",(event)=>{
  event.respondWith(
    caches.match(event.request).then((resp)=>{
      return resp || fetch(event.request).then((response)=>{
        return caches.open("sample").then((caches)=>{
          cache.put(event.request,response.clone());
          return response;
        })
      })
    })
  )
})
