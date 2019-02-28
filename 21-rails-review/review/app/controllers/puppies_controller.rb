class PuppiesController < ApplicationController

  def index
    @puppies = Puppy.all

    render :index
  end

  def show
    find_puppy

    render :show
  end

  def new
    @puppy = Puppy.new
    @shelters = Shelter.all

    render :new
  end

  def create
    @puppy = Puppy.create(puppy_params)
    byebug
    if @puppy.valid?
      redirect_to @puppy
    else
      byebug
      flash[:errors] = @puppy.errors.full_messages

      redirect_to :new
    end
  end

  def edit
    find_puppy
    @shelters = Shelter.all

    render :edit
  end

  def update
    find_puppy
    @puppy.update(puppy_params)

    redirect_to @puppy
  end

  def adopt
    find_puppy
    # @puppy = Puppy.find(params[:id])
    @puppy.destroy

    redirect_to puppies_path
  end

  private

  def puppy_params
    params.require(:puppy).permit(:name, :breed, :shelter_id)
  end

  def find_puppy
    @puppy = Puppy.find(params[:id])
  end
end
