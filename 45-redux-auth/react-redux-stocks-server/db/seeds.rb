# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def stocks
  [
    { "id": 1,
      "ticker" :"GOOG",
      "name": "Google",
      "type": "Tech",
      "price": 1194
    },
    { "id": 2,
      "ticker" :"FB",
      "name": "Facebook",
      "type": "Tech",
      "price": 168
    },
    { "id": 3,
      "ticker" :"TWTR",
      "name": "Twitter",
      "type": "Tech",
      "price": 29
    },
    { "id": 4,
      "ticker" :"AMZN",
      "name": "Amazon",
      "type": "Tech",
      "price": 2013
    },
    { "id": 5,
      "ticker" :"V",
      "name": "Visa",
      "type": "Finance",
      "price": 150
    },
    { "id": 6,
      "ticker" :"BAC",
      "name": "Bank of America",
      "type": "Finance",
      "price": 29
    },
    { "id": 7,
      "ticker" :"JPM",
      "name": "JP Morgan",
      "type": "Finance",
      "price": 114
    },
    { "id": 8,
      "ticker" :"C",
      "name": "Citi Bank",
      "type": "Finance",
      "price": 72
    },
    { "id": 9,
      "ticker" :"NKE",
      "name": "Nike",
      "type": "Sportswear",
      "price": 84
    },
    { "id": 10,
      "ticker" :"UAA",
      "name": "Under Armour",
      "type": "Sportswear",
      "price": 21
    }
  ]
end

stocks.each do |stock|
  Stock.create(ticker: stock["ticker"], name: stock["name"], type: stock["type"], price: stock["price"])
end

10.times do
  User.create(username: Faker::TvShows::GameOfThrones.character, password: '123', balance: 5000)
end

