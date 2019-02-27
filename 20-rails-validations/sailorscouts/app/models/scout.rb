class Scout < ApplicationRecord
  validates :planet, {presence: true, uniqueness: true}
  validates :age, numericality: { greater_than_or_equal_to: 21 }
  validate :purp_hair,

  def purp_hair
    if self.hair_color != "purple"
      errors.add(:hair_color, "please dye your hair purple to join DA SCOUTS")
    end
  end



end
