module.exports = (options = {required: true}) => {
    return async (ctx, next) => {
        // 1.获取请求头的token
        const authorization = ctx.headers['authorization'];
        let token;
        
        if(authorization) {
            token = authorization.split('Bearer ')[1];
        }
        if(token) {
            try {
                const data = ctx.service.user.verifyToken(token);
                ctx.user = await ctx.model.User.findById(data.userId);
            } catch (error) {
                ctx.throw(401);
            }
        } else if(options.required) {
            ctx.throw(401);
        }        
        // 4. next 执行后续中间件
        await next();
    }
}