class FixColumnTypeStocks < ActiveRecord::Migration[5.2]
  def change
    rename_column :stocks, :type, :category
  end
end
