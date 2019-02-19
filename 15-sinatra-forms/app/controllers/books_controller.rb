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


  # edit action
  get '/books/:id/edit' do

    # find the particular book we are trying to edit
    @book = Book.find(params[:id])

    # render out a form,
    # i would expect that this form is pre-populated with the info about the book
    erb :edit
  end

  # update action
  patch '/books/:id' do
    # find the particular book we're editing
    # use the values in the params to update it
    book = Book.find(params[:id])
    book.update(title: params[:title], snippet: params[:snippet])

    redirect "/books/#{book.id}"
  end

end
