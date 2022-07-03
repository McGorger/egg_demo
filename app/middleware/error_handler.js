module.exports = () => {
    return async function errorHanler(ctx, next) {
        try {
            await next();
        } catch(e) {
            ctx.app.emit('error', err, ctx);
            const status = e.status || 500;

            const error =
                status === 500 && ctx.app.config.env === 'prod' 
                ? 'Internal server error'
                : e.merrage
            ctx.body = {error};
            if(status == 422) {
                ctx.body.detail = e.errors;
            }
            ctx.status = status;
        }
    }
}
