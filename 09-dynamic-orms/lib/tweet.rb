class Tweet
  attr_accessor :message, :user_id
  attr_reader :id
  # ALL = []

  def self.all
    # ALL
    sql = "SELECT * FROM tweets"
    tweets = DB[:conn].execute(sql)

    # right now this returns an array of hashes
    # we want this to return an array of Tweet Instances!
    tweets.map do |row|
      # tweet_data = {'message' => row['message']}
      # binding.pry
      Tweet.new(row)
    end


  end

  def initialize(row_hash={})
    # {'message' => '', 'user_id' => '', 1 => 1, 'whatever' => 99}
    @message = row_hash['message']
    @user_id = row_hash['user_id']

    @id = row_hash['id']
  end

  def save
    # if the tweet is coming from the DB
    # update it
    if persisted?
      update_record
    else
      # otherwise, if its brand new
      # insert into the db
      insert_record
    end

  end

  def persisted?
    !!self.id
  end

  private

  def insert_record
    # sql = "INSERT INTO tweets (message, user_id) VALUES ('my latest tweet', 2)"
    # sql = "INSERT INTO tweets (message, user_id) VALUES ('#{self.message}', #{self.user_id})"
    sql = <<-SQL
    INSERT INTO tweets
    (message, user_id)
    VALUES (?, ?);
    SQL
    # binding.pry
    DB[:conn].execute(sql, self.message, self.user_id)

    last_row_sql = <<-SQL
    SELECT *
    FROM tweets
    ORDER BY id DESC
    LIMIT 1
    SQL
    @id = DB[:conn].execute(last_row_sql)[0]["id"]
    self
  end

  def update_record
    sql = <<-SQL
    UPDATE tweets
    SET message = ? user_id = ?
    WHERE id = #{self.id}
    SQL

    DB[:conn].execute(sql, self.message, self.user_id)
    self
  end
end

# BasketballPlayer.new('name', 16, 10, 7, ...)
# BasketballPlayer.new({'name' => '', 'rebounds' => 16, 10, 7, ...})
