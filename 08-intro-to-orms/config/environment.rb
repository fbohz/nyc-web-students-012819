require 'bundler'
Bundler.require


DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

# [
#   [1, 'what', 7],
#   [2, 'something', 7]
# ]
# binding.pry
DB[:conn].results_as_hash=(true)
# binding.pry
# [
#   {id: 1, message: 'what', user_id: 7, 0: 1, 1: 'what', 2: 7}
# ]


row[0]

require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
