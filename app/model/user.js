
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      select: false,
      required: true
    },
    avatar: {
      type: String,
      default: null
    },
    email: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      default: null
    },
    ChannelDescription: {
      type: String,
      default: null
    },
    createAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
  });
  return mongoose.model('User', UserSchema);
};
