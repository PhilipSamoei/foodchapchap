class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :name
      t.string :email
      t.string :password
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
