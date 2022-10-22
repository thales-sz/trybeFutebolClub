import * as sinon from 'sinon';
import * as chai from 'chai';
import { StatusCodes } from 'http-status-codes';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/user.model';

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
    it('a rota /login deve retornar um status 200 como response e um token válido na messagem', async () => {
      const httpResponseLogin = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW' });

      expect(httpResponseLogin.status).to.equal(StatusCodes.OK);
      expect(httpResponseLogin.body.token.split('E2NjY0')[0]).to.equal("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOj");
    })
  })
});
