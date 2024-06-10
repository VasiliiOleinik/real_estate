class Api::V1::ImagesController < ApplicationController
  before_action :create_unique_filename, only: :create
  
  def create
    file = file_params[:file]
    folder_name = file_params[:estate_id]
    if !folder_name
      render json: { error: 'Estate id is required' }, status: :bad_request
    end
    if file&.content_type&.in?(%w(image/png image/jpeg image/jpg))
      image = MiniMagick::Image.read(file.tempfile)
      file_name = "#{folder_name}/#{file.original_filename}"
      UploadToAwsS3.upload(file_name, file.tempfile)
      render json: UploadToAwsS3.get_url(file_name), status: :ok
    else
      render json: { error: 'Must be an image file' }, status: :bad_request
    end
  end

  def destroy
    estate_id = destroy_params[:estate_id]
    file_name = destroy_params[:file_name]
    if !estate_id || !file_name
      render json: { error: 'Estate id and image name is required' }, status: :bad_request
      return
    end
    
    UploadToAwsS3.delete(estate_id, file_name)
    render json: { message: 'Image deleted successfully' }, status: :ok
  end

  private

  def file_params
    params.permit(:file, :estate_id)
  end

  def destroy_params
    params.permit(:estate_id, :file_name)
  end

  def create_unique_filename
    return if params[:file].original_filename.blank?

    extension = File.extname(params[:file].original_filename)
    params[:file].original_filename = "#{SecureRandom.uuid.first(10)}#{extension}"
  end
end
