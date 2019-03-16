// Function Context

// as a function (baseless function)

// as a method

// via a method of the function object

// as a contstructor


const listEmployees = function() {
	this.employees.forEach(function(employee) {
	console.log(`Employee: ${employee.name}`)
	})
}

const tgif = {
	name: "T.G.I. Friday's",
	employees: [
	  {name: 'alex'},
	  {name: 'ali'},
	  {name: 'charlie'},
	],
	listEmployees: listEmployees
}
const chipotle = {
	name: "Chipotle Mexican Grill",
	employees: [
	  {name: 'evans'},
	  {name: 'jeff'},
	  {name: 'vera'},
	],
	listEmployees: listEmployees
}








// object literals

// factory function

// Object.create

// constructor function MUST BE CALLED WITH NEW KEYWORD

// class syntax
