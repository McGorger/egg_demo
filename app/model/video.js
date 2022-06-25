module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const videoSchema = new Schema({
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      playUrl: {
        type: String,
        required: true
      },
      cover: {
        type: String,
        default: true
      },
      user: {
        type: mongoose.ObjectId,
        required: true,
        ref: 'User'
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
    return mongoose.model('Video', videoSchema);
  };
  