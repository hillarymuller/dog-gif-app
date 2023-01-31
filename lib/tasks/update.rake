namespace :update do
  desc "update dogs' needs every hour"
  task update_needs: :environment do
    Dog.find_each do |d|
      d.update(
        hunger: d.hunger < 10 ? d.hunger + 1 : 10,
        thirst: d.thirst < 10 ? d.thirst + 1 : 10,
        potty: d.potty < 9 ? d.potty + 2 : 10
      )
    end
  end

end
