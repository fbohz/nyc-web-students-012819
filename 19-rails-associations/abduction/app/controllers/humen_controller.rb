class HumenController < ApplicationController

  def index
    # model
    @humans = Human.all
    #response
    render "index"
  end

  def show
    #model
    @human = Human.find(params[:id])
    # response
    render "show"
  end

  def new
    #model
    @human = Human.new
    #response
    render "new"
  end

  def create
    byebug
  end

  def edit

  end

  def update

  end

  def destroy

  end

end
