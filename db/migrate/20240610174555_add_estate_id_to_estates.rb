class AddEstateIdToEstates < ActiveRecord::Migration[7.1]
  def change
    add_column :estates, :estate_id, :string
  end
end
