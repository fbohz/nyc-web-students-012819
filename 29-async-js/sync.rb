require 'rest-client'
require 'json' #JavaScript Object Notation
require 'pry'

puts "taking a quick nap. Be right back"

sleep(5)

puts "okay I'm awake now"

puts "Making an HTTP GET request with RestClient"

planets = RestClient.get('https://swapi.co/api/planets')
# binding.pry
puts "Request is complete"

planets = JSON.parse(planets)

puts "Parsing the JSON from the response"

puts planets["results"].map { |planet| planet["name"]}


begin
  this_is_not_a_variable
rescue NameError
  puts 'saved u'
end
