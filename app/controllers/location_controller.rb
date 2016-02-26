class LocationController < ApplicationController
  def home
  	@count = 0
  	@data = File.read('data_file.json')
	@datatab = JSON.parse(@data)

	@datatab.each do |item|
		Location.create!(id_mong: "#{@count}", country: "#{item["country"]}", code: "#{item["code"]}", city: "#{item["city"]}")
      	@count = @count + 1
	end

  end

  def show
  	@numsent = params[:dataset]
    @datacalled = Location.where(id_mong: "#{@numsent}")
		  
    render :partial => 'show'
  end

end
