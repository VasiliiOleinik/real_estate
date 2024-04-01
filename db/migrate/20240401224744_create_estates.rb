class CreateEstates < ActiveRecord::Migration[7.1]
  def change
    create_table :estates do |t|
      t.string :title, null: false
      t.string :property_type, null: false
      t.string :property_rooms, null: false
      t.string :estate_status, null: false
      t.string :country, null: false
      t.string :region, null: false
      t.string :location_details, null: false
      t.json :infrastructure, null: false
      t.string :price, null: false
      t.json :extra, null: false
      t.string :building_type, null: false
      t.string :energy_level, null: false
      t.json :media_contains, null: false
      t.string :ownership, null: false
      t.string :floor, null: false
      t.string :usefull_area, null: false
      t.json :listing_status, null: false
      t.string :description, null: false
      t.string :availability, null: false
      t.string :author, null: false
      t.timestamps
    end
  end
end
