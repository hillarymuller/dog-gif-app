class DogTreatSerializer < ActiveModel::Serializer
  attributes :id
  has_one :dog
  has_one :treat
end
