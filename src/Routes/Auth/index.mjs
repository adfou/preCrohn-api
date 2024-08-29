import { Router } from 'express';
import registerRoute from './Register.mjs'; // Import all user routes
import loginRoute from './Login.mjs'; // Import auth routes
import authenticateToken from "./AuthenticateToken.mjs"

const router = Router();

router.post('/auth/login', loginRoute);


router.post('/auth/register', registerRoute);
router.get("/auth/token",authenticateToken)




export default router;