import { Router } from 'express';
import { GetAllUsers } from "./GetAllUsers.mjs"// Adjust as needed
import authenticateJWT from '../../Middlewares/AuthMiddleware.mjs';

const router = Router();

router.get('/users',authenticateJWT,GetAllUsers);

export default router;