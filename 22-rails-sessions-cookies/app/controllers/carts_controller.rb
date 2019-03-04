class CartsController < ApplicationController
  def update
    # byebug

    flash[:notice] = "You've added the #{params[:nacho_name]} to your cart! :)"


    add_nacho_to_cart(params[:nacho_id])
    redirect_to nachos_path
  end


end
