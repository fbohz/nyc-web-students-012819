class Api::V1::AuthController < ApplicationController

  # api/v1/login
  def create # post
    user = User.find_by(username: params[:username])

    if user && user.authorize
      render json: {user: user, token: encode_token(user.id)}
    else 
      render json: {errors: 'Please enter the correct username or password'}
    end
  end

  # api/v1/auto_login
  def auto_login # get
    # check headers for token
    # if there is a token decode it
    # get the user id
    # find the user id
    # send back the user

    curr_user
  end
end
