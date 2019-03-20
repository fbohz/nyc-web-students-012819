// <!-- <tr>
  // <td>Example Name</td>
  // <td>Carnivore</td>
  // <td>1</td>
// </tr> -->

document.addEventListener("DOMContentLoaded", () => {
  console.log('the DOM content has loaded');
  const app = new App()
  app.addAllEventListeners()


  adapter.fetchAnimals()
    .then(animals => {
      animals.forEach(attributes => {
        new Animal(attributes)
      })
    Animal.renderAll(app.tbody)
  })
})
