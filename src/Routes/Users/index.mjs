import { Router } from 'express';
import { GetAllUsers } from "./GetAllUsers.mjs"// Adjust as needed
import {deleteUser} from "./DeleteUser.mjs"
import {getParticipantProfile} from "./getParticipantProfile.mjs"
import authenticateJWT from '../../Middlewares/AuthMiddleware.mjs';

const router = Router();

router.get('/users',authenticateJWT,GetAllUsers);
router.get('/participant-profile',authenticateJWT,getParticipantProfile);
router.get('/users/delete',authenticateJWT,deleteUser);


export default router;