require 'bundler'
Bundler.require

DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

DB[:conn].results_as_hash = true

# Connection to DB
# ActiveRecord::Base.establish_connection(
#   {
#     adapter: 'sqlite3',
#     database: 'db/twitter.db'
#   }
# )

# Logger
# ActiveRecord::Base.logger = Logger.new(STDOUT)

# require_relative '../lib/dynamic_record.rb'
require_relative '../lib/user.rb'
require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
