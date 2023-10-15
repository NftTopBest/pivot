// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract Pivot is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
	using Math for uint256;

	constructor(address initialOwner) ERC1155("Pivot") Ownable(initialOwner) {}

	uint256 currentMaxId = 0;
	mapping(uint256 => address) tokenOwnerMap;
	mapping(uint256 => uint256) priceMap;
	mapping(uint256 => uint256) maxSupplyMap;
	mapping(uint256 => address[]) tokenMinterArr;
	mapping(uint256 => mapping(address => uint256)) userBalance;
	mapping(uint256 => uint256) tokenBalance;

	function setURI(string memory newuri) public onlyOwner {
		_setURI(newuri);
	}

	function initToken(uint256 price, uint256 maxSupply) public payable {
		address createdBy = _msgSender();

		tokenOwnerMap[currentMaxId] = createdBy;
		priceMap[currentMaxId] = price;
		maxSupplyMap[currentMaxId] = maxSupply;
		currentMaxId = currentMaxId + 1;
	}

	function getOwnerById(uint256 tokenId) public view returns (address) {
		return tokenOwnerMap[tokenId];
	}

	function getPriceById(uint256 tokenId) public view returns (uint256) {
		return priceMap[tokenId];
	}

	function getUserBlance(
		uint256 tokenId,
		address account
	) public view returns (uint256) {
		return userBalance[tokenId][account];
	}

	function claimUserBalance(uint256 tokenId) public {
		address payable to = payable(_msgSender());
		uint256 value = userBalance[tokenId][to];
		require(value > 0, "user do not have balance");
		(bool success, ) = to.call{ value: value }("");
		require(success, "claim failed");
	}

	function getTokenBalance(uint256 tokenId) public view returns (uint256) {
		return tokenBalance[tokenId];
	}

	function mint(uint256 id) public payable {
		uint256 price = priceMap[id];
		require(price <= msg.value, "Not enough payment");
		tokenBalance[id] += price;

		address createdBy = _msgSender();
		_mint(createdBy, id, 1, "0x0");
		uint256 len = tokenMinterArr[id].length;
		tokenMinterArr[id].push(createdBy);

		console.log("len", len);
		if (len == 0) {
			return;
		}

		(bool overflowsDiv, uint256 one) = price.tryDiv(len);
		require(overflowsDiv, "can not div");
		for (uint256 i = 0; i < len; i++) {
			userBalance[id][tokenMinterArr[id][i]] += one;
		}
	}

	// function mintBatch(
	// 	address to,
	// 	uint256[] memory ids,
	// 	uint256[] memory amounts,
	// 	bytes memory data
	// ) public onlyOwner {
	// 	_mintBatch(to, ids, amounts, data);
	// }

	// The following functions are overrides required by Solidity.
	function _update(
		address from,
		address to,
		uint256[] memory ids,
		uint256[] memory values
	) internal override(ERC1155, ERC1155Supply) {
		super._update(from, to, ids, values);
	}
}
