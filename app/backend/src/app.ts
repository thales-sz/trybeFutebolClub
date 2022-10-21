import * as express from 'express';
import { StatusCodes } from 'http-status-codes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.get('/ping', (req, res) => res.status(StatusCodes.OK).json({ message: 'pong' }));
    this.app.post('/login', (req: express.Request, res: express.Response) => {
      res.status(StatusCodes.OK).json({ message: 'login' });
    });
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
