class Api::V1::EstateController < ApplicationController
  before_action :authorize

  def index
    estates = Estate.all
    render json: estates, status: :ok
  end

  def create
    estate = Estate.new(estate_params)

    if estate.save
      render json: estate, status: :created
    else
      render json: {error: 'Error creating estate'}, status: :unprocessable_entity
      end
    end

    def show
      estate = Estate.find(params[:id])
      if estate
        render json: estate, status: :ok
      else
        render json: {error: 'Estate not found'}, status: :not_found
      end
    end

    private
      def estate_params
        params.require(:estate).permit([
          :title,
          :property_type,
          :property_rooms,
          :estate_status,
          :country,
          :region,
          :location_details,
          :price,
          :extra,
          :building_type,
          :energy_level,
          :media_contains,
          :ownership,
          :floor,
          :usefull_area,
          :listing_status,
          :description,
          :availability,
          :author,
          :estate_id,
          infrastructure: {},
          extra: {},
          media_contains: [],
          listing_status: {},
        ])
  end
end
