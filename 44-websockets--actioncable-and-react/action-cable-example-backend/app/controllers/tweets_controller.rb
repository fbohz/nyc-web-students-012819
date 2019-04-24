class TweetsController < ApplicationController

  def create
    @tweet = Tweet.new(content: params[:content], feed_id: 1)
    if @tweet.save
      # right here
      # The server now knows about a new tweet
      # Send a message out to everyone who is listening

      ActionCable.server.broadcast("my_feed", @tweet)
      render json: @tweet
    else
      render json: {error: 'Could not create that tweet'}, status: 422
    end
  end

end
