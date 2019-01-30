class User
  attr_reader :username
  # def username
  #   @username
  # end
  def initialize(username)
    @username = username
    @tweets = []
  end

  def tweets
    @tweets
  end

  def post_tweet(message)
    # Tweet.new ....
  end
end
