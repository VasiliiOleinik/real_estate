# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_04_01_225519) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.string "user_id", null: false
    t.string "estate_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["estate_id"], name: "index_bookmarks_on_estate_id", unique: true
    t.index ["user_id"], name: "index_bookmarks_on_user_id", unique: true
  end

  create_table "estates", force: :cascade do |t|
    t.string "title", null: false
    t.string "property_type", null: false
    t.string "property_rooms", null: false
    t.string "estate_status", null: false
    t.string "country", null: false
    t.string "region", null: false
    t.string "location_details", null: false
    t.json "infrastructure", null: false
    t.string "price", null: false
    t.json "extra", null: false
    t.string "building_type", null: false
    t.string "energy_level", null: false
    t.json "media_contains", null: false
    t.string "ownership", null: false
    t.string "floor", null: false
    t.string "usefull_area", null: false
    t.json "listing_status", null: false
    t.string "description", null: false
    t.string "availability", null: false
    t.string "author", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "phone_number", null: false
    t.string "role", null: false
    t.string "username", null: false
    t.string "avatar", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end