class ApplicationRecord < ActiveRecord::Base
  extend DynamoDB
  primary_abstract_class
end
