import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/userRoutes'
import { privateRoutes } from './private/ownerRoutes'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>()

app.use(cors());

app.route('/user', userRouter);
app.route('/ownerPrivateRoute', privateRoutes);

export default app
