import { Router } from 'express';
import registerRoute from './Register.mjs'; // Import all user routes
import loginRoute from './Login.mjs'; // Import auth routes
 

const router = Router();

router.post('/auth/login', loginRoute);


router.post('/auth/register', registerRoute);




export default router;