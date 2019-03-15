// <!-- <tr>
  // <td>Example Name</td>
  // <td>Carnivore</td>
  // <td>1</td>
// </tr> -->

document.addEventListener("DOMContentLoaded", () => {
  console.log('the DOM content has loaded');
  const tbody = document.querySelector('tbody')

  const createAnimalRow = (animal) => {
    // console.log('animal', animal);
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.diet}</td>
      <td>${animal.species_id}</td>
    `

    return tr
  }

  fetch('http://localhost:3000/animals')
  .then(res => res.json())
  .then(animals => {
    console.log('here is the response from the API', animals);
    animals.map(createAnimalRow).forEach(row => {
      tbody.appendChild(row)
    })
  })
})
