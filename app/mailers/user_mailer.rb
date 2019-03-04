class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.follow_itinerary.subject
  #
  def follow_itinerary(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to Le Wagon')
  end
end
