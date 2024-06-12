class Api::V1::EstateController < ApplicationController
  before_action :authorize

  def index
    render json: { estates: Estate.all }, status: :ok
  end

  def create
    estate = Estate.create(estate_params.to_h)

    if estate.present?
      render json: { result: 'Successfully created!' }, status: :created
    else
      render json: { result: 'Creation failed!' }, status: :unprocessable_entity
    end
  end

  def show
    estate = Estate.find_by_id(params[:id])
    
    if estate.present?
      render json: estate, status: :ok
    else
      render json: {error: 'Estate not found'}, status: :unprocessable_entity
    end
  end

  def destroy
    estate = Estate.delete(params[:id])
    
    if estate.present?
      render json: { result: 'Successfully deleted!' }, status: :ok
    else
      render json: { result: 'Deletion failed!' }, status: :unprocessable_entity
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
