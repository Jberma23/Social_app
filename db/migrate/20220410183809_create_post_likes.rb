class CreatePostLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :post_likes do |t|
      t.references :post, null: false, foreign_key: true
      t.references :liker, {to_table: :users}

      t.timestamps
    end
  end
end
