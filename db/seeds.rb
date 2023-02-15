# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
rails db:reset 

Treat.create([{name: "pup pop"}, {name: "peanut butter"}, {name: "sweet potato"}, 
{name: "cheese"}, {name: "marshmallow"}, {name: "salmon jerky"}])

Dog.create([{
    name: "BRISCOE", 
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
    potty_gif: "",
    pet_gif: "https://media.giphy.com/media/H0MeRgAwyeEHdYL1fJ/giphy.gif", 
    treat_gif: "https://media.giphy.com/media/0rRxRnVpFtYGPSFteS/giphy-downsized-large.gif", 
    nap_gif: "https://media.giphy.com/media/DcmV8bjMhfTwqlamRe/giphy-downsized-large.gif",
    user_id: nil, 
    treats: Treat.all.filter{ |t| t.name != "salmon jerky" }},
    {
        name: "CHARLIE", 
        hunger: 10, 
        happiness: 0, 
        energy: 10, 
        thirst: 10, 
        potty: 10, 
        adopted: false, 
        eat_gif: "https://media.giphy.com/media/8cJvpGxyDlDmC0Ah0w/giphy.gif", 
        image: "https://media.giphy.com/media/Ok1zcocGFPWcwMwcfN/giphy.gif", 
        play_gif: "https://media.giphy.com/media/nuKYNDTQ8CkLzVy71g/giphy.gif", 
        walk_gif: "", 
        jog_gif: "", 
        drink_gif: "", 
        potty_gif: "https://media.giphy.com/media/v9WCy43hAzfiUKsc9e/giphy-downsized-large.gif",
        pet_gif: "https://media.giphy.com/media/pNlalLu9Hht3SCos4C/giphy-downsized-large.gif", 
        treat_gif: "https://media.giphy.com/media/5DXWSTYNX3nESyxhUI/giphy.gif", 
        nap_gif: "",
        user_id: nil, 
        treats: Treat.all},
        {name: "MAVERICK", 
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
    potty_gif: "",
    drink_gif: "https://media.giphy.com/media/ywr0kl6F9SQFHaiksx/giphy.gif", 
    pet_gif: "https://media.giphy.com/media/1budlDIicG96ydxuqK/giphy-downsized-large.gif", 
    treat_gif: "https://media.giphy.com/media/KwqzFY3H4PZssbYaSd/giphy.gif", 
    nap_gif: "https://media.giphy.com/media/lA8bp8pcOfzFkA5wQV/giphy-downsized-large.gif", 
    user_id: nil, 
    treats: Treat.all},
    {name: "NINA", 
    hunger: 10, 
    happiness: 0, 
    energy: 10, 
    thirst: 10, 
    potty: 10, 
    adopted: false, 
    eat_gif: "https://media.giphy.com/media/75TSed4SRSMQJDdonH/giphy-downsized-large.gif", 
    image: "https://media.giphy.com/media/3tEqyDYUTEZE2SHADf/giphy.gif", 
    play_gif: "https://media.giphy.com/media/x47etWFzZieD1zjAcy/giphy-downsized-large.gif", 
    walk_gif: "https://media.giphy.com/media/1hcYZrUmxPJUL55sYF/giphy.gif", 
    jog_gif: "https://media.giphy.com/media/N6IGZaIGweHrgXLLL3/giphy.gif", 
    potty_gif: "https://media.giphy.com/media/TdgZ7OlVUVaenpLclp/giphy.gif",
    drink_gif: "https://media.giphy.com/media/OSL7VtE14DNVI4rrer/giphy-downsized-large.gif", 
    pet_gif: "https://media.giphy.com/media/R1JG2w2tbEozBroI2n/giphy-downsized-large.gif", 
    treat_gif: "https://media.giphy.com/media/p5TzsUNTntTde4xmyz/giphy-downsized-large.gif", 
    nap_gif: "https://media.giphy.com/media/aTY8C55IqRefH5zmXB/giphy.gif", 
    user_id: nil, 
    treats: Treat.all},
    {
    name: "RILEY", 
    hunger: 10, 
    happiness: 0, 
    energy: 10, 
    thirst: 10, 
    potty: 10, 
    adopted: false, 
    eat_gif: "https://media.giphy.com/media/MXUkF4VJvWdOXD87HA/giphy-downsized-large.gif", 
    image: "https://media.giphy.com/media/YyLhbByS9BF97D1Eik/giphy.gif", 
    play_gif: "https://media.giphy.com/media/fZEpp7xXZpQ7xtudy3/giphy.gif", 
    walk_gif: "", 
    jog_gif: "", 
    drink_gif: "https://media.giphy.com/media/7yrmx8Cz0hjboQykUZ/giphy.gif", 
    potty_gif: "",
    pet_gif: "", 
    treat_gif: "https://media.giphy.com/media/dKdHOVKm6eW0KxQ3ZS/giphy-downsized-large.gif", 
    nap_gif: "",
    user_id: nil, 
    treats: Treat.all.filter{ |t| t.name != "marshmallow" }}
   
])