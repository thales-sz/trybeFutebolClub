import * as express from 'express';
import MatchController from '../controllers/match.controller';

const router = express.Router();

const matchController = new MatchController();

router.get('/', matchController.getMatches);
router.post('/', matchController.createMatch);

export default router;
