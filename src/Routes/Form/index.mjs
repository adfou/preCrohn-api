import { Router } from 'express';
import { CreateUserFormData } from "./CreateUserFormData.mjs"
import {GetUserFormData} from "./GetUserFormData.mjs";
import authenticateJWT from '../../Middlewares/AuthMiddleware.mjs';

const router = Router();

router.post('/form',authenticateJWT,CreateUserFormData);
router.post('/get',authenticateJWT,GetUserFormData);

export default router;