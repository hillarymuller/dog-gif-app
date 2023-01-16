class HouseholdSerializer < ActiveModel::Serializer
  attributes :id, :name, :users, :dogs
end
