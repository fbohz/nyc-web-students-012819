const assert = function (description, value) {
  var resultsList = document.querySelector('#results')
  var li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.innerText = description
  resultsList.appendChild(li)
}
