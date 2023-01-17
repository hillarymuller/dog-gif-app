class Dog < ApplicationRecord
  belongs_to :user, optional: true
  has_many :dog_treats
  has_many :treats, through: :dog_treats

  validates :hunger, :thirst, :energy, :potty, :happiness, numericality: {in: 0..10}
end
