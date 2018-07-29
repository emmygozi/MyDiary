import Joi from 'joi';

const validateEntry = (myentry) => {
  const schema = {
    name: Joi.string().trim().min(5).max(50)
      .required(),
    email: Joi.string().trim().min(5).max(255)
      .email()
      .required(),
    mypassword: Joi.string().trim().min(5).max(255)
      .required()
  };
  return Joi.validate(myentry, schema);
};


export default validateEntry;
