// Replace ExampleToken.sol with an actual .sol file.
var ExampleToken = artifacts.require("./ExampleToken.sol");

module.exports = function (deployer) {
    const _name = "Example Token"
    const _symbol = "EXT"
    const _decimals = 18

    deployer.deploy(ExampleToken, _name, _symbol, _decimals);
};


