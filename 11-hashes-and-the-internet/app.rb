# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'rest-client'
require 'pry'
require 'json'
# httparty


# * Write an application that takes a search term from a user
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book

# * Make a Request to the GoogleBooks API and get back some results
response = RestClient.get('https://www.googleapis.com/books/v1/volumes?q=ruby+programming')
# this response is a String, we need to convert into JSON (parse it into json)
results = JSON.parse(response.body)

book_data = results["items"]

book_data.each do |book|
  # title
  title = book["volumeInfo"]["title"]
  puts "Title: #{title}"

  # authors
  # separated by an &

  # description
  # first 100 chars followed by ...

  puts '*' * 30
end

# binding.pry

# results.each do |book|
#   # print
# end
'bye'
