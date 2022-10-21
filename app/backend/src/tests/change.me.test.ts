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
    it('a rota /login deve retornar um status 200 como response e um token válido na messagem', async () => {
      const httpResponseLogin = await chai
      .request(app)
      .post('/login')
      .send({ email: 'email@trybe.com', password: 'umasenhaválida' });

      expect(httpResponseLogin.status).to.equal(StatusCodes.OK);
      expect(httpResponseLogin.body).to.deep.equal({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" });
    })
  })
});
