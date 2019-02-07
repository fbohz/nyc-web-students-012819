class DynamicRecord

  # attr_accessor(:message, :user_id)
  attr_reader :id
  # ALL = []

  def self.table_name
    "#{self.to_s.downcase}s"
  end

  def self.all
    # ALL
    sql = "SELECT * FROM #{self.table_name}"
    results = DB[:conn].execute(sql)

    # right now this returns an array of hashes
    # we want this to return an array of Tweet Instances!
    results.map do |row|
      # tweet_data = {'message' => row['message']}
      # binding.pry
      data = row.reject do |k, v|
        k.is_a?(Integer)
      end

      self.new(data)
    end


  end

  def initialize(row_hash={})
    columns = row_hash.reject do |k, v|
      k == "id"
    end.keys
    # binding.pry

    columns.each do |col_name|
      self.class.send(:attr_accessor, col_name)
      self.send("#{col_name}=", row_hash[col_name])
    end
    #
    # self.message=(row_hash['message'])
    # self.user_id=(row_hash['user_id'])

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
