class Api::V1::ImagesController < ApplicationController
  def create
    file = file_params[:file]
    folderName = file_params[:estate_id]
    if !folderName
      render json: { error: 'Estate id is required' }, status: :bad_request
    end
    if file&.content_type&.in?(%w(image/png image/jpeg image/jpg))
      image = MiniMagick::Image.read(file.tempfile)
      file_name = "#{folderName}/#{file.original_filename}"
      UploadToAwsS3.upload(file_name, file.tempfile)
      render json: UploadToAwsS3.get_url(file_name), status: :ok
    else
      render json: { error: 'Must be an image file' }, status: :bad_request
    end
  end

  private

  def file_params
    params.permit(:file, :estate_id)
  end
end
