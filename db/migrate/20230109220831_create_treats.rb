class CreateTreats < ActiveRecord::Migration[6.1]
  def change
    create_table :treats do |t|
      t.string :name

      t.timestamps
    end
  end
end
