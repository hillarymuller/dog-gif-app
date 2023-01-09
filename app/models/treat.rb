class Treat < ApplicationRecord
    has_many :dog_treats
    has_many :dogs, through: :dog_treats
    
    validates :name, presence: true, uniqueness: true
end
