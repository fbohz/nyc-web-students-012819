class User
  attr_reader :username
  # def username
  #   @username
  # end
  def initialize(username)
    @username = username
    # @tweets = []
  end

  def tweets
    # get all of the tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end

    # find the ones that belong to me

    # and return only those ones
  end

  def post_tweet(message)
    Tweet.new(message, self)
    # @tweets << new_tweet
    # new_tweet
  end
end
