class PostComment < ApplicationRecord
  belongs_to :post
  belongs_to :commenter, :class_name => 'User', :foreign_key => 'commenter_id'
end
