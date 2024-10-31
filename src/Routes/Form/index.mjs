import { Router } from 'express';
import { CreateUserFormData } from "./CreateUserFormData.mjs"// Adjust as needed
import authenticateJWT from '../../Middlewares/AuthMiddleware.mjs';
import {RiskCalculation} from "./RiskCalculation.mjs"
import {TestChangeState} from "./TestChangeState.mjs"
import {NextStep} from "./NextStep.mjs"
import {Restart} from "./Restart.mjs"

const router = Router();

router.post('/form',authenticateJWT,CreateUserFormData);
router.get("/risk",authenticateJWT,RiskCalculation)
router.get("/test-change-state",authenticateJWT,TestChangeState)
router.get("/next-step",authenticateJWT,NextStep)
router.get("/restart",authenticateJWT,Restart)


export default router;