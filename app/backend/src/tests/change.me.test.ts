import * as sinon from 'sinon';
import * as chai from 'chai';
import { StatusCodes } from 'http-status-codes';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa App', () => {
  describe('Quando a req é feita com sucesso', () => {
    it('a rota /ping deve retornar um status 200 como response e "pong" na messagem', async () => {
      const httpResponse = await chai.request(app).get('/ping');
      expect(httpResponse.status).to.equal(StatusCodes.OK);
      expect(httpResponse.body).to.deep.equal({ message: 'pong' });
    })
  })
});
