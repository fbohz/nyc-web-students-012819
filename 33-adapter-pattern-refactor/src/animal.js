class Animal {
  constructor({name, diet, species_name, id}) {
    this.name = name
    this.diet = diet
    this.species_name = species_name
    this.id = id

    this.constructor.all.push(this)
  }

  toHTML() {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${this.name}</td>
      <td>${this.diet}</td>
      <td>${this.species_name}</td>
      <td class='center aligned'>
        <button data-id='${this.id}' class='ui inverted red button set-free'>
          <i class='key icon'></i>
          Set ${this.name} Free
        </button>
      </td>
    `

    return tr
  }

  render(domNode) {
    domNode.appendChild(this.toHTML())
    // const pTag = document.createElement('p')
    // pTag.innerText = 'something'
  }

  destroy() {
    console.log('this is like an instance method, in here this is like self', this);
    this.constructor.all = this.constructor.all.filter(animal => animal.id !== this.id)
  }


  static renderAll(domNode) {
    domNode.innerHTML = ''

    this.all.forEach(animal => {
      animal.render(domNode)
    })
  }

  static findById(id) {
    return this.all.find(animal => animal.id === id)
  }

}

Animal.all = []
