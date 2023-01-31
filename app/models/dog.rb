class Dog < ApplicationRecord
  belongs_to :user, optional: true
  has_many :dog_treats
  has_many :treats, through: :dog_treats
  before_save :format_name, :needs_attention
  

  validates :hunger, :thirst, :energy, :potty, :happiness, numericality: {in: 0..10}
  #validates :eat_gif, :drink_gif, :pet_gif, :potty_gif, :treat_gif, :nap_gif, :walk_gif, :jog_gif, :play_gif, :image, presence: true, uniqueness: true

  scope :sort_by_name, -> {self.order(name: :desc)}
  
  def format_name
    self.name = self.name.upcase
  end
  def needs_attention
    if self.hunger = 10
      NotifierMailer.dog_needs_attention(self).deliver_now
    end
  end
end
