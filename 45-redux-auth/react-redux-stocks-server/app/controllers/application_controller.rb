class ApplicationController < ActionController::API

  def encode_token(user_id)
    JWT.encode({user_id: user_id}, ENV['SECRET_KEY'])
  end
  
  def token
    request.headers['Authorization']
    # returns token
  end

  def decoded_token
    begin
      JWT.decode(token, ENV['SECRET_KEY'])
      # [{"user_id"=>11}, {"alg"=>"HS256"}]
    rescue
      nil
    end
  end


  def curr_user
    # user_id = decoded_token['user_id']
    
    begin
      user_id = decoded_token[0]["user_id"]
      
      User.find(user_id)
    rescue
      nil
    end
  end

  def logged_in
    !!curr_user
  end

  def authorized
    render json: {errors: 'Unauthorized'} unless :logged_in
  end

end
