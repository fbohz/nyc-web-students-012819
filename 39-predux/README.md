Predux
======

## SWBATs

Take what they learned in Mods 1 through 4 and use them as examples to explain these concepts in programming:

- [ ] message passing
- [ ] abstraction
- [ ] layers
- [ ] APIs

pass in arguments!!!!!!
put it in different places
callback
conditional statements

class => pass in different arguments => props
- react!!!
- give it different props, it does something different
- element

mod 1
- class => instance => initialize() => .new()




## Lecture Overview

[**Message Passing**](https://en.wikipedia.org/wiki/Message_passing) per Wikipedia:

> message passing is a technique for invoking behavior (i.e., running a program) on a computer. The invoking program sends a message to a process (which may be an actor or object) and relies on the process and the supporting infrastructure to select and invoke the actual code to run. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name.

1. Message passing is a technique for invoking behavior (i.e., running a program) on a computer.
  - Message passing is a technique for getting the computer to do something.
2. The invoking program sends a message to a process (which may be an actor or object) and relies on the process and the supporting infrastructure to select and invoke the actual code to run.
  - Send a message to X, trusts that X will do what it's told to do.
3. Message passing differs from conventional programming where a process, subroutine, or function is directly invoked by name.
  - No separate methods. Just one method to rule them all.

### Student Exercise

```ruby
class Squirrel
  attr_accessor :firriness, :name # im so sad... my jokes dont land...

  def initialize(firriness, name)
    @firriness = firriness
    @name = name
  end

  def eat
    # did some stuff
  end

  def scurry
    # did asome stuff
  end
end

s1 = Squirrel.new(9001, "Alvin")
s1.eat
s1.scurry
s1.name
# this is not message passing
s1.send("NAME") # message passing => sending a message, passing a message
# does the same thing as s1.name
# output wise, nothing changes
API => Application Programming Interface
how you interact with something

# some sort of defintion about doing work... messages
# you send a message to an object and it does work

SquirrelsController.rb controller

def index
  @squirrels = Squirrel.all
end

index.erb View

<h1>Squirrels!!!!</h1>

<ul>
<% @squirrels.each do |s| %>
  <li><%= s.send(:name) %></li>
<% end %>
</ul>
```

Any mod, API
=> Pokemon => .json => website/API => interface to get stuff

CLI => MOD 111111
TEXT in a terminal
1. choose
2. delete something
=> an API for... the user

Mod 2...
rails new
API => browser

does that mean any function or method is an API?
- lets open your mind!!!!
- YES
- who is meant to consume it

everything is a component

```javascript
// TODO
```

Why did we make so many different APIs?
programmers, users, for others

think about why... when did we separate things out?
- single responsibility
- mod 2 => Model View Controller =>  each file was for a different thing
  - convention
  - so separate layers of responsibility
- mod 4 => compopnents!!!!
  - we didn't shove everything into a single component
  - props, state
  - all of them are separate => compose them
- made layers?
  - routes => deliver a certain piece of code
  - telling what your server can do => user (programmer)
  - GET /squirrels
  - another layer => MVC | browser
  - API

stacked upon each other like layers of a cake
API => cream, fruit, or whatever, frosting

single responsibility => you design the API for each layer to interact with each other

- do it more than once
- pattern
- DRY!!! => dont repeat yourself
- abstraction
different layers
give each layer an API
=> different contexts
=> interenet
=> DOM! => API
=> DOM => hidden away => react, components
  imperative

message passing => one step further
single API that does everything for you

Mod 4 => single API that does stuff for you?
- setState => sets the state => rerenders => diff => DOM

this.setState({ do something magical!! }) // going oh man it's ghoing to do magic!

this state => how did it feel?
- good, not good, its ok
- forms
- forms
- forms

- single responsibility => representation of your DOM => you can find... your...
single source of truth => JOIN TABLE => your data... relationships
many to many

mod 3 => kept around variables
- pokemon searcher => global array
- keep referencing, keep it in scope
- to represent your data
- some place you can look to for maybe the state of your app

      // of these arguments?
      // where to go
      // what you're going to do with it
fetch('url', { config }) => it can do a lot of things
- single api => send => setState
- some form of message passing

call it and = to new data

in the concept of message passing, the idea of setState

message passing

build an API

to interact with that data

redux is nothing special




API =>
change the data
(read the data)
message passing

<!-- state.counter = 10000 -->
<!-- do you think you can write .send? -->




```javascript
state = {
  key: "values",
  counter: 0,
  teacher: "Alex",
}

// So what did you all come up with?
             // your message => it's telling send how to change the data

fetch('url', { config }) // do they look similar?
function send(funcName, attributes = "") { // setState
  // const funcName = () => {}
  // 1. increate the counter => increment that tells it do invoke something that does ++
  // 2. decrement the counter
  // 3. give your teacher a last name => ???  
  // 4. to set the counter to a given number
  // 5. change mods

  // what in Mod 2? routes and controllers
  // when what is passed in as a message?
  if (funcName === 'increment') { => 'url'
    state.counter++ => { config }
  } else if (funcName === 'decrement') { => 'url'
    state.counter--
  } else if (funcName === 'add last') {
    state.teacher = state.teacher + attributes
  } else if (funcName === 'set counter') {
    state.counter = attributes
  }
  // looked like this for the menyu logic?

  // when you build redux... you are just doing Mod 2
  // in a new paradigm

  // tricky...
  // maybe yes

  // switch (funcName) {
  //   case 'increment':
  //     state.counter++
  //     break;
  //   default:
  //
  // }

}

// some new layer => defines, based on messages, how it does stuff
```



### Summary

Everything boils down to:

* message passing
  * ruby run.rb, rails s, npm start
  * OOP => `.send()`
  * request <---> response
  * fetch
  * setState
* abstraction
  * helper methods
  * OOP => inheritance
  * factory pattern
  * higher order functions
  * higher order components
* layers
  * OOP => encapsulation
  * ORM
  * MVC
  * DOM
  * Components
* APIs
  * class & instance methods
  * RESTful routes
  * JS & the DOM
  * Adapter Pattern
