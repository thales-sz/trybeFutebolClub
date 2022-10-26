import * as express from 'express';
import { LeaderboardController } from '../controllers';

const router = express.Router();

const leaderboardController = new LeaderboardController();

router.get('/home', leaderboardController.getHomeLeaderboard);

export default router;
