const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const body = this.ctx.request.body
    this.ctx.validate({
      username: {type: 'string'},
      email: {type: 'email'},
      password: {type: 'string'}
    })
    const userService = this.service.user;
    if(await userService.findByUsername(body.username)) {
      this.ctx.throw(422, '用户已存在');
    }
    if(await userService.findByEmail(body.email)) {
      this.ctx.throw(422, '邮箱已存在');
    }
    const user = await userService.createUser(body);
    const token = userService.createToken({
      userId: user._id
    });
    this.ctx.body = {
      user: {
        email: user.email,
        token,
        username: user.username,
        channelDescription: user.channelDescription,
        avatar: user.avatar
      }
    }
  }
  async login() {
    const userService = this.service.user;
    // 1. 基本数据验证
    const body = this.ctx.request.body;
    this.ctx.validate({
      email: {type: 'email'},
      password: {type: 'string'}
    }, body)
    // 2. 校验邮箱是否存在
    const user = await userService.findByEmail(body.email);
    if(!user) {
      this.ctx.throw(422, '用户不存在');
    }
    // 3. 校验密码
    if(this.ctx.helper.md5(body.password) !== user.password) {
      this.ctx.throw(422, '密码不正确')
    }
    // 4. 生成token
    const token = userService.createToken({
      userId: user._id,
    })
    // 5
    this.ctx.body = {
      user: {
        email: user.email,
        token,
        username: user.username,
        channelDescription: user.channelDescription,
        avatar: user.avatar
      }
    }
  }
}

module.exports = UserController;
