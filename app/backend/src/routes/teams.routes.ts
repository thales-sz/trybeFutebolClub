import * as express from 'express';
import { TeamController } from '../controllers';

const router = express.Router();
const teamController = new TeamController();

router.get('/', teamController.getTeams);

export default router;
