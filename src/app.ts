import Koa from 'koa';

const PORT = 3000;

const app = new Koa();

app.use(async (ctx) => {
  console.log('start...');
  ctx.body = 'Hello World';
  console.log('end...');
});

app.listen(PORT, () => {
  console.log(`[koa-pro] listening port: ${PORT}`);
});
