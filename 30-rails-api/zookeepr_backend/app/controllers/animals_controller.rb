class AnimalsController < ApplicationController
  def create
  end

  def show
    @animal = Animal.find(params[:id])

    render json: @animal
  end

  def index
    @animals = Animal.all

    render json: @animals
  end
end
