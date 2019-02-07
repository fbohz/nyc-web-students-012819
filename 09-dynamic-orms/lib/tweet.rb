class Tweet < ActiveRecord::Base

  belongs_to :user
  # def user
  #   # .find_by, .find, .where <- pay attention to the return value
  #   User.find(self.user_id)
  # end

end

# BasketballPlayer.new('name', 16, 10, 7, ...)
# BasketballPlayer.new({'name' => '', 'rebounds' => 16, 10, 7, ...})
