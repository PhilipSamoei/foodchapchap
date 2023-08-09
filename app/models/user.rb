class User < ApplicationRecord
  has_secure_password 
  
  has_many :orders
  has_many :reviews

  validates :username, presence: true, uniqueness: true
  def authenticate(pass)
    #compare bcrypt password to the one in the database
    BCrypt::Password.new(self.password_digest) == pass
  end
end
