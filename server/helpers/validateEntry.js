import Joi from 'joi';

const validateEntry = (myentry) => {
  const schema = {
    title: Joi.string().min(5).max(70).trim()
      .required(),
    message: Joi.string().trim().min(5).max(700)
      .required()
  };
  return Joi.validate(myentry, schema);
};


export default validateEntry;
