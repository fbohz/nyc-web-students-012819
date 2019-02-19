class BooksController < Sinatra::Base
  set :views, 'app/views/books'

  post '/books' do
    title = params[:title]
    snippet = params[:snippet]

    book = Book.create(title: title, snippet: snippet)
    redirect "/books/#{book.id}"
  end


  get '/books' do
    name = 'alex'
    @books = Book.all
    erb :index
  end


  get '/books/new' do
    erb :new
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  get '/books/:id/edit' do
    raise "We are here"
    # find the particular book we are trying to edit

    # render out a form,
    # i would expect that this form is pre-populated with the info about the book
    erb :edit
  end



end
