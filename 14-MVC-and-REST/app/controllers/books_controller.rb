class BooksController < Sinatra::Base
  set :views, 'app/views/books'

  get '/books' do
    name = 'alex'
    @books = Book.all
    erb :index
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end
end
