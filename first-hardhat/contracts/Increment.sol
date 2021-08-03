//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Increment {
  uint public x;

  constructor() {
    x = 0;
  }

  function addOneToX() external{
    x++;
  }

}
