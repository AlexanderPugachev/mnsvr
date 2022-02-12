import { v4 as uuidv4 } from 'uuid';

enum TransactionIdBrand { _=''}
type TransactionId = TransactionIdBrand & string;

export interface Transaction {
    id: TransactionId,
    amount: string,
    currency: string,
    account: string,
    category: string,
    party: string,
}

const createTransaction = (params: Omit<Transaction, 'id'>): Transaction => {
    const id = uuidv4() as TransactionId;
    return {...params, id };
}

export const transactionUtils = {
    create: createTransaction,
}