const validateUser = user => {
  const errors = [];
  if (!user.username || user.username.length < 6) {
    errors.push("Username must be six characters or more");
  }
  if (!user.password || user.password.length < 6) {
    errors.push("Password must be six characters or more");
  }

  return {
    isSuccessful: errors.length ? false : true,
    errors
  };
};

module.exports = {
  validateUser
};
