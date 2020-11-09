exports.saveUser = "INSERT INTO user(email, password, name) VALUES(?,?,?)";
exports.getUserByEmail = "SELECT * FROM user WHERE email = ?";
exports.getUserByName = "SELECT * FROM user WHERE name = ?";
