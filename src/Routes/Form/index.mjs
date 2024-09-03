import { Router } from 'express';
import { CreateUserFormData } from "./CreateUserFormData.mjs"// Adjust as needed
import authenticateJWT from '../../Middlewares/AuthMiddleware.mjs';

const router = Router();

router.get('/form',authenticateJWT,CreateUserFormData);

export default router;