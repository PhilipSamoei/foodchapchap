class Restaurant < ApplicationRecord
  has_many :dishes
  has_many :beverages
  has_many :reviews
  has_many :orders
end
