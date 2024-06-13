class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :email, null: false # Email of the user
      t.string :password, null: false # Password of the user
      t.string :first_name, null: false # First name of the user
      t.string :last_name, null: false # Last name of the user
      t.string :phone_number, null: false # Phone number of the user
      t.string :role, null: false # Admin, User
      t.string :avatar, null: false # Avatar of the user
      
      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
