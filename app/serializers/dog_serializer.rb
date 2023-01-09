class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :hunger, :happiness, :energy, :thirst, :potty, :adopted, :eat_gif, :image, :play_gif, :walk_gif, :jog_gif, :drink_gif, :pet_gif, :potty_gif, :treat_gif, :nap_gif, :treats
  has_one :user
end
