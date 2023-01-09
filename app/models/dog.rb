class Dog < ApplicationRecord
  belongs_to :user, optional: true
  has_many :dog_treats
  has_many :treats, through: :dog_treats
end
