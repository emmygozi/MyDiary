import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import swaggerExpress from 'swagger-ui-express';
import yamljs from 'yamljs';
import routes from './routes/index';
import error from './middlewares/routeErrors';
import frontEnd from './routes/frontEnd/index';


const app = express();


const documentation = yamljs.load(`${process.cwd()}/server/swagger.yaml`);
app.use('/api-docs', swaggerExpress.serve, swaggerExpress.setup(documentation));

app.use(logger('dev'));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use('/', frontEnd.css);
app.use('/', frontEnd.js);
app.use('/', frontEnd.img);
app.use('/', frontEnd.html);
app.use('/api/v1', routes);
app.use(error);


const port = process.env.PORT || 8000;

app.listen(port);


export default app;
