# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Party.create(title: 'taco time', people: 35, food: true, start_time: 'now o clock', end_time: 'never', incredible: 100, location: 'here')
Party.create(title: 'elizabeth party', people: 235, food: true, start_time: 'right now', end_time: 'after tmrw', incredible: 100000, location: 'flatiron school')
Party.create(title: 'nates party is the spot', people: 3, food: false, start_time: 'not right now', end_time: 'please', incredible: 10, location: 'home')
Party.create(title: 'Charlie and Alis apostrophes are bad', people: 2, food: false, start_time: 'yesterday', end_time: 'two days ago', incredible: 100, location: 'find me at the tables on the side or cash me ow side')


# t.string :title
# t.integer :people
# t.boolean :food
# t.string :start_time
# t.string :end_time
# t.integer :incredible
# t.string :location
