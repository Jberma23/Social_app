class PostLike < ApplicationRecord
  belongs_to :post
  belongs_to :liker, :class_name => 'User', :foreign_key => 'liker_id'
end
