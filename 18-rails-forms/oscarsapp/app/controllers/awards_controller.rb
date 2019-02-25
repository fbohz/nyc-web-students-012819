class AwardsController < ApplicationController


  def edit
    # model
    @award = Award.find(params[:id])
    # response
    render "edit"
  end

  def show
    # model
    @award = Award.find(params[:id])

    #response
    render "show"
  end

  def create
    # byebug
    #model
    award = Award.create(awards_params)

    #response??
    redirect_to award
  end

  def gainz
   # model

   # response

  end

  private

  # STRONG PARAMS 💪
  def awards_params
    params.require(:award).permit(:name, :year, :category, :winner)
  end

end # end awards controller
