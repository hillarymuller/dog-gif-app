class Household < ApplicationRecord
    has_many :users
    has_many :dogs, through: :users

    validates :name, presence: true, uniqueness: true
end
