module.exports = () => {
    return async (ctx, next) => {
        // 1.获取请求头的token
        const authorization = ctx.headers['authorization'];
        let token;
        
        if(authorization) {
            token = authorization.split('Bearer ')[1];
        }
        // 2. 验证token ，无效401
        if(!token) {
            ctx.throw(401);
        }
        try {
            // 3. token 有效， 根据userid获取用户数据
            const data = ctx.service.user.verifyToken(token);
            ctx.user = await ctx.model.User.findById(data.userId);
        } catch(err) {
            ctx.throw(401);
        }
        
        // 4. next 执行后续中间件
        await next();
    }
}