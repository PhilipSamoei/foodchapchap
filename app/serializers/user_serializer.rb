class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :isAdmin, :password_digest
end
