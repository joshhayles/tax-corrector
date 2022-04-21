class User < ApplicationRecord
    has_secure_password
    has_many :favorites, dependent: :destroy
    has_many :comps, through: :favorites

    validates :username, presence: true, uniqueness: true
end
