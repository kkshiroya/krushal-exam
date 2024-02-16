const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
const menuRoute = require("./menu.route");
const OrderRoute = require("./Order.route");
const adminRoute = require("./admin.route");
const itemRoute = require("./item.route");
const catagary = require("./catagary.route")

route.use("/user", userRoute);
route.use("/menu", menuRoute);
route.use("/Order", orderRoute);
route.use("/admin", adminRoute);
route.use("/catagary", catagaryRoute);
route.use("/item", itemRoute);
module.exports = route;
