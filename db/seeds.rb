# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Treat.create([{name: "pup pop"}, {name: "peanut butter"}, {name: "sweet potato"}, 
{name: "cheese"}, {name: "marshmallow"}, {name: "salmon jerky"}])

Dog.create([{
    name: "Briscoe", 
    hunger: 10, 
    happiness: 0, 
    energy: 10, 
    thirst: 10, 
    potty: 10, 
    adopted: false, 
    eat_gif: "", 
    image: "https://media.giphy.com/media/ISneFKWJJesVIHQToy/giphy.gif", 
    play_gif: "https://media.giphy.com/media/I155Ea8FczLudTFFOw/giphy-downsized-large.gif", 
    walk_gif: "https://media.giphy.com/media/DsAkIXEkxh8RWzGLXZ/giphy-downsized-large.gif", 
    jog_gif: "https://media.giphy.com/media/pY8UuMzm8ju3Re0oov/giphy.gif", 
    drink_gif: "", 
    pet_gif: "https://media.giphy.com/media/H0MeRgAwyeEHdYL1fJ/giphy.gif", 
    treat_gif: "https://media.giphy.com/media/0rRxRnVpFtYGPSFteS/giphy-downsized-large.gif", 
    nap_gif: "https://media.giphy.com/media/DcmV8bjMhfTwqlamRe/giphy-downsized-large.gif",
    user_id: nil, 
    treats: Treat.all.filter{ |t| t.name != "salmon jerky" }},
    {name: "Maverick", 
    hunger: 10, 
    happiness: 0, 
    energy: 10, 
    thirst: 10, 
    potty: 10, 
    adopted: false, 
    eat_gif: "https://media.giphy.com/media/gf7DHzmPVdlmfJDwTw/giphy-downsized-large.gif", 
    image: "https://media.giphy.com/media/CE3SjWCpKTmWTqdT8p/giphy.gif", 
    play_gif: "https://media.giphy.com/media/hfM3c245ajxwmWS4m0/giphy.gif", 
    walk_gif: "", 
    jog_gif: "", 
    drink_gif: "https://media.giphy.com/media/ywr0kl6F9SQFHaiksx/giphy.gif", 
    pet_gif: "https://media.giphy.com/media/1budlDIicG96ydxuqK/giphy-downsized-large.gif", 
    treat_gif: "https://media.giphy.com/media/KwqzFY3H4PZssbYaSd/giphy.gif", 
    nap_gif: "https://media.giphy.com/media/KwqzFY3H4PZssbYaSd/giphy.gif", 
    user_id: nil, 
    treats: Treat.all}
])