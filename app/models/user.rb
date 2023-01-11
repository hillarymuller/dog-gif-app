class User < ApplicationRecord
  belongs_to :household
  has_many :dogs

  validates :name, :username, :email, presence: true, uniqueness: true, length: {in: 4..20}
  validates :password, length: {in: 6..20}
  has_secure_password
end
