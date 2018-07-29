import { createLogger, format, transports } from 'winston';


// eslint-disable-next-line
export default (err, req, res, next) => {
  // define winston transport format
  const {
    combine, timestamp, label, prettyPrint
  } = format;
  const logger = createLogger({
    format: combine(
      label({ label: 'Route Error!' }),
      timestamp(),
      prettyPrint()
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: './logs/routeErrors.log' })
    ]
  });

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    logger.log({
      level: 'error',
      message: `${err.message}
      You JSON structure is badly formed!
      Please check your input and try again.`
    });
    return res.status(400).send('Bad JSON');
  }


  const serverErrors = new transports.File({ filename: './logs/serverErrors.log' });
  logger.log({
    level: 'error',
    message: `${err.message}
    You have an error!
    Please check your work and fix this.`
  });
  logger
    .add(serverErrors);

  res.status(500).send('Something failed.');
};

