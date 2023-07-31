class CreateBeverages < ActiveRecord::Migration[7.0]
  def change
    create_table :beverages do |t|
      t.string :name
      t.string :category
      t.string :image
      t.integer :price
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
