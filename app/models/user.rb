class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :posts, foreign_key: "author_id", class_name: "Post"
  has_many :comments, foreign_key: "commenter_id", class_name: "PostComment"
  has_many :liked_posts, foreign_key: "liker_id", class_name: "PostLike"
  has_and_belongs_to_many :friendships, class_name: "User", join_table:  :friendships,foreign_key: :user_id, association_foreign_key: :friend_user_id

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
# validates :username, uniqueness: { case_sensitive: false }, presence: true, allow_blank: false, format: { with: /\A[a-zA-Z0-9]+\z/ }


  # def generate_jwt
  #   JWT.encode({ id: id,
  #             exp: 60.days.from_now.to_i },
  #             Rails.application.secrets.secret_key_base)
  # end
end
