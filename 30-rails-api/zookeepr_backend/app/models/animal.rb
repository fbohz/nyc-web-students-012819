class Animal < ApplicationRecord
  belongs_to :species
  enum diet: [:carnivore, :omnivore, :herbivore]
end
