import express from "express";
import acctRouter from './acctRoutes';

const routes = express.Router();

routes.use('/accounts', acctRouter);

export default routes;