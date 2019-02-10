class Signature

  attr_reader :document, :student

  @@all = []

  def initialize(document, student)
    @document = document
    @student = student
    @@all << self
  end

  def self.all
    @@all
  end

end
