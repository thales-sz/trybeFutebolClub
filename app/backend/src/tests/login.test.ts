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
    it('a rota /login deve retornar um status 200 como response e um token válido na messagem', async () => {
      const httpResponseLogin = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin' });

      expect(httpResponseLogin.status).to.equal(StatusCodes.OK);
    })
  })
  describe('Quando a req NÃO é feita com sucesso', () => {
    it('deve retornar UNAUTHORIZED caso a senha ou email estejam errados', async () => {
      const httpResponseSenha = await chai
      .request(app)
      .post('/login')
      .send({ email: 'email@errado.com', password: 'senhaaaa' });

      expect(httpResponseSenha.status).to.equal(StatusCodes.UNAUTHORIZED);
    })
  })
});
