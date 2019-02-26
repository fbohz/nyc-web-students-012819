class CreateAliens < ActiveRecord::Migration[5.2]
  def change
    create_table :aliens do |t|
      t.string :meepmorp

      t.timestamps
    end
  end
end
