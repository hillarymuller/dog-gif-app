class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :hunger
      t.integer :happiness
      t.integer :energy
      t.integer :thirst
      t.integer :potty
      t.boolean :adopted
      t.string :eat_gif
      t.string :image
      t.string :play_gif
      t.string :walk_gif
      t.string :jog_gif
      t.string :drink_gif
      t.string :pet_gif
      t.string :potty_gif
      t.string :treat_gif
      t.string :nap_gif
      t.references :user

      t.timestamps
    end
  end
end
