class App {
  constructor() {
    this.tbody = document.querySelector('tbody')
    this.form = document.querySelector('form.ui.form')
  }

  handleSubmit(e) {
      e.preventDefault()
      console.log(e);
      console.log('WHAT IS THIS IN handleSubmit', this);
      const name = this.form.querySelector('#animal-name').value
      const species_name = this.form.querySelector('#animal-species').value
      const diet = this.form.querySelector('#animal-diet .selected').dataset.value

      // const newAnimalRow = createAnimalRow({name: name})
      // tbody.appendChild(newAnimalRow)
      fetch(
        `${API_URL}/animals`,
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: name,
            species_name: species_name,
            diet: diet
          })
        }
      )
      .then(res => res.json())
      .then(data => {
        new Animal(data)

        Animal.renderAll(this.tbody)
      })
  }

  addAllEventListeners() {
    // here 'this' is the app instance
    console.log(this, 'outside');
    this.form.addEventListener('submit', this.handleSubmit.bind(this))
    this.tbody.addEventListener('click', (e) => {
      if (e.target.matches('button.set-free')) {
        const id = parseInt(e.target.dataset.id)
        const animal = Animal.findById(id)

        fetch(`${API_URL}/animals/${animal.id}`, {method: 'DELETE'})

       // console.log(animal);
       animal.destroy()

       Animal.renderAll(this.tbody)
       // make a DELETE req to the API
       // DELETE /animals/:id

      }
    })
  }
}
