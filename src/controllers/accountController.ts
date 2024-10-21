import { Request, Response } from 'express';
import  { transactions } from '../data';

export const getAccounts = () => {
  
  const accounts = transactions;
  return accounts;

};  

export const getAccount = (acctNumber:string) =>{
  const account = transactions.find((account) => account.accountNumber === acctNumber);
  return account;
}

export const deleteAccount = (acctNumber:string) => {
  console.log(`Account ${acctNumber} to be deleted`);

  const account = transactions.filter((account) => account.accountNumber != acctNumber);  

  console.log(`Account ${acctNumber} deleted`);

  return;
}

export const getAccountTransactions = (req:Request, res:Response) => {
  const account = transactions.find((account) => account.accountNumber === req.params.accountNumber);
  res.send(account).status(200);
};

// export const deleteAccount = (req:Request, res:Response) => {
//   const account = transactions.find((account) => account.accountNumber === req.params.accountNumber);
//   res.send(account).status(200);
// }

export const updateAccount = (req:Request, res:Response) => {
  const account = transactions.find((account) => account.accountNumber === req.params.accountNumber);
  res.send(account).status(200);
} 

