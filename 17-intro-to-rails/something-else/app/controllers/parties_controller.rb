class PartiesController < ApplicationController

  # get /parties
  def index
    #get all of the parties from the model
    @parties = Party.all

    #view send back a response
    render :index
  end

  # get /parties/id
  def show
    # model
    @party = Party.find(params[:id])
    #response
    render :show
  end

  def new
  end

  def create
  end
end
