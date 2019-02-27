class CreateScouts < ActiveRecord::Migration[5.2]
  def change
    create_table :scouts do |t|
      t.string :planet
      t.integer :age
      t.string :hair_color

      t.timestamps
    end
  end
end
