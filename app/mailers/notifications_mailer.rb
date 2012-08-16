class NotificationsMailer < ActionMailer::Base

	default :from => "jchan621@gmail.com"
	default :to => "andykim90@gmail.com"

	def new_message(message)
		@message = message
		mail(:subject => "#{message.subject}")
	end
end
