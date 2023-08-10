class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity
end
