const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig');

//router.prefix('/users')

//获取所有用户(GET请求)
router.get('/', async (ctx, next) => {
  // console.log(ctx.session.username)
  ctx.body = await userService.findAllUser();
})

// 增加用户(POST请求)
router.post('/users', async (ctx, next) => {
  let arr = [];

  arr.push(ctx.request.body['name']);
  arr.push(ctx.request.body['pass']);
  arr.push(ctx.request.body['avator']);

  await userService.addUserData(arr)
      .then((data) => {
          let r = '';
          if (data.affectedRows != 0) {
              r = 'ok';
          }
          ctx.body = {
              data: r
          }
      }).catch(() => {
          ctx.body = {
              data: 'err'
          }
      })
})
//delete a user
router.delete('/users/:id', async (ctx, next) => {
  let arr = [];

  arr.push(ctx.request.body['id']);
  await userService.deleteUserData(arr)
      .then((data) => {
          let r = '';
          if (data.affectedRows != 0) {
              r = 'ok';
          }
          ctx.body = {
              data: r
          }
      }).catch(() => {
          ctx.body = {
              data: 'err'
          }
      })
})

//update a user
router.put('/users/:id', async (ctx, next) => {
  let arr = [];

  arr.push(ctx.request.body['name']);
  arr.push(ctx.request.body['id']);
  await userService.updateUserData(arr)
      .then((data) => {
          let r = '';
          if (data.affectedRows != 0) {
              r = 'ok';
          }
          ctx.body = {
              data: r
          }
      }).catch(() => {
          ctx.body = {
              data: 'err'
          }
      })
})
module.exports = router
