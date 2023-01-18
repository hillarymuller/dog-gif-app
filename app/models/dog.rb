class Dog < ApplicationRecord
  belongs_to :user, optional: true
  has_many :dog_treats
  has_many :treats, through: :dog_treats
  before_save :format_name

  validates :hunger, :thirst, :energy, :potty, :happiness, numericality: {in: 0..10}
  validates :eat_gif, :drink_gif, :pet_gif, :potty_gif, :treat_gif, :nap_gif, :walk_gif, :jog_gif, :play_gif, :image, presence: true, uniqueness: true

  scope :sort_by_name, -> {self.order(name: :desc)}
  def format_name
    self.name.upcase
  end
end
