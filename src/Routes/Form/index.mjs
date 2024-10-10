import { Router } from 'express';
import { CreateUserFormData } from "./CreateUserFormData.mjs"// Adjust as needed
import authenticateJWT from '../../Middlewares/AuthMiddleware.mjs';
import {RiskCalculation} from "./RiskCalculation.mjs"

const router = Router();

router.post('/form',authenticateJWT,CreateUserFormData);
router.get("/risk",authenticateJWT,RiskCalculation)

export default router;