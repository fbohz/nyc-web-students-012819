class Puppy < ApplicationRecord
  belongs_to :shelter

  validates :name, presence: true
  validates :breed, presence: true
  
end
