
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
      select: true, // 查询中不包含该字段
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
    subscribersCount: {
      type: Number,
      default: 0
    },
    channelDescription: {
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