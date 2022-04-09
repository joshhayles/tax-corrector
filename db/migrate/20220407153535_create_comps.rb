class CreateComps < ActiveRecord::Migration[7.0]
  def change
    create_table :comps do |t|
      t.string :address
      t.string :year_built
      t.string :square_feet
      t.string :sold_price

      t.timestamps
    end
  end
end
