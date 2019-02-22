class CreateParties < ActiveRecord::Migration[5.2]
  def change
    create_table :parties do |t|
      t.string :title
      t.integer :people
      t.boolean :food
      t.string :start_time
      t.string :end_time
      t.integer :incredible
      t.string :location

      t.timestamps
    end
  end
end
