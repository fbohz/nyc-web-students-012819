class Salon

  attr_accessor :stylist
  attr_reader :name
  @@all = []

  def initialize(name, stylist) #services
    @name = name
    @stylist = stylist

    # @services = services

    @@all << self
  end

  def self.all
    binding.pry
    @@all
  end

  def appointments
    #return my appointments
  end

  def customers
    #return my customers
  end

  def self.highest_rated
    # give me the highets rated salon
  end

  def self.most_popular
    # returns the most popular salon
    frequency_table = {}
    # get all the appointments
    Appointment.all.each do |appointment|
      if frequency_table[appointment.salon]
        frequency_table[appointment.salon] += 1
      else
        frequency_table[appointment.salon] = 1
      end
    end
    # look at all the salons and build frequency table
    result = frequency_table.max_by do |salon, count|
      count
    end

    result[0]
  end
end
