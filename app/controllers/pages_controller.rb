class PagesController < ApplicationController
  def home
    flash[:notice] = ""
  end

  def about
    flash[:notice] = ""
  end

  def brothers
    flash[:notice] = ""
    @values = []
    Dir.new("#{Rails.root}/app/assets/images/version2").each do |entry|
      if not File.directory?(entry)
        @values.push(entry)
      end
    end
    @values = @values.sort
  end

  def alumni
    flash[:notice] = ""
  end

  def recruitment
    flash[:notice] = ""
  end

  def contact
  end

  def download
    send_file("#{Rails.root}/public/application.doc", :type => "application/doc")
  end
  
end
