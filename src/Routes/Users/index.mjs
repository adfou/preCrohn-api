import { Router } from 'express';
import { GetAllUsers } from "./GetAllUsers.mjs"// Adjust as needed
import {getParticipantProfile} from "./getParticipantProfile.mjs"
import authenticateJWT from '../../Middlewares/AuthMiddleware.mjs';

const router = Router();

router.get('/users',authenticateJWT,GetAllUsers);
router.get('/participant-profile',authenticateJWT,getParticipantProfile);

export default router;