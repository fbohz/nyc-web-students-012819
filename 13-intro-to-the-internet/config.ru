require 'pry'
require_relative './config/environment'

class Application

  def call(env)
    req = Rack::Request.new(env)
    resp = Rack::Response.new

    # binding.pry
    # Root route
    if req.path == '/'
      resp.write('Welcome to the Library App')

    # About Page
    elsif req.path == '/about'
      resp.write('This is a WEB Application')

    # All the books
    elsif req.path == '/books'
      # resp.add_headers('Content-Type', 'text/html')
      resp.write('<h1>ALL THE BOOKS</h1>')
      resp.write('<ul>')
      Book.all.each do |book|
        resp.write("<li>#{book.id}. #{book.title}</li>")
      end
      resp.write('</ul>')

    # Show specific info about 1 book
    elsif req.path.match(/\/books\/*/)
      id = req.path.split('/')[2]
      book = Book.find_by(id: id)

      if book
        resp.write("<h1>#{book.title}</h1>")
        resp.write("<h3>by #{book.author_name}</h3>")
        resp.write("<p>#{book.description}</p>")
      else
        resp.status = 404
        resp.write('BOOK not found')
      end
    else
      resp.status = 404
      resp.write('Not Found, Not sure how to respond to that request')
    end

    resp.finish
  end

end


run Application.new
