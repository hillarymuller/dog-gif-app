class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest, :dogs
  has_one :household
end
