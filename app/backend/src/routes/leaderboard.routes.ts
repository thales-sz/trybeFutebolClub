import * as express from 'express';
import MatchController from '../controllers/match.controller';

const router = express.Router();

const matchController = new MatchController();

router.get('/home', matchController.getMatches);

export default router;
