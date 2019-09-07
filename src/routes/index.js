import express from "express";
import config from "../config";
import middleware from "../middleware";
import initializedb from '../db';
import restaurant from "../controller/restaurant";

let router = express();

// connect to db
initializedb(db => {
  
  // internal middleware
  router.use(middleware({config, db}));

  // api routes v1 (/v1)
  router.use('/restaurant', restaurant({ config, db }));
});

export default router;
