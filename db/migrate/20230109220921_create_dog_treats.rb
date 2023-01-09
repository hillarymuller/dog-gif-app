class CreateDogTreats < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_treats do |t|
      t.references :dog, null: false, foreign_key: true
      t.references :treat, null: false, foreign_key: true

      t.timestamps
    end
  end
end
