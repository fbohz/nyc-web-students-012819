class Tweet
  attr_accessor :message, :user_id
  # ALL = []

  def self.all
    # ALL
    sql = "SELECT * FROM tweets"
    tweets = DB[:conn].execute(sql)

    # right now this returns an array of hashes
    # we want this to return an array of tweets
    tweets
  end

  def initialize(props={})
    @message = props['message']
    @user_id = props['user_id']
  end

  def save
    # ALL << self
  end
end

# BasketballPlayer.new('name', 16, 10, 7, ...)
# BasketballPlayer.new({'name' => '', 'rebounds' => 16, 10, 7, ...})
