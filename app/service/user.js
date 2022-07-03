const Service = require('egg').Service;
class UserService extends Service {
    get User {
        return this.app.model.User;
    }
    findByUsername() {
        return this.User.findOne({
            username
        })
    }
    findByEmail(email) {
        return this.User.findOne({
            email
        })
    }
    async createUser(user) {
        data.password = this.ctx.helper.md5(data.password);
       const user = new this.User(data);
        await user.save();
        return user;
    }
}