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

ActiveRecord::Schema.define(version: 2023_01_09_220921) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dog_treats", force: :cascade do |t|
    t.bigint "dog_id", null: false
    t.bigint "treat_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id"], name: "index_dog_treats_on_dog_id"
    t.index ["treat_id"], name: "index_dog_treats_on_treat_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.integer "hunger"
    t.integer "happiness"
    t.integer "energy"
    t.integer "thirst"
    t.integer "potty"
    t.boolean "adopted"
    t.string "eat_gif"
    t.string "image"
    t.string "play_gif"
    t.string "walk_gif"
    t.string "jog_gif"
    t.string "drink_gif"
    t.string "pet_gif"
    t.string "potty_gif"
    t.string "treat_gif"
    t.string "nap_gif"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_dogs_on_user_id"
  end

  create_table "households", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "treats", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.bigint "household_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["household_id"], name: "index_users_on_household_id"
  end

  add_foreign_key "dog_treats", "dogs", on_delete: :cascade
  add_foreign_key "dog_treats", "treats"
end
