import * as express from 'express';
import { TeamController } from '../controllers';

const router = express.Router();
const teamController = new TeamController();

router.get('/', teamController.getTeams);
router.get('/:id', teamController.getTeamById);

export default router;
