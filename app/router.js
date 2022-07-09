'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth();
  router.prefix('/api/v1');
  // router.post('/', controller.user.create);
  router.post('/users', controller.user.create);
  router.post('/users/login', controller.user.login);
  router.post('/user', auth, controller.user.getCurrentUser);
  router.patch('/user', auth, controller.user.update);
  router.get('/user/:userId', app.middleware.auth({required: false}), controller.user.getUser);

  // 用户订阅
  router.post('/user/:userId/subscribe', auth, controller.user.subscribe)
  router.delete('/user/:userId/subscribe', auth, controller.user.unsubscribe)
};
