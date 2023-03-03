require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks : {
    ropsten:{
      url: `https://eth-ropsten.alchemyapi.io/v2/SFRRwFrEK3nQkYAis0Z0dBLjcWEHtztJ`,
      accounts: ['085164c615a0edb827a8ee5c1759b7c704bc519130841121ad07b21aff359929']
    } 
  }
};
