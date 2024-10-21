


export type transactionType = {
  transactionType: 'C' | 'D';
  amount: number;
  date: Date  ;
}

export type txnListType = {
  [key: string]: transactionType;
}

export type transaction = {
  accountNumber: string;
  accountName: string;
  transactions: txnListType;
}

export const transactions: transaction[] = [
  {
    "accountNumber": "036582",
    "accountName": "Checking Account",
    "transactions": {
      "01": {"transactionType": "C","amount": 247.92,"date": new Date("Aug 28 2024")},
      "02": {"transactionType": "D","amount": 53.00,"date": new Date("Aug 30 2024")},
      "03": {"transactionType": "C","amount": 125.22,"date": new Date("Sep 5 2024")},
      "04": {"transactionType": "D","amount": 1300.00,"date": new Date("Sep 8 2024")},
      "05": {"transactionType": "C","amount": 350.00,"date": new Date("Sep 10 2024")}
    }
  },
  {
    "accountNumber": "06951",
    "accountName": "Checking Account",
    "transactions": {
      "01": {"transactionType": "C","amount": 247.92,"date": new Date("Aug 28 2024")},
      "02": {"transactionType": "D","amount": 200.00,"date": new Date("Aug 30 2024")},
      "03": {"transactionType": "C","amount": 125.22,"date": new Date("Sep 5 2024")},
      "04": {"transactionType": "D","amount": 950.00,"date": new Date("Sep 8 2024")},
      "05": {"transactionType": "C","amount": 125.00,"date": new Date("Sep 10 2024")}
    }
  },
]