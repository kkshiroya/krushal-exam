const Joi = require("joi");

const additem = {
  body: Joi.object().keys({
    itemName: Joi.string().required().trim(),
    itemPrice: Joi.string().required().trim(),
    itemDescription: Joi.string().required().trim(),
    catagary: joi.string().required().trim()
  }),
};

module.exports = {
    additem,
};
