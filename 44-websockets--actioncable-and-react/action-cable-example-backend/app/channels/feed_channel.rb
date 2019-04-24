class FeedChannel < ApplicationCable::Channel
  def subscribed
    # feed = Feed.find_by(params[:id])
    stream_from "my_feed"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
