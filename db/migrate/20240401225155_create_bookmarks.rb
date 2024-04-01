class CreateBookmarks < ActiveRecord::Migration[7.1]
  def change
    create_table :bookmarks do |t|
      t.string :user_id, null: false # User id
      t.string :estate_id, null: false # Estate id
      t.timestamps
    end

    add_index :bookmarks, :user_id, unique: true
    add_index :bookmarks, :estate_id, unique: true
  end
end
