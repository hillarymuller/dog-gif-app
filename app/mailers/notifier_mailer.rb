class NotifierMailer < ApplicationMailer
    default from: 'hillaryaward@gmail.com',
        return_path: 'hillaryaward@gmail.com'

    def dog_needs_attention(dog)
        @dog = dog
        @user = @dog.user
        mail(to: @user.email, 
        subject: "#{@dog.name} needs your attention, please")
    end
end
