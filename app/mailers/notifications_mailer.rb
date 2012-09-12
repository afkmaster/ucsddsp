class NotificationsMailer < ActionMailer::Base

	default :from => "jchan621@gmail.com"
	default :to => "jchan621@gmail.com"

	def new_message(message)
		@message = message
		mail(:reply_to => "#{message.email}", :subject => "#{message.subject}")
	end
end
