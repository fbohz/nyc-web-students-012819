$my_title = 'calvin and hobbes'

class Book

  def initialize(title, authors)
    @title = title
    @authors = authors
  end

  def title
    # binding.pry
    @title.split(' ').map do |word|
      word.capitalize
    end.join(' ')
  end

  def authors
    @authors.map do |author|
      author.split(' ').map do |word|
        word.capitalize
      end.join(' ')
    end.join(' & ')
  end

  def cover_page
    # "#{@title} by #{@authors}"

    # zebra
    # binding.pry

    # cover_page_title = @title.split(' ').map do |word|
    #   word.capitalize
    # end.join(' ')
    #
    # cover_page_authors = @authors.map do |author|
    #   author.split(' ').map do |word|
    #     word.capitalize
    #   end.join(' ')
    # end.join(' & ')

    # self is the implicit receiver
    # title = "Something Else"
    puts "\"#{self.title}\"\n\tby\n#{self.authors}"
    # "The Title Of The Book"
    #    by
    # Author One & Author Two
  end

  def nice_title
    @title.split(' ').map do |word|
     word.capitalize
   end.join(' ')
  end

  # def my_cool_method
  #   puts "we are here!"
  # end
end
