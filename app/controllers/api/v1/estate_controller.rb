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
        estate_params.require(:estate).permit([
          :title,
          :price,
          :country,
          :region,
          :description
        ])
  end
end
