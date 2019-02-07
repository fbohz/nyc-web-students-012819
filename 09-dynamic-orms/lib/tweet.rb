class Tweet < ActiveRecord::Base

  def user
    # .find_by, .find, .where <- pay attention to the return value
  end

end

# BasketballPlayer.new('name', 16, 10, 7, ...)
# BasketballPlayer.new({'name' => '', 'rebounds' => 16, 10, 7, ...})
