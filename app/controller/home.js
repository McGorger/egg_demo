const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const User = this.app.model.User;
    await new User({
      useName: 'lgz',
      password: '1234',
    }).save();
    ctx.body = 'hi, egg111';
  }
}

module.exports = HomeController;
