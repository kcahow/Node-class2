import Express, { Request, Response } from 'express';
import { getAccounts, getAccount, getAccountTransactions, deleteAccount, updateAccount } from '../controllers/accountController';

const acctRouter = Express.Router();

acctRouter.get('/', (req:Request, res:Response)=>{
    const accounts = getAccounts();
    res.send(accounts).status(200);
});


acctRouter.get('/:accountNumber', (req:Request, res:Response)=>{
    const account = getAccount(req.params.accountNumber);
    res.send(account).status(200);
});


 acctRouter.delete('/:accountNumber', (req:Request, res:Response)=>{
    console.log(req.params.accountNumber);
    deleteAccount(req.params.accountNumber);
    res.status(204);
});


// acctRouter.get('/accounts/:accountNumber/transactions', getAccountTransactions);
// acctRouter.delete('/accounts/:accountNumber', deleteAccount);
// acctRouter.put('/accounts/:accountNumber', updateAccount);


export default acctRouter;