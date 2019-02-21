class FoodsController < ApplicationController


# ALL MY FOODS
# ONE PARTICULAR SUPER MEGA AWESOME ALL DEETS OF ONE THING FOOD YES YEET
# show

# USER NEEDS A FORM to send data
  # GET
# USER SUBMIT THAT FORM
 # POST

  # GET: /foods
  # HTTP VERB GET
  # REST INDEX
  get "/foods" do
    # model
    @foods = Food.all

    # RESPONSE
    erb :"/foods/index.html"
  end

  # GET: /foods/new
  # NEW
  get "/foods/new" do
    @users = User.all
    erb :"/foods/new.html"
  end

  # POST: /foods
  # CREATE
  # post '/jeffHWANG' do
  #   binding.pry
  # end


  post "/foods" do
    # binding.pry
    @food = Food.create(params)
    redirect "/foods/#{@food.id}"
  end

  # GET: /foods/5
  get "/foods/:id" do
    # binding.pry
    @food = Food.find(params[:id])
    @user_that_ate_me = User.find(@food.user_id)
    erb :"/foods/show.html"
  end

  # GET: /foods/5/edit
  get "/foods/:id/edit" do
    erb :"/foods/edit.html"
  end

  # PATCH: /foods/5
  patch "/foods/:id" do
    redirect "/foods/:id"
  end

  # DELETE: /foods/5/delete
  delete "/foods/:id/delete" do
    redirect "/foods"
  end
end
