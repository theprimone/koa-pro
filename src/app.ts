import Koa from 'koa';

const PORT = 3000;

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => {
  console.log(`[koa-pro] listening port: ${PORT}`);
});
