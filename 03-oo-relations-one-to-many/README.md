Intro to OO Relations
===========================

## Lecture Notes

* Has Many / Belongs to

* Single Source of truth

#### Where we've been

batch = Batch.new('nyc-web-012819')
batch.students
=> ["dana", "matt", "cynthia", ..]

dana = Student.new('dana')
dana.batch
=> 'nyc-web-012819'

#### Where we'll be from here on out

batch = Batch.new('nyc-web-012819')
batch.students
=> [<Student 0x078124 @name='dana'>, <Student>, ...]

dana = Student.new('dana')
dana.batch
=> <Batch @name='nyc-web-012819'>

# Batch has many students
# student belongs to a batch


#### Define terminology
  * Model - Class that represents the data of our domain
  class Student
  class Batch
  class GithubRepoSyncer

  * Domain / Domain Modeling - Subject Matter


  * Schema

  * Deliverables
  * User Stories




### Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and has a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection

* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
