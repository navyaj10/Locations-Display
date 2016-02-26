class Location
  include Mongoid::Document

  	field :id_mong
  	field :country
  	field :code
  	field :city

  	index({ id_mong: 1 }, { unique: true, name: "idm_index" }) 
end
