import * as sinon from 'sinon';
import * as chai from 'chai';
import { StatusCodes } from 'http-status-codes';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

const mock = {
    name: 'Palmeiras',
    totalPoints: 13,
    totalGames: 5,
    totalVictories: 4,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 17,
    goalsOwn: 5,
    goalsBalance: 12,
    efficiency: '86.67'
  };

const mockHome = {
    name: 'Santos',
    totalPoints: 9,
    totalGames: 3,
    totalVictories: 3,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 9,
    goalsOwn: 3,
    goalsBalance: 6,
    efficiency: '100.00'
  };

const mockAway = {
    name: 'Palmeiras',
    totalPoints: 6,
    totalGames: 2,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 7,
    goalsOwn: 0,
    goalsBalance: 7,
    efficiency: '100.00'
  }

describe('Testando rota /leaderboard', () => {
  afterEach(() => { sinon.restore() });

  it('deve retornar o leaderboard geral na rota /leaderboard', async () => {
    const httpResponse = await chai.request(app).get('/leaderboard');

    expect(httpResponse.status).to.be.equal(StatusCodes.OK);
    expect(httpResponse.body[0]).to.be.deep.equal(mock);
  });

   it('deve retornar o leaderboard HOME na rota /leaderboard/home', async () => {
    const httpResponse = await chai.request(app).get('/leaderboard/home');

    expect(httpResponse.status).to.be.equal(StatusCodes.OK);
    expect(httpResponse.body[0]).to.be.deep.equal(mockHome);
  });

   it('deve retornar o leaderboard AWAY na rota /leaderboard/away', async () => {
    const httpResponse = await chai.request(app).get('/leaderboard/away');

    expect(httpResponse.status).to.be.equal(StatusCodes.OK);
    expect(httpResponse.body[0]).to.be.deep.equal(mockAway);
  }); 
});