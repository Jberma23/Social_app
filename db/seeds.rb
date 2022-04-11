# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user = User.create!  :email => 'jesse.ben.berman@gmail.com', :password => 'Richardm2011!', :password_confirmation => 'Richardm2011!', :first_name => 'Jesse', :last_name => 'Berman', :phone_number => '240-370-3371'

post1 = Post.create! :title => 'Test post', :body => 'Here is the body for the test post', :author => User.all.first.id

