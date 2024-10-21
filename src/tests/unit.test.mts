import test from "node:test";
import assert from "node:assert/strict";
import { getAccounts, getAccount, deleteAccount } from "../controllers/accountController";
import { transaction } from "../data";


test('getting all accounts', async () => {
    const accounts: transaction[] = getAccounts();

    assert.strictEqual(accounts.length, 2);
});


test('getting a single account', async () => {
    const account: transaction | undefined = getAccount("06951");
    if (!account) {
        throw new Error("Account not found");
    }

    assert.strictEqual(account.accountNumber, "06951");
});

test('getting a single account and fail', async () => {
    const account: transaction | undefined = getAccount("06950");
    assert.throws(() => {
        if (!account) {
            throw new Error("Account not found");
        }
    })
});

test('deleting a single account (DOES NOT DELETE THE ACTUAL ACCOUNT)', async () => {
    deleteAccount("06951");
    const accounts: transaction[] = getAccounts();
    assert.strictEqual(accounts.length, 2);
});



