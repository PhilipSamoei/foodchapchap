class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :dish_id
      t.integer :beverage_id
      t.integer :total_price
      t.string :estimated_time

      t.timestamps
    end
  end
end
