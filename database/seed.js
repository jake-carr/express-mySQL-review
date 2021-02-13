const db = require('./index.js');

let seed = [
  {
    'name': 'yahtzee',
    'rating': 2,
    'description': "luck based"
  },
  {
    'name': 'hearthstone',
    'rating': 4,
    'description': "modern yahtzee"
  },
  {
    'name': 'league',
    'rating': 7,
    'description': "not the worst"
  },
  {
    'name': 'dota',
    'rating': 3,
    'description': "worse league"
  },
  {
    'name': 'boardgames',
    'rating': 1,
    'description': "all boring"
  }
];

const seedFunc = () => {
  seed.forEach(game => {
    let queryStr = `INSERT INTO games (name, rating, description) VALUES ('${game.name}', ${game.rating}, '${game.description}')`
    let queryArgs = [``];
    db.query(queryStr, queryArgs, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('seeded', result);
      }
    })
  })


};

seedFunc();
