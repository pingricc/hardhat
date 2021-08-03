const { assert } = require("chai");

describe("Increment", function() {
    it("first should be 0, after should be 1", async function() {
        const Increment = await ethers.getContractFactory("Increment");
        const increment = await Increment.deploy();

        await increment.deployed();
        assert.equal(await increment.x(), 0);

        await increment.addOneToX();
        assert.equal(await increment.x(), 1);
    });
});