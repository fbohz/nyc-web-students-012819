class Customer

  attr_reader :name
  attr_accessor :hairstyle

  @@all = []

  def initialize(name, hairstyle)
    @name = name
    @hairstyle = hairstyle

    @@all << self
  end

  def self.all
    @@all
  end

  def make_appointment(salon, price, title, date, rating)
    Appointment.new(salon, self, price, title, date, rating)
  end

  def appointments
    # return an array of all my appointments
    Appointment.all.select do |appointment|
      appointment.customer == self
    end
  end

  def salons
    # returns an array of all my salons I've been to (unique ones!)
    my_salons = self.appointments.map do |appointment|
      appointment.salon
    end
    my_salons.uniq
  end

  def stylists
    # return all my stylists
    my_stylists = self.appointments.map do |appointment|
      appointment.salon.stylist
    end
    my_stylists.uniq
  end

  def favorite_salon
  
  end


end
