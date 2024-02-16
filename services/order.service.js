const { menuSchema } = require("../models");
const { orderSchema } = require("../models/order.model");

const addOrder = () => {
  return orderSchema.create();
};
const getOrder = () => {
  return orderSchema.find().populate("userSchema");
};

const deleteOrder = () => {
  return orderSchema.findByIdAndDelete();
};
const updateOrder = () => {
  return orderSchema.findByIdAndUpdate();
};

module.exports = {
  addOrder,deleteOrder, updateOrder, getOrder,
 
};
