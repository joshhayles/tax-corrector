class HomeSerializer < ActiveModel::Serializer
  attributes :id, :address, :year_built, :"", :square_feet, :"", :proposed_value, :""
  has_one :user
end
