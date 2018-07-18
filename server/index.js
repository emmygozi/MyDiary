import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';


const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());


const port = process.env.PORT || 8000;

app.listen(port);


export default app;
