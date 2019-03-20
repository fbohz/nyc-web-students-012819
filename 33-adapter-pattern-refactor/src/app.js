class App {
  constructor() {
    this.tbody = document.querySelector('tbody')
    this.form = document.querySelector('form.ui.form')
  }

  handleSubmit(e) {
      e.preventDefault()
      const name = this.form.querySelector('#animal-name').value
      const species_name = this.form.querySelector('#animal-species').value
      const diet = this.form.querySelector('#animal-diet .selected').dataset.value

      this.form.querySelector('#animal-name').value = ''
      this.form.querySelector('#animal-species').value = ''
      this.form.querySelector('#animal-diet .selected')

      adapter.createAnimal({name: name, species_name: species_name, diet: diet})
        .then(data => {
          console.log(data);
          new Animal(data)

          Animal.renderAll(this.tbody)
        })
        .catch(error => {
          console.log('in the catch');
          console.log('error', error);

          const errorDiv = document.createElement('div')
          errorDiv.className = "ui error message"

          errorDiv.innerHTML = `
            <div class="header">That Animal cannot be created</div>
            <p>${error}</p>
          `
          this.form.appendChild(errorDiv)

        })
      // const newAnimalRow = createAnimalRow({name: name})
      // tbody.appendChild(newAnimalRow)

  }

  addAllEventListeners() {
    // handle the form being sumbitted
    this.form.addEventListener('submit', this.handleSubmit.bind(this))


    // handle the set-free click
    this.tbody.addEventListener('click', (e) => {
      if (e.target.matches('button.set-free')) {
        const id = parseInt(e.target.dataset.id)
        const animal = Animal.findById(id)

      adapter.deleteAnimal(id)
       // console.log(animal);
       animal.destroy()

       Animal.renderAll(this.tbody)
       // make a DELETE req to the API
       // DELETE /animals/:id

      }
    })
  }
}
