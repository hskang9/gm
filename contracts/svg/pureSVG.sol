// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import "./libraries/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract PureSVG {
  using Strings for uint256;

  function generateSVGDefs() private pure returns (string memory svg) {
    string memory url = "https://i.imgur.com/YESHC62.png";
    svg = string(
      abi.encodePacked(
        '<svg width="280" height="400" viewBox="0 0 280 400" fill="none" xmlns="http://www.w3.org/2000/svg">',
        "<defs>",
        '<clipPath id="clip0_2_4">',
        '<rect width="280" height="400" fill="white"/>',
        "</clipPath>",
        "</defs>"
      )
    );
  }

  function generateGraphics() private pure returns (string memory svg) {
    svg = string(
      abi.encodePacked(
        '<g clip-path="url(#clip0_2_4)">',
        '<rect width="280" height="400" fill="#FF2F2F"/>',
        '<rect width="280" height="400" fill="white"/>',
        '<circle cx="140" cy="111" r="50" fill="#DE1010"/>',
        '<ellipse cx="132" cy="399.5" rx="241" ry="152.5" fill="#42C276"/>',
        "</g>"
      )
    );
  }

  function generateSVG() internal pure returns (string memory svg) {
    svg = string(
      abi.encodePacked(generateSVGDefs(), generateGraphics(), "</svg>")
    );
  }

  // You could also just upload the raw SVG and have solildity convert it!
  function svgToImageURI() public pure returns (string memory) {
    // example:
    // <svg width='500' height='500' viewBox='0 0 285 350' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill='black' d='M150,0,L75,200,L225,200,Z'></path></svg>
    // data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTAwJyBoZWlnaHQ9JzUwMCcgdmlld0JveD0nMCAwIDI4NSAzNTAnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nYmxhY2snIGQ9J00xNTAsMCxMNzUsMjAwLEwyMjUsMjAwLFonPjwvcGF0aD48L3N2Zz4=
    string memory baseURL = "data:image/svg+xml;base64,";
    string memory svgBase64Encoded = Base64.encode(
      bytes(string(abi.encodePacked(generateSVG())))
    );
    return string(abi.encodePacked(baseURL, svgBase64Encoded));
  }

  function formatTokenURI(string memory imageURI)
    public
    pure
    returns (string memory)
  {
    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64.encode(
            bytes(
              abi.encodePacked(
                '{"name":"GoodMorning",', // You can add whatever name here
                ' "description": "A generative art to show Good Morning(GM)",',
                '"attributes":"",',
                '"image":"',
                imageURI,
                '"}'
              )
            )
          )
        )
      );
  }

  // remove later:
  function bytes32ToString(bytes32 _bytes32)
    public
    pure
    returns (string memory)
  {
    uint8 i = 0;
    while (i < 32 && _bytes32[i] != 0) {
      i++;
    }
    bytes memory bytesArray = new bytes(i);
    for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
      bytesArray[i] = _bytes32[i];
    }
    return string(bytesArray);
  }
}
