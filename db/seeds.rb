# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Restaurant.create([
  { name: 'KFC ', address: 'Kimathi Street, Nairobi', ambience: 5,image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/msnbc/Components/Photos/061113/061113_kfc_logo_vmed5p.jpg'},
  { name: 'About Thyme Restaurant', address: 'Eldama Ravine Road, Westlands, Nairobi', ambience: 4,image: 'https://cdn.dribbble.com/users/1296676/screenshots/4914655/media/1281737993525a5092ca67c974c46095.jpg?resize=400x0 '},
  { name: 'Cafe Deli', address: 'Moi Avenue', ambience: 4,image: 'data:image/png;base64,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 '},
  { name: 'Abyssinia Restaurant', address: 'Westlands (my favorite) and Kilimani', ambience: 3,image: 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/36fcc7c5-5abd-4657-bbd2-95c3a5e327b6.png '},
  { name: 'Kilimanjaro Jamia', address: 'Kimathi Street, Nairobi', ambience: 4,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFknjYta3qXFa-gZNNZGZ2-2bdhVUzsL-cA3cATBmDpEP4i0jBQsFC2YjXPP3eOLYuRcI&usqp=CAU '},
  { name: 'Mama Oliech', address: 'Marcus Garvey Road, Kilimani', ambience: 4,image: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000 '},
  { name: 'The Carnivore Restaurant ', address: ' Langata road, near Wilson Airport, Nairobi', ambience: 3 ,image: 'https://www.musicinafrica.net/sites/default/files/images/music_professional_profile/201406/thecarnivorelogo2edit.jpg'},
  { name: 'The Talisman', address: 'Ngong Road, Nairobi', ambience: 3,image: 'https://pbs.twimg.com/profile_images/888295509147893761/JnViybm5_400x400.jpg '},
  { name: 'Acacia Restaurant', address: 'Emara Ole-Sereni Hotel, Nairobi', ambience: 4,image: 'https://themeparkzoo.com/wp-content/uploads/elementor/thumbs/Gaiazoo-Restaurant-Acacia-scaled-prpf76ndqlaofwpgm6vvilq3b74c7nsovtp5jfgsj4.jpg'},
  { name: 'Mambo Italia', address: 'Lavington, Garden City Mall, Westlands', ambience: 4,image: 'https://shop-logos.imgix.net/shops/27473/original/mambaa.PNG?auto=compress,format '},
  { name: 'Fogo Gaucho, Kilimani', address: 'Galana Plaza, Kilimani', ambience: 3 ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQ2wmHjUyCDwzv877Lt1G1DjSDVwCDpPryA&usqp=CAU '}

])
puts "restaurants"
Dish.create([
  { name: 'pizza', category: 'Pizza', restaurant_id: 1,image: 'https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg ' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 2,image: 'https://img.freepik.com/free-photo/slice-fresh-pizza-with-pepperoni-white_144627-24389.jpg?size=626&ext=jpg ' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 3,image: 'https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?size=626&ext=jpg ' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 4,image: 'https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?size=626&ext=jpg ' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 5,image: 'https://img.freepik.com/free-photo/delicious-italian-food_1147-165.jpg?size=626&ext=jpg ' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 6,image: 'https://img.freepik.com/free-photo/pizza-pepperoni-table_140725-5396.jpg?size=626&ext=jpg&ga=GA1.2.606411282.1690526406&semt=ais ' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 7,image: 'https://img.freepik.com/free-photo/still-life-fast-food-dishes_23-2149187953.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 8,image: 'https://img.freepik.com/free-photo/hawaiian-pizza_74190-2500.jpg?size=626&ext=jpg ' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 9,image: 'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais ' , price: '1100'},
  { name: 'pizza', category: 'Pizza', restaurant_id: 10,image: 'https://img.freepik.com/premium-photo/traditional-homemade-pizza-ready-eat_183583-1.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais ' , price: '1100'},
  { name: 'coffee', category: 'American food', restaurant_id: 1,image: 'https://img.freepik.com/free-vector/realistic-coffee-background_79603-1650.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'chicken', category: 'American food', restaurant_id: 2,image: 'https://img.freepik.com/premium-photo/fried-chicken-legs-with-lemon-parsley_266870-45.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'chicken', category: 'American food', restaurant_id: 3,image: 'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_23-2149973026.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais ' , price: '1100'},
  { name: 'burger', category: 'American food', restaurant_id: 8,image: 'https://img.freepik.com/free-photo/front-view-burgers-stand_141793-15545.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'tea', category: 'American food', restaurant_id: 4,image: 'https://img.freepik.com/free-vector/glass-cup-black-tea_1182-1254.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'coffee', category: 'American food', restaurant_id: 5,image: 'https://img.freepik.com/free-photo/cup-coffee-with-coffee-beans-grinder-background_1112-430.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'burger', category: 'American food', restaurant_id: 6,image: 'https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'chicken', category: 'American food', restaurant_id: 7,image: 'https://img.freepik.com/free-photo/close-up-fried-chicken-drumsticks_23-2148682835.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'coffee', category: 'American food', restaurant_id: 9,image: 'https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'tea', category: 'American food', restaurant_id: 10,image: 'https://img.freepik.com/free-vector/pouring-tea-realistic-composition-with-isolated-illustration_1284-54135.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'pork', category: 'Fast food', restaurant_id: 1,image: 'https://img.freepik.com/free-photo/beef-steak_74190-5930.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais ' , price: '1100'},
  { name: 'chips', category: 'Fast food', restaurant_id: 2,image: 'https://img.freepik.com/free-photo/fresh-potatoes-fri-with-souce_144627-5503.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'chapati', category: 'Fast food', restaurant_id: 3,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypOYB3dQFka6cOSvUYhrBU7bHI2aRbjUwLw&usqp=CAU' , price: '1100'},
  { name: 'burger', category: 'Fast food', restaurant_id: 4,image: 'https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'pizza', category: 'Fast food', restaurant_id: 5,image: 'https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?size=626&ext=jpg ' , price: '1100'},
  { name: 'pizza', category: 'Fast food', restaurant_id: 6,image: 'https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?size=626&ext=jpg ' , price: '1100'},
  { name: 'pork', category: 'Fast food', restaurant_id: 7,image: 'https://img.freepik.com/free-photo/pork-chop-steak_1339-5913.jpg?size=626&ext=jpg&ga=GA1.2.606411282.1690526406&semt=ais ' , price: '1100'},
  { name: 'chips', category: 'Fast food', restaurant_id: 8,image: 'https://img.freepik.com/free-photo/french-fries_1339-1364.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'burger', category: 'Fast food', restaurant_id: 9,image: 'https://img.freepik.com/free-photo/front-view-burgers-stand_141793-15545.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'pork', category: 'Fast food', restaurant_id: 10,image: 'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27386.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais ' , price: '1100'},
  { name: 'coconut rice', category: 'Swahili dishes', restaurant_id: 5 ,image: 'https://www.budgetbytes.com/wp-content/uploads/2022/04/Coconut-RIce-plate.jpg', price: '1100'},
  { name: 'maharage ya nazi: ', category: 'Swahili dishes', restaurant_id: 6 ,image: 'https://i.ytimg.com/vi/oJ7D1FKxEdM/maxresdefault.jpg',price: '1200'},
  { name: 'mchuzi wa samaki', category: 'Swahili dishes', restaurant_id: 7 ,image: 'https://i.ytimg.com/vi/NUrtooX7wPk/maxresdefault.jpg',price:'1200'},
  { name: 'ndizi kaanga: ', category: 'Swahili dishes', restaurant_id: 8 ,image: 'https://www.tasteatlas.com/images/dishes/c26d6b0c6a6d4e7883eaec864e7f4284.jpg',price:'1200'},
  { name: 'kuku wa kupaka', category: 'Swahili dishes', restaurant_id: 9 ,image: 'https://weeatatlast.com/wp-content/uploads/2021/02/East-African-Kuku-Paka-Recipe.jpg',price:'1200'},
  { name: 'ndizi nyama:', category: 'Swahili dishes', restaurant_id: 10 ,image: 'https://togetherwomenrise.org/wp-content/uploads/2018/10/2018.11-WISER-PROVEN-Kenyan-Beef-Stew.jpg',price:'1200'},
  { name: 'mshikaki:', category: 'Swahili dishes', restaurant_id: 4 ,image: 'https://lh3.googleusercontent.com/FsFgo0aB5WCsdal6VCtrGo-JIRMT00wTkovsULMij0FouzF8sKAwBpXkd6MYYiDxPgj8GzlEgEqGwF-TNHwvlQVzYp96VeAei0IDuFMl=s722',price:'1200'},
  { name: 'chicken biryani', category: 'Swahili dishes', restaurant_id: 3 ,image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg',price:'1200'},
  { name: 'bajia', category: 'Swahili dishes', restaurant_id: 2, image: 'https://weeatatlast.com/wp-content/uploads/2021/02/East-African-Kuku-Paka-Recipe.jpg',price:'1200'},
  { name: 'nyama choma', category: 'Swahili dishes', restaurant_id: 1,  image: 'https://ling-app.com/wp-content/uploads/2022/03/Nyama-Choma-1.jpg',price:'1200'},
  { name: 'noodles', category: 'Chinese dishes', restaurant_id: 1 , image: 'https://img.freepik.com/free-photo/noodles-with-beef-vegetables-black-table_141793-1729.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: 'chinese chicken', category: 'Chinese dishes', restaurant_id: 2 ,image: 'https://img.freepik.com/free-photo/fried-chicken-with-red-green-chili-peppers-onion-plate_141793-1657.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: 'chicken zucchini', category: 'Chinese dishes', restaurant_id: 3, image: 'https://img.freepik.com/free-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion_2829-10786.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: 'chinese chicken', category: 'Chinese dishes', restaurant_id: 4 ,image: 'https://img.freepik.com/free-photo/bowl-asian-food-with-rice-chopsticks_23-2148382877.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: 'noodles with sauce croutons', category: 'Chinese dishes', restaurant_id: 5, image: 'https://img.freepik.com/free-photo/front-view-fried-noodles-with-sauce-croutons-table_141793-17474.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: 'rice and herbs', category: 'Chinese dishes', restaurant_id: 6 ,image: 'https://img.freepik.com/free-photo/top-view-asian-dish-with-rice-herbs_23-2148694338.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: 'noodules', category: 'Chinese dishes', restaurant_id: 7 ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQJvETmrjkExiG1TIFnI-9J-el1jg9QtGtzzom7CttOdaw-f8L4ABcGjjlYPbnPbrP6o&usqp=CAU',price:'1200'},
  { name: 'rice and meat', category: 'Chinese dishes', restaurant_id: 8 ,image: 'https://img.freepik.com/free-photo/top-view-asian-rice-dish-with-meat-chopsticks_23-2148694344.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: 'yuba cucumber', category: 'Chinese dishes', restaurant_id: 9 ,image: 'https://img.freepik.com/free-photo/side-view-yuba-cucumber-with-sauce_141793-2697.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: 'chicken with vegetables', category: 'Chinese dishes', restaurant_id: 10, image: 'https://img.freepik.com/free-photo/rice-noodles-with-chicken-vegetables_23-2148195642.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais',price:'1200'},
  { name: ' risotto', category: 'Italian dishes', restaurant_id: 1 ,image: 'https://poshjournal.com/wp-content/uploads/2021/08/orzo-risotto-recipe-3.jpg',price:'1500'},
  { name: 'pasta', category: 'Italian dishes', restaurant_id: 2 ,image: 'https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg',price:'1000'},
  { name: 'lasagne', category: 'Italian dishes', restaurant_id: 3 ,image: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/01/lasagne-768x960.jpg',price:'2500'},
  { name: 'polenta with parmesan cheese', category: 'Italian dishes', restaurant_id: 4, image: 'https://familystylefood.com/wp-content/uploads/2021/09/Parm-Polenta-1.jpg',price:'600'},
  { name: 'tortelli and ravioli', category: 'Italian dishes', restaurant_id: 5, image: 'https://www.chefspencil.com/wp-content/uploads/Agnolotti-del-plin-960x960.jpg.webp',price:'1000'},
  { name: 'fiorentina', category: 'Italian dishes', restaurant_id:6,  image: 'https://www.chefspencil.com/wp-content/uploads/Fiorentina-960x960.jpg.webp',price:'2000'},
  { name: 'minestrone', category: 'Italian dishes', restaurant_id: 7 ,image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/11/minestrone-soup.jpg',price:'900'},
  { name: 'arrosticini', category: 'Italian dishes', restaurant_id: 8 ,image: 'https://yourguardianchef.com/wp-content/uploads/2023/04/Arrosticini-mutton-8.jpg',price:'1200'},
  { name: 'sardine in saor', category: 'Italian dishes', restaurant_id: 9, image: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/324137-1-eng-GB_4911.jpg',price:'1500'},
  { name: 'arancini', category: 'Italian dishes', restaurant_id: 10, image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/arancini_balls-db2b1df.jpg',price:'1000'}
])
puts "Dishes"

Beverage.create([
  { name: 'cola drink', category: 'Soft drink', restaurant_id: 1,image: ' https://img.freepik.com/free-photo/fresh-cola-drink-with-green-lime_144627-12396.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'cola drink', category: 'Soft drink', restaurant_id: 2,image: ' https://img.freepik.com/free-photo/fresh-cola-drink-with-green-lime_144627-12396.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'cola drink', category: 'Soft drink', restaurant_id: 3,image: ' https://img.freepik.com/free-photo/fresh-cola-drink-with-green-lime_144627-12396.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph ' , price: '1100'},
  { name: 'orange juice', category: 'juice', restaurant_id: 2,image: 'https://img.freepik.com/free-vector/orange-juice_1284-825.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'orange juice', category: 'juice', restaurant_id: 4,image: 'https://img.freepik.com/free-vector/orange-juice_1284-825.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'orange juice', category: 'juice', restaurant_id: 5,image: 'https://img.freepik.com/free-vector/orange-juice_1284-825.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'Milk shake', category: 'Milk shake', restaurant_id: 3,image: 'https://img.freepik.com/free-photo/selection-milkshake-glasses-with-fruits-chocolate_23-2148707758.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'Milk shake', category: 'Milk shake', restaurant_id: 6,image: 'https://img.freepik.com/free-photo/selection-milkshake-glasses-with-fruits-chocolate_23-2148707758.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'Milk shake', category: 'Milk shake', restaurant_id: 7,image: 'https://img.freepik.com/free-photo/selection-milkshake-glasses-with-fruits-chocolate_23-2148707758.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=sph' , price: '1100'},
  { name: 'watermelon juice', category: 'juice', restaurant_id: 4,image: 'https://img.freepik.com/free-photo/cold-watermelon-smoothie-dark-background_1150-41818.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'watermelon juice', category: 'juice', restaurant_id: 8,image: 'https://img.freepik.com/free-photo/cold-watermelon-smoothie-dark-background_1150-41818.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'watermelon juice', category: 'juice', restaurant_id: 9,image: 'https://img.freepik.com/free-photo/cold-watermelon-smoothie-dark-background_1150-41818.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'ice tea with mint', category: 'Soft drink', restaurant_id: 5,image: 'https://img.freepik.com/free-photo/ice-tea-with-mint_144627-41799.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'ice tea with mint', category: 'Soft drink', restaurant_id: 10,image: 'https://img.freepik.com/free-photo/ice-tea-with-mint_144627-41799.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'ice tea with mint', category: 'Soft drink', restaurant_id: 1,image: 'https://img.freepik.com/free-photo/ice-tea-with-mint_144627-41799.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'banana Milk shake with choco', category: 'Milk shake', restaurant_id: 6,image: 'https://img.freepik.com/free-photo/chocolate-smoothie-with-choco-syrup-branch-bananas_114579-33866.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'banana Milk shake with choco', category: 'Milk shake', restaurant_id: 2,image: 'https://img.freepik.com/free-photo/chocolate-smoothie-with-choco-syrup-branch-bananas_114579-33866.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'banana Milk shake with choco', category: 'Milk shake', restaurant_id: 3,image: 'https://img.freepik.com/free-photo/chocolate-smoothie-with-choco-syrup-branch-bananas_114579-33866.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'mango juice', category: 'juice', restaurant_id: 7,image: 'https://img.freepik.com/free-photo/mango-juice-glass-dark-surface_1150-41957.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'mango juice', category: 'juice', restaurant_id: 4,image: 'https://img.freepik.com/free-photo/mango-juice-glass-dark-surface_1150-41957.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'mango juice', category: 'juice', restaurant_id: 5,image: 'https://img.freepik.com/free-photo/mango-juice-glass-dark-surface_1150-41957.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'cola drink', category: 'Soft drink', restaurant_id: 8,image: 'https://img.freepik.com/free-photo/ice-falling-into-glass-with-brown-drink_1194-1154.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'cola drink', category: 'Soft drink', restaurant_id: 6,image: 'https://img.freepik.com/free-photo/ice-falling-into-glass-with-brown-drink_1194-1154.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'cola drink', category: 'Soft drink', restaurant_id: 7,image: 'https://img.freepik.com/free-photo/ice-falling-into-glass-with-brown-drink_1194-1154.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'coffe glise chocolate', category: 'Milk shake', restaurant_id: 9,image: 'https://img.freepik.com/free-photo/coffee-glisse-cream-chocolate-sauceside-view_141793-2345.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'coffe glise chocolate', category: 'Milk shake', restaurant_id: 8,image: 'https://img.freepik.com/free-photo/coffee-glisse-cream-chocolate-sauceside-view_141793-2345.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'coffe glise chocolate', category: 'Milk shake', restaurant_id: 10,image: 'https://img.freepik.com/free-photo/coffee-glisse-cream-chocolate-sauceside-view_141793-2345.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'Milk shake', category: 'Milk shake', restaurant_id: 10,image: 'https://img.freepik.com/free-photo/milkshake-set-table_140725-9239.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'Milk shake', category: 'Milk shake', restaurant_id: 1,image: 'https://img.freepik.com/free-photo/milkshake-set-table_140725-9239.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'},
  { name: 'Milk shake', category: 'Milk shake', restaurant_id: 2,image: 'https://img.freepik.com/free-photo/milkshake-set-table_140725-9239.jpg?size=626&ext=jpg&ga=GA1.1.606411282.1690526406&semt=ais' , price: '1100'}
])

puts "beverages"
User.create(
  [
    {
      username: "issac_satterfield",
      email: "sherri_farrell@sipes.example",
      password: "password",
      image: "https://i.pinimg.com/564x/47/8f/d8/478fd85dadad2bae3a6450196573fa60.jpg"

    },
    {
      username: "marco",
      email: "rossana.nienow@kovacek.example",
      password: "password",
      image: "https://i.pinimg.com/564x/67/90/60/679060d15d1dbd809ff81fe1cbe60748.jpg"
    },
    {
      username: "franklyn",
      email: "thanh@will.example",
      password: "password",
      image: "https://i.pinimg.com/564x/19/aa/9f/19aa9f32f03943dd01d6e22a920a72b0.jpg"
    },
    {
      username: "rico_stiedemann",
      email: "syble@durgan-emard.test",
      password: "password",
      image: "https://i.pinimg.com/564x/df/d2/37/dfd237adc64b44cb076b92a6e8f2df02.jpg"
    },
    {
      username: "maximina_walsh",
      email: "carlena@schowalter-schmidt.test",
      password: "password",
      image: "https://i.pinimg.com/564x/da/43/84/da438437df08d8eff9bb83bbb5303fb9.jpg"
    }
  ]
  
)


user_ids = (1..5).to_a

# Create blogs using the sample data
Blog.create([
  {
    title: "Getting Started with Blogging",
    content: "In this post, we will explore the basics of starting a blog...",
    user_id: user_ids.sample,
    publication_date: DateTime.now,
    updated_at: DateTime.now
  },
  {
    title: "10 Tips for Writing Engaging Content",
    content: "Writing engaging content is essential for keeping readers...",
    user_id: user_ids.sample,
    publication_date: DateTime.now - 1.day,
    updated_at: DateTime.now - 1.day
  },
  {
    title: "Getting Started with Blogging",
    content: "In this post, we will explore the basics of starting a blog...",
    user_id: user_ids.sample,
    publication_date: DateTime.now,
    updated_at: DateTime.now
  },
  {
    title: "10 Tips for Writing Engaging Content",
    content: "Writing engaging content is essential for keeping readers...",
    user_id: user_ids.sample,
    publication_date: DateTime.now - 1.day,
    updated_at: DateTime.now - 1.day
  },
  {
    title: "Getting Started with Blogging",
    content: "In this post, we will explore the basics of starting a blog...",
    user_id: user_ids.sample,
    publication_date: DateTime.now,
    updated_at: DateTime.now
  },
  {
    title: "10 Tips for Writing Engaging Content",
    content: "Writing engaging content is essential for keeping readers...",
    user_id: user_ids.sample,
    publication_date: DateTime.now - 1.day,
    updated_at: DateTime.now - 1.day
  },
  {
    title: "Getting Started with Blogging",
    content: "In this post, we will explore the basics of starting a blog...",
    user_id: user_ids.sample,
    publication_date: DateTime.now,
    updated_at: DateTime.now
  },
  {
    title: "10 Tips for Writing Engaging Content",
    content: "Writing engaging content is essential for keeping readers...",
    user_id: user_ids.sample,
    publication_date: DateTime.now - 1.day,
    updated_at: DateTime.now - 1.day
  },
  {
    title: "Getting Started with Blogging",
    content: "In this post, we will explore the basics of starting a blog...",
    user_id: user_ids.sample,
    publication_date: DateTime.now,
    updated_at: DateTime.now
  },
  {
    title: "10 Tips for Writing Engaging Content",
    content: "Writing engaging content is essential for keeping readers...",
    user_id: user_ids.sample,
    publication_date: DateTime.now - 1.day,
    updated_at: DateTime.now - 1.day
  }
])

puts 'Seed data created successfully!'