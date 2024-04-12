# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Estate.create([
  {
    title: "Villa in the hills",
    property_type: "Villa",
    property_rooms: "5",
    estate_status: "For Sale",
    country: "Italy",
    region: "Tuscany",
    location_details: "Hillside",
    infrastructure: {
      pool: true,
      garden: true,
      garage: true,
      parking: true,
    },
    price: "1,000,000",
    extra: {
      garden_area: "500",
      pool_area: "100",
      garage_area: "50",
      parking_area: "100",
    },
    building_type: "Detached",
    energy_level: "A",
    media_contains: [
      'https://a0.muscache.com/im/pictures/3eecd743-a30f-4914-ba9a-17425acfb603.jpg?im_w=1200',
      'https://a0.muscache.com/im/pictures/fc989f8f-a54e-4e95-99a3-ca6825192c3a.jpg?im_w=1440',
      'https://a0.muscache.com/im/pictures/c296d11b-052c-4d17-b7d2-1c90616eaaac.jpg?im_w=1440',
      'https://a0.muscache.com/im/pictures/2d046694-e600-41ad-8f20-4d9bcaaa5c88.jpg?im_w=1440',
      'https://a0.muscache.com/im/pictures/7b2b5733-8e69-49dd-b6e1-7a91670d1454.jpg?im_w=1440',
      'https://a0.muscache.com/im/pictures/b7ecd241-6599-4dbe-9bfd-3ea047e2cb23.jpg?im_w=1440',
      'https://a0.muscache.com/im/pictures/941b58b4-a157-4630-b6fa-91b852b5fca9.jpg?im_w=1440',
      'https://a0.muscache.com/im/pictures/3341723d-2ee7-4aa8-bf77-4c895a08f516.jpg?im_w=1440'
    ],
    ownership: "Freehold",
    floor: "2",
    usefull_area: "300",
    listing_status: {
      published: true,
      featured: true,
      verified: true,
    },
    description: "This beautiful villa is located in the hills of Tuscany. It has a pool, garden, garage, and parking. The property is detached and has an energy level of A. The villa has 5 rooms and is for sale for 1,000,000. The garden area is 500, the pool area is 100, the garage area is 50, and the parking area is 100. The villa has 2 floors and a useful area of 300. The property is freehold and is available for purchase. The author of this listing is John Doe.",
    availability: "Available",
    author: "John Doe",
  },
])
