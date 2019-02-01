class Cat < Pet
  include Huggable
  # include is for Instance methods
  include Pescatarianable

  # extend is for class methods
  # extend Module

  def initialize(name)
    super(name)
    @num_lives = 9
    # puts "Initializing a Cat"
  end

end
