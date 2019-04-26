class Api::V1::UsersController < ApplicationController

  # signup
  def create
    user = User.create(user_params)

    if user.valid?
      token = encode_token(user.id)

      render json: {user: UserSerializer.new(user), token: token}
    else
      render json: {errors: 'Fill out the correct information'}
    end
  end

  # def update

  # end

  # def destroy
    
  # end

  private

  def user_params
    params.require(:user).permit(:username, :password, :balance)
  end
end
