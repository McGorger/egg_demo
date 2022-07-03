const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const body = this.ctx.request.body
    this.ctx.validate({
      username: {type: 'string'},
      email: {type: 'email'},
      password: {type: 'string'}
    })
    if(await this.service.user.findByUsername(body.username)) {
      this.ctx.throw(422, '用户已存在');
    }
    if(await this.service.user.findByEmail(body.email)) {
      this.ctx.throw(422, '邮箱已存在');
    }
    const user = await this.service.user.createUser(body);
    const token = this.service.user.createToken(data);
    this.ctx.body = {
      user: {
        email: user.email,
        // token: 
        username: user.username,
        channelDescription: user.channelDescription,
        avatar: user.avatar
      }
    }
  }
}

module.exports = UserController;
