class ApplicationController < ActionController::API

  def encode_token(user_id)
    JWT.encode(user_id)
  end

  def decoded_token
    begin
      JWT.decode(auth_headers)
    rescue
      nil
    end
  end

  def auth_headers
    request.headers['Authorization'].split(' ')[1]
    # Bearer <Token>
    # returns token
  end

  def curr_user
    # user_id = decoded_token['user_id']

  end

  def logged_in
    !!curr_user
  end

  def authorized
    render json: {errors: 'i dont think so'} unless :logged_in
  end

end
