import * as express from 'express';
import { LeaderboardController } from '../controllers';

const router = express.Router();

const leaderboardController = new LeaderboardController();

router.get('/home', leaderboardController.getHomeLeaderboard);
router.get('/away', leaderboardController.getAwayLeaderboard);
<<<<<<< HEAD
router.get('/', leaderboardController.getLeaderboard);
=======
>>>>>>> 6d3cc8541f77e87ddda19b22250067421d1fc340

export default router;
