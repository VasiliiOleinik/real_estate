
# frozen_string_literal: true

class UploadToAwsS3
  BUCKET = "images-real-estate"

  class << self
    def get_url(name)
      s3_obj(name).public_url
    end

    def upload(name, body)
      obj = s3_obj(name)
      obj.put(body: body, acl: 'public-read')
    end

    def delete(estate_id, file_name)
      obj = s3_obj("#{estate_id}/#{file_name}")
      obj.delete
    end

    private

    def s3_obj(name)
      s3.bucket(BUCKET).object(key(name))
    end

    def key(name)
      name.downcase
    end

    def s3
      Aws::S3::Resource.new(
        region: 'eu-north-1',
        access_key_id: ENV['AWS_ACCESS_KEY_ID'],
        secret_access_key: ENV['AWS_SECRET_ACCESS_KEY']
        )
    end
  end
end
