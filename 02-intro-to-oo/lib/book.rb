$my_title = 'calvin and hobbes'

class Book

  def initialize(title, authors)
    @title = title
    @authors = authors
  end

  def title
    @title
  end

  def authors
    @authors
  end

  def cover_page
    "#{@title} by #{@authors}"
    # "The Title Of The Book"
    #    by
    # Author One & Author Two
  end

  # def my_cool_method
  #   puts "we are here!"
  # end
end
