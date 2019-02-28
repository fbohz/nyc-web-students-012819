class SheltersController < ApplicationController

  def index
    @shelters = Shelter.all

    render :index
  end

  def show
    @shelter = Shelter.find(params[:id])
    @puppies = @shelter.puppies

    render :show
  end

  def new

  end

  def create

  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

  def shelter_params
    params.require(:shelter).permit(:name, :location)
    # {shelter: {name: , location: }}
  end

end
