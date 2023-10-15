import { expect } from "chai";
import { ethers } from "hardhat";
import { Pivot } from "../typechain-types";

describe.only("Pivot", function () {
  let pivot: Pivot;
  let owner;
  let user1;
  let user2;
  before(async () => {
    [owner, user1, user2] = await ethers.getSigners();
    const pivotFactory = await ethers.getContractFactory("Pivot");
    pivot = (await pivotFactory.deploy(owner.address)) as Pivot;
    await pivot.deployed();
  });

  describe("initToken", function () {
    it("Should the same owner of the caller", async function () {
      const price = 10n ** 16n;
      const maxSupply = 10000;
      console.log("====> price :", price);
      await pivot.initToken(price, maxSupply);
      expect(await pivot.getOwnerById(0)).to.equal(owner.address);
    });
  });

  describe("mint", function () {
    it("Should mint the NFT", async function () {
      const id = 0;
      const user1Pivot = pivot.connect(user1);
      const value = await user1Pivot.getPriceById(id);
      await user1Pivot.mint(id, { value });
      expect(await pivot.balanceOf(user1.address, id)).to.equal(1);
    });
    it("User2 blance Should equal to 0", async function () {
      const id = 0;
      expect(await pivot.balanceOf(user2.address, id)).to.equal(0);
    });
    it("User2 mint 1", async function () {
      const id = 0;
      const user2Pivot = pivot.connect(user2);
      const value = await user2Pivot.getPriceById(id);
      await user2Pivot.mint(id, { value });

      expect(await pivot.balanceOf(user2.address, id)).to.equal(1);
      const user1Balance = await pivot.getUserBlance(id, user1.address);
      console.log("====> user1Balance :", user1Balance.toString());
    });
    it("User2 mint 2", async function () {
      const id = 0;
      const user2Pivot = pivot.connect(user2);
      const value = await user2Pivot.getPriceById(id);
      await user2Pivot.mint(id, { value });

      expect(await pivot.balanceOf(user2.address, id)).to.equal(2);
      const user1Balance = await pivot.getUserBlance(id, user1.address);
      console.log("====> user1Balance :", user1Balance.toString());
    });
    it("User2 mint 3", async function () {
      const id = 0;
      const user2Pivot = pivot.connect(user2);
      const value = await user2Pivot.getPriceById(id);
      await user2Pivot.mint(id, { value });

      expect(await pivot.balanceOf(user2.address, id)).to.equal(3);
      const user1Balance = await pivot.getUserBlance(id, user1.address);
      const tokenBalance = await pivot.getTokenBalance(id);
      console.log("====> user1Balance :", user1Balance.toString(), tokenBalance.toString());
    });
    it("User1 claim balance", async function () {
      const id = 0;
      const user1Pivot = pivot.connect(user1);
      const balance1 = await ethers.provider.getBalance(user1.address);
      await user1Pivot.claimUserBalance(id);
      const balance2 = await ethers.provider.getBalance(user1.address);
      expect(balance2).gt(balance1);
      console.log(
        "====> balance1, balance2 :",
        balance1.toString(),
        balance2.toString(),
        ethers.utils.formatEther(balance2.sub(balance1).toString()),
      );
    });
  });
});
