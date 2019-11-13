const db = require("../data/db-config");

const find = () => {
  return db("users").select("id", "username");
};

const findBy = filter => {
  return db("users").where(filter);
};

const findById = id => {
  return db("users")
    .where({ id })
    .first();
};

const add = async user => {
  const [id] = await db("users").insert(user);

  return findById(id);
};

module.exports = {
  find,
  findBy,
  add
};
