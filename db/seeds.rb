
#bundle install faker

Home.destroy_all
User.destroy_all
Comp.destroy_all

puts 'Seeding ...'

puts 'Creating Users...'

20.times do
    User.create(
        username: Faker::Name.first_name, 
        password: "123"
        )
end

puts 'Creating comps...'

20.times do
    Comp.create(
        year_built: rand(2000..2020), 
        square_feet: rand(3600..5000), 
        sold_price: rand(400000..700000)
        )
end

puts 'Creating homes...'

20.times do
    Home.create(
        address: Faker::Address.street_address,
        year_built: rand(2000..2020),
        square_feet: rand(3600..5000),
        proposed_value: rand(500000..800000),
        user_id: User.pluck(:id).sample,
    )
end

puts 'DONE! ROCK ON!!'

