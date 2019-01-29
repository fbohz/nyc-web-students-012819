# player = {
#   player_name: "Alan Anderson",
#   number: 0,
#   shoe: 16,
#   points: 22,
#   rebounds: 12,
#   assists: 12,
#   steals: 3,
#   blocks: 1,
#   slam_dunks: 1
# }


class Player

  # macro
  attr_accessor :points, :name, :shoe, :rebounds, :number
  # attr_writer :name, :points, :shoe, :rebounds, :number

  # READER
  # def points
  #   @points
  # end

  def initialize(name, number, shoe, points, rebounds)
    @name = name
    @number = number
    @shoe = shoe
    @points = points
    @rebounds = rebounds
  end

  # # WRITER
  # def name=(name)
  #   @name = name
  # end

end
