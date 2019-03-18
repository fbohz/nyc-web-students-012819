// Function Context
// "Invocation Context"

// as a function (baseless function)

function thisLogger() {
	console.log(this)
}
// this is the window
function locationLogger() {
	console.log(this.location)
}

// as a method

// a method is a function that is an attached to an object
// that is a property of that object

// when we invoke a function as a method, this is the obj that function
// is attached to

const obj = {
	location: 'nyc',
	locationLogger: locationLogger,
	thisLogger: function(){
		console.log(this)
	}
}

// via a method of the function object





// as a contstructor


const listEmployees = function() {
	console.log('this right here is', this);

	this.employees.forEach(function(employee) {
	  console.log(`Employee: ${employee.name} works at ${this.name}`)
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
