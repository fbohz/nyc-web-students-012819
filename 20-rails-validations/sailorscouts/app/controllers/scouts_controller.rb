class ScoutsController < ApplicationController

  def index
    #code
    @scouts = Scout.all
    render "index"
  end

  # get '/scouts/:id'
  def show
    # model
    @scout = Scout.find(params[:id])
    #response
    render "show"
  end

  def new
    # model
    @scout = Scout.new
    # resp
    render "new"
  end

  def create

    scout = Scout.create(scout_params)
    if scout.valid?
      redirect_to scout_path(scout)
    else
    # byebug

    flash[:booboos] = scout.errors.full_messages
    redirect_to new_scout_path

    #
    # @scout = Scout.new
    # @errors = scout.errors.full_messages
    # render "new"
    end
  end

  private
  #🤫

  #💪 the internet is scary and full of HaX0rZ
  def scout_params
    params.require(:scout).permit(:planet,:age,:hair_color)
  end

end
