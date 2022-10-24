import * as sinon from 'sinon';
import * as chai from 'chai';
import { StatusCodes } from 'http-status-codes';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { ITeam } from '../domain/entities/Team';
import TeamModel from '../database/models/team.model';

chai.use(chaiHttp);

const { expect } = chai;

const mock: ITeam = {
  id: 1,
  teamName: 'Trybe Futebol CLub',
}

const teams: ITeam[] = [mock, mock, mock];

describe('Testando rota /teams', () => {
  afterEach(() => { sinon.restore() });

  it('deve retornar um array de teams na rota /teams', async () => {
    sinon.stub(TeamModel, 'findAll').resolves(teams as Array<TeamModel>);

    const httpResponse = await chai.request(app).get('/teams');

    expect(httpResponse.status).to.be.equal(StatusCodes.OK);
    expect(httpResponse.body[0]).to.haveOwnProperty('id');
  });

  it('deve retornar apenas um time na rota /teams/:id', async () => {
    sinon
    .stub(TeamModel, 'findOne')
    .resolves(mock as TeamModel);

    const httpResponse = await chai.request(app).get('/teams/1');

    expect(httpResponse.status).to.be.equal(StatusCodes.OK);
    expect(httpResponse.body).to.haveOwnProperty('id');
  });

  
});