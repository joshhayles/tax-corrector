class CompSerializer < ActiveModel::Serializer
  attributes :id, :address, :year_built, :square_feet, :sold_price
end
