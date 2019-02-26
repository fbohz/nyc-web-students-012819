class CreateHumen < ActiveRecord::Migration[5.2]
  def change
    create_table :humen do |t|
      t.string :nickname
      t.integer :age
      t.string :last_seen
      t.boolean :missing
      t.integer :alien_id
      t.timestamps
    end
  end
end
