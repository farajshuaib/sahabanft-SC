// SPDX-License-Identifier: MIT
pragma solidity >0.4.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SahabaMarketplace is ERC721URIStorage, Ownable {
    //auto-increment field for each token
    uint256 private _tokenId = 0;
    // this contract's token collection name
    string public collectionName;
    // this contract's token symbol
    string public collectionNameSymbol;
    //people have to pay to puy their NFT on this marketplace
    uint256 private _service_fees = 0.025 ether; // since 1 Ether is 10**18 Wei. 0.025 Ether is 0.025 * 10**18 Wei

    constructor() ERC721("Sahaba_NFT_Marketplace", "SAHABA") {
        collectionName = name();
        collectionNameSymbol = symbol();
    }

    struct MarketItem {
        uint256 tokenId;
        address payable mintedBy;
        address payable currentOwner;
        address payable previousOwner;
        uint256 price;
        uint256 platformFees;
        uint256 numberOfTransfers;
    }

    // a way to access values of the MarketItem struct above by passing an integer ID
    mapping(uint256 => MarketItem) private idMarketItem;
    // check if token URI exists
    mapping(string => bool) public tokenURIExists;

    /// @notice function to create market item
    function createAndListToken(string memory tokenURI, uint256 price)
        public
        payable
        returns (uint256)
    {
        // check if thic fucntion caller is not an zero address account
        require(msg.sender != address(0), "address not found !!");
        // check if the token URI already exists or not
        require(!tokenURIExists[tokenURI], "tokenURI is already minted");
        // check if the token URI already exists or not
        require(price > 0, "Price must be above zero");

        //set a new token id for the token to be minted
        _tokenId = _tokenId + 1;

        // calc the platform fees
        uint256 platformFees = 0;
        if (_service_fees > 0) {
            platformFees = (price * _service_fees) / 1 ether;
        }
        uint256 _price = (price - platformFees) / 1 ether;

        _mint(msg.sender, _tokenId); // mint the token
        _setTokenURI(_tokenId, tokenURI); //generate the URI
        setApprovalForAll(address(this), true); //grant transaction permission to marketplace

        MarketItem memory newItem = MarketItem(
            _tokenId,
            payable(msg.sender),
            payable(msg.sender),
            payable(address(0)),
            _price,
            platformFees,
            0 // number of transfer
        );

        idMarketItem[_tokenId] = newItem;

        //return token ID
        return _tokenId;
    }

    function buyToken(uint256 tokenId) public payable {
        // check if the function caller is not an zero account address
        require(msg.sender != address(0), "address not found");
        // get the token's owner
        address tokenOwner = ownerOf(tokenId);
        // token's owner should not be an zero address account
        require(tokenOwner != address(0), "token owner address is missed !!");
        // the one who wants to buy the token should not be the token's owner
        require(
            tokenOwner != msg.sender,
            "the one who wants to buy the token should not be the token's owner"
        );
        // get that token from all market items mapping and create a memory of it defined as (struct => MarketItem)
        MarketItem memory marketItem = idMarketItem[tokenId];
        // price sent in to buy should be equal to or more than the token's price
        require(
            msg.value >= marketItem.price,
            "you're not sending enough money to buy this NFT"
        );

        // send token's worth of ethers to the owner
        marketItem.currentOwner.transfer(marketItem.price);
        //pay owner of contract the service fees
        if (marketItem.platformFees > 0) {
            payable(owner()).transfer(marketItem.platformFees);
        }
        // transfer the token from owner to the caller of the function (buyer)
        _transfer(tokenOwner, msg.sender, tokenId); // _transfer(from, to, token_id)
        // update the token's previous owner
        marketItem.previousOwner = marketItem.currentOwner;
        // update the token's current owner
        marketItem.currentOwner = payable(msg.sender);
        // update the how many times this token was transfered
        marketItem.numberOfTransfers += 1;
        // set and update that token in the mapping
        idMarketItem[tokenId] = marketItem;
    }

    function changeTokenPrice(uint256 tokenId, uint256 _newPrice) public {
        // require caller of the function is not an empty address
        require(msg.sender != address(0), "address is missing");
        // get the token's owner
        address tokenOwner = ownerOf(tokenId);
        // check that token's owner should be equal to the caller of the function
        require(
            tokenOwner == msg.sender,
            "you're not allowed to maintain this token"
        );

        MarketItem memory marketItem = idMarketItem[tokenId];
        // update token's price with new price
        marketItem.price = _newPrice;
        // set and update that token in the mapping
        idMarketItem[tokenId] = marketItem;
    }

    function getServiceFeesPrice() public view returns (uint256) {
        return _service_fees;
    }

    function setServiceFeesPrice(uint256 price) public onlyOwner {
        require(
            msg.sender == owner(),
            "you don't have access to modify the platform service fees"
        );
        _service_fees = price;
    }

    // get owner of the token
    function getTokenOwner(uint256 tokenId) public view returns (address) {
        address _tokenOwner = ownerOf(tokenId);
        return _tokenOwner;
    }

    // get metadata of the token
    function getTokenURI(uint tokenId) public view returns (string memory) {
        string memory tokenMetaData = tokenURI(tokenId);
        return tokenMetaData;
    }

    // get total number of tokens owned by an address
    function getTotalNumberOfTokensOwnedByAnAddress(address _owner)
        public
        view
        returns (uint256)
    {
        uint256 totalNumberOfTokensOwned = balanceOf(_owner);
        return totalNumberOfTokensOwned;
    }

    // check if the token already exists
    function getTokenExists(uint256 tokenId) public view returns (bool) {
        bool tokenExists = _exists(tokenId);
        return tokenExists;
    }

    function getTokenById(uint256 tokenId)
        public
        view
        returns (MarketItem memory)
    {
        bool tokenExists = _exists(tokenId);
        require(tokenExists, "token does not exist");
        MarketItem memory marketItem = idMarketItem[tokenId];
        return marketItem;
    }

    function burn(uint256 tokenId) public {
        bool tokenExists = _exists(tokenId);
        require(tokenExists, "token does not exist");

        address tokenOwner = ownerOf(tokenId);

        require(
            tokenOwner == msg.sender,
            "you're not allowed to maintain this token"
        );

        _burn(tokenId);
    }
}
