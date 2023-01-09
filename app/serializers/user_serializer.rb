class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest
  has_one :household
end
