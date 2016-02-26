/**
 * Database seeds
 */
require('dotenv').config({ silent: true });
const massive = require('massive');

const db = massive.connectSync({ connectionString: process.env.DATABASE_URL });

// Add user
const addUser = (data) => {
  const defaultData = {
    name: 'Bob Barker',
  };

  db.users.save(Object.assign(defaultData, data), (err, inserted) => {
    if (err) return console.error(err);

    console.log('User added: ', inserted);

    db.end();
  });
};

module.exports = {
  addUser,
};
