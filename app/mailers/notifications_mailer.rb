class NotificationsMailer < ActionMailer::Base

	default :from => "andykim90@gmail.com"
	default :to => "andykim90@gmail.com"

	def new_message(message)
		@message = message
		mail(:subject => "#{message.subject}")
	end
end
