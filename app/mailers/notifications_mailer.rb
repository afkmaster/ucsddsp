class NotificationsMailer < ActionMailer::Base

	default :from => "noreply.ucsddsp@gmail.com"
	default :to => "ucsd.dsp@gmail.com"

	def new_message(message)
		@message = message
		mail(:reply_to => "#{message.email}", :subject => "#{message.subject}")
	end
end
