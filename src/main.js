// Check if service worker is supported and register it
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    this.navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope)
      })
      .catch(function (error) {
        console.log('ServiceWroker registration failed: ', error)
      })
  })
}

// Fetch users and cache them with Workbox
if ('caches' in window) {
  const usersUrl = 'https://jsonplaceholder.typicode.com/users'

  caches.match(usersUrl).then(function(response) {
    if (response) {
      return response
    } else {
      return fetch(usersUrl)
        .then(function(response) {
          const clonedResponse = response.clone()
          caches.open('users').then(function(cache) {
            cache.put(usersUrl, clonedResponse)
          })
          return response
        })
        .catch(function(error) {
          console.log('Error fetching users: ', error)
        })
    }
  }).then(function(response) {
    response.json().then(function(users) {
      const usersList = document.getElementById('users')
      users.forEach(function(user) {
        const listItem = document.createElement('li')
        listItem.textContent = user.name
        usersList.appendChild(listItem)
      })
    })
  })
}
