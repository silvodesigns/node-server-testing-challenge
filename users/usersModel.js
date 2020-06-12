const db = require('../database/dataConfig.js');

module.exports = {
  insert,
  remove,
  getAll,
  findById,
};

async function insert(user) {
  const [id] = await db('users').insert(user, 'id');
  return db('users').where({id}).first();
}

function remove(id) {
  return db('users').where({id}).del();
}

function getAll() {
  return db('users');
}

function findById(id) {
  return db('users')
  .where({ id })
  .first();
}
