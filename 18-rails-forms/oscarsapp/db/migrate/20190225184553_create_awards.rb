class CreateAwards < ActiveRecord::Migration[5.2]
  def change
    create_table :awards do |t|
      t.string :name
      t.string :category
      t.string :winner
      t.integer :year

      t.timestamps
    end
  end
end
