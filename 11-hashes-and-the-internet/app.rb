# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'rest-client'
require 'pry'
require 'json'
# httparty


# * Write an application that takes a search term from a user

puts "Welcome to the Book Searcher"

puts "Enter a search term:"

search_term = gets.chomp
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book
url = "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"
# * Make a Request to the GoogleBooks API and get back some results
response = RestClient.get(url)
# this response is a String, we need to convert into JSON (parse it into json)
results = JSON.parse(response.body)

book_data = results["items"]

book_data.each do |book|
  # title
  title = book["volumeInfo"]["title"]
  puts "Title: #{title}"

  # authors
  # separated by an &
  authors_array = book["volumeInfo"]["authors"]
  if authors_array
    authors = authors_array.join(' & ')
  else
    authors = "No authors found..."
  end
  puts "Authors: #{authors}"

  # description
  # first 100 chars followed by ...

  description_text = book["volumeInfo"]["description"]

  if description_text
    description = description_text[0..100]
  else
    description = ""
  end
  puts "Description: #{description}..."

  puts '*' * 30
end

# binding.pry

# results.each do |book|
#   # print
# end



# Classes

# Single Responsibility Principle

# User Model
# Book  Model (title, num_pages, description)
# Authors Model


# GoogleBookFetcher.new(search_term)

# CLI.new.run

'bye'
