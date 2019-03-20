// <!-- <tr>
  // <td>Example Name</td>
  // <td>Carnivore</td>
  // <td>1</td>
// </tr> -->

const API_URL = 'http://localhost:3000'

document.addEventListener("DOMContentLoaded", () => {
  console.log('the DOM content has loaded');
  const app = new App()
  app.addAllEventListeners()
  // app.fetchAllAnimals()


  fetch(`${API_URL}/animals`)
  .then(res => res.json())
  .then(animals => {
    animals.forEach(attributes => {
      new Animal(attributes)
    })

    Animal.renderAll(app.tbody)
  })
})
