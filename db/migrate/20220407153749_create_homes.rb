class CreateHomes < ActiveRecord::Migration[7.0]
  def change
    create_table :homes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :address
      t.string :year_built
      t.string :square_feet
      t.integer :proposed_value

      t.timestamps
    end
  end
end
