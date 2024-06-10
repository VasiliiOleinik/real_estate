class Estate < ApplicationRecord
  validates :title, :property_type, :estate_status, :country, :region, :price, :media_contains presence: true
  validates :price, numericality: { greater_than: 0 }
end
