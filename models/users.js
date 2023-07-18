module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    username: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    birthDate: {
      type: Date
    },
    phone: {
      type: String
    },
    profileImg: {
      type: String
    }
  }, {
    versionKey: false,
    collection: 'users' // Specify the custom collection name here
  }
  );
  return mongoose.model('users', userSchema);
};