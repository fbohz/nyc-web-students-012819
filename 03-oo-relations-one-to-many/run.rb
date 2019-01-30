require 'pry'
require_relative './user.rb'
require_relative './tweet.rb'

coffee_dad = User.new('coffee_dad')
tea_uncle = User.new('tea_uncle')

coffee_dad.post_tweet('having coffee#')
coffee_dad.post_tweet('coffee#')
tea_uncle.post_tweet('tea#')
coffee_dad.post_tweet('coffee#')
tea_uncle.post_tweet('love sipping on my tea')
# Tweet.new('having coffee', coffee_dad)
# Tweet.new('coffee coffee', coffee_dad)



# Tweet.all
# [<Tweet>, <Tweet>]
# XXXX ['coffee cofffee', 'hvain coffe'] XXXX :(

# tweet.username

# Tweet.all

# highest_liked_tweet

Pry.start
