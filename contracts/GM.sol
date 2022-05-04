// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import "./ERC721A.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./svg/interfaces/INFTSVG.sol";

contract GM is ERC721A, AccessControl  {
    // Create a new role identifier for the minter role
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    // SVG for GM
    address public SVG;

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721A, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function setSVG(address svg_) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "V1: Caller is not a default admin");
        SVG = svg_;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory tokenURI) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        tokenURI = INFTSVG(SVG).tokenURI(tokenId);
    }

    constructor()
    ERC721A("GoodMorning", "GM") {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());

        _setupRole(MINTER_ROLE, _msgSender());
        _setupRole(BURNER_ROLE, _msgSender());
    }

    function mint(address to) external {
        // Check that the calling account has the minter role
        require(hasRole(MINTER_ROLE, _msgSender()), "V1: must have burner role to burn");
        _safeMint(to, 1); 
    }

    function burn(uint256 tokenId_) external {
        require(hasRole(BURNER_ROLE, _msgSender()), "V1: must have burner role to burn");
        _burn(tokenId_);
    }

    function exists(uint256 tokenId_) external view returns (bool) {
        return _exists(tokenId_);
    }

    function transfer(
        address to,
        uint256 tokenId
    ) public virtual {
        transferFrom(msg.sender, to, tokenId);
    }
}
