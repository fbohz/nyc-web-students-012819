class Appointment

  attr_accessor :salon, :customer, :price, :title, :date, :rating
  @@all = []

  def initialize(salon, customer, price, title, date, rating)
    @salon = salon
    @customer = customer
    @price = price
    @title = title
    @date = date
    @rating = rating

    @@all << self
  end

  def self.all
    @@all
  end

end
