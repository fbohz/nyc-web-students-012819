require 'pry'
require_relative './lib/book.rb'
require_relative './lib/player.rb'

player = {
  player_name: "Alan Anderson",
  number: 0,
  shoe: 16,
  points: 22,
  rebounds: 12,
  assists: 12,
  steals: 3,
  blocks: 1,
  slam_dunks: 1
}





calvin_and_hobbes = {
  title: "the essential calvin and hobbes",
  authors: ["bill waterson", "charles schulz"]
}

master_and_marg = {
  title: "the master and margarita",
  authors: ["mikhail bulgakov"]
}

book1 = Book.new("the essential calvin and hobbes", ["bill watterson", "charles schulz"])
book2 = Book.new("the master and margarita", ["mikhail bulgakov"])

player = Player.new("Alan Anderson", 0, 16, 22, 12)

Pry.start

'bye'
