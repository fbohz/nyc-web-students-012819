class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :subject
      t.string :grade
      t.string :prequisites

      t.timestamps
    end
  end
end
