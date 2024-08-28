import { Router } from 'express';
import userRoutes from './Users/index.mjs'; // Import all user routes
import logger from '../Middlewares/LoggerMiddleware.mjs';
import loginRoutes from './Auth/index.mjs';




const router = Router();
router.use(logger);
router.use(userRoutes); // Use the user routes under the root path
router.use(loginRoutes);
// If you have other routes, you can add them here
// router.use('/other', otherRoutes);

export  {router as Routes};
