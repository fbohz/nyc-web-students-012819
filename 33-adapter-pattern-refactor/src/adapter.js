

// Immediately Invoked Function Expression

// IIFE
const adapter = (function() {
  const url = 'http://localhost:3000'

  const makeRequest = () => ({})

  return {
    fetchAnimals: function() {
      return fetch(`${url}/animals`).then(res => res.json())
      // .then(res => res.json())
    },
    createAnimal: function(params) {
      return fetch(
        `${url}/animals`,
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(params)
        }
      )
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw "Something went wrong!!!!"
      })
    },
    deleteAnimal: function(id) {
      return fetch(`${url}/animals/${id}`, {method: 'DELETE'}).then(res => res.json())
    }
  }
})()
