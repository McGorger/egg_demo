module.exports = () => {
    return async function errorHanler(ctx, next) {
        try {
            await next();
        } catch(err) {
            ctx.app.emit('error', err, ctx);
            const status = err.status || 500;
            
            const error =
                status === 500 && ctx.app.config.env === 'prod' 
                ? 'Internal server error'
                : err.message
            ctx.body = {error};
            if(status == 422) {
                ctx.body.status = err.statusCode;
                console.log(12123)
                
            }
            console.log(ctx.body, 'ctx.body')
            ctx.status = status;
        }
    }
}
