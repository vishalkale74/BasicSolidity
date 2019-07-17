const BasicSolidity = artifacts.require("BasicSolidity");

contract('BasicSolidity', (accounts) => {
  it('should set Name in string format only', async () => {
    const BasicSolidityInstance = await BasicSolidity.deployed();
    const balance = await BasicSolidityInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "Name wasn't in the string format");
  });
  it("should set DOB in Date-format(e.g. DD/MM/YYYY) only", async () => {
    const BasicSolidityInstance = await BasicSolidity.deployed();
    const BasicSolidityBalance = (await BasicSolidityInstance.getBalance.call(accounts[0])).toNumber();
    const BasicSolidityEthBalance = (await BasicSolidityInstance.getBalanceInEth.call(accounts[0])).toNumber();

    assert.equal(BasicSolidityEthBalance, 2 * BasicSolidityBalance, "DOB wasn't in the string format");
  });
});
