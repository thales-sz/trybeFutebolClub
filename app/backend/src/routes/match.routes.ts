import * as express from 'express';
import validateMatch from '../middlewares/validateMatch.middleware';
import MatchController from '../controllers/match.controller';
import validateJWT from '../middlewares/validateToken.middleware';

const router = express.Router();

const matchController = new MatchController();

router.get('/', matchController.getMatches);
router.post('/', validateMatch, validateJWT, matchController.createMatch);
router.patch('/:id/finish', matchController.finishMatch);

export default router;
