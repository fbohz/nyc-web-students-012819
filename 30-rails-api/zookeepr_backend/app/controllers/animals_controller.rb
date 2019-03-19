class AnimalsController < ApplicationController
  def create
    # Animal.create({name => '', diet => 0, id => 13})
    # Animal.create(animal_params)
    @species = Species.find_or_create_by(name: params[:species_name])
    #{name => '', diet => "0", id => 13}
    @animal = Animal.create(name: params[:name], species: @species, diet: params["diet"].to_i)

    render json: @animal
  end

  def show
    @animal = Animal.find(params[:id])

    render json: @animal
  end

  def index
    @animals = Animal.all

    render json: @animals
  end

  def destroy
    @animal = Animal.find(params[:id])
    @animal.destroy

    render json: @animal
  end

  # def animal_params
  #   # {animal => {name => '', diet => 0}}
  #   params.require(:animal).permit(:name, :diet)
  # end
end
