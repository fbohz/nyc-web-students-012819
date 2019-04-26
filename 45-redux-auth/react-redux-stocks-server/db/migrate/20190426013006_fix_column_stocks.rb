class FixColumnStocks < ActiveRecord::Migration[5.2]
  def change
    rename_column :stocks, :ticket, :ticker
  end
end
