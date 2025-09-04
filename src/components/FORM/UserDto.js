import bcrypt from "bcryptjs";

class User {
  constructor(username, email, password) {
    this.id = Date.now()
    this.username = username
    this.email = email
    this.password = User.generatePassword(password)
  }

  static generatePassword(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }
}

export default User;

