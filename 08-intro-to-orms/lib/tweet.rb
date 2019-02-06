class Tweet
  attr_accessor :message, :user_id
  ALL = []

  def self.all
    ALL
  end

  def initialize(props={})
    @message = props['message']
    @user_id = props['user_id']
  end

  def save
    self.class.all << self
  end
end
