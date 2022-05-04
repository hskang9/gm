/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PureSVG, PureSVGInterface } from "../PureSVG";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_bytes32",
        type: "bytes32",
      },
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "imageURI",
        type: "string",
      },
    ],
    name: "formatTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "svgToImageURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d8b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806371aee193146100465780639201de551461006f578063946aa63514610082575b600080fd5b6100596100543660046106ec565b61008a565b6040516100669190610b57565b60405180910390f35b61005961007d3660046106d3565b6100da565b610059610259565b60606100b4826040516020016100a091906108a2565b6040516020818303038152906040526102d8565b6040516020016100c4919061085d565b6040516020818303038152906040529050919050565b606060005b60208160ff1610801561012b5750828160ff166020811061010257610102610cb7565b1a60f81b7fff000000000000000000000000000000000000000000000000000000000000001615155b15610142578061013a81610c68565b9150506100df565b60008160ff1667ffffffffffffffff81111561016057610160610ce6565b6040519080825280601f01601f19166020018201604052801561018a576020820181803683370190505b509050600091505b60208260ff161080156101de5750838260ff16602081106101b5576101b5610cb7565b1a60f81b7fff000000000000000000000000000000000000000000000000000000000000001615155b1561025257838260ff16602081106101f8576101f8610cb7565b1a60f81b818360ff168151811061021157610211610cb7565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508161024a81610c68565b925050610192565b9392505050565b60408051808201909152601a81527f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000602082015260609060006102ad61029d6104b1565b6040516020016100a091906107bb565b905081816040516020016102c29291906107d7565b6040516020818303038152906040529250505090565b60608151600014156102f857505060408051602081019091526000815290565b6000604051806060016040528060408152602001610d1660409139905060006003845160026103279190610ba8565b6103319190610bc0565b61033c906004610bfb565b9050600061034b826020610ba8565b67ffffffffffffffff81111561036357610363610ce6565b6040519080825280601f01601f19166020018201604052801561038d576020820181803683370190505b509050818152600183018586518101602084015b818310156103f9576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f81168501518253506001016103a1565b600389510660018114610413576002811461045d576104a3565b7f3d3d0000000000000000000000000000000000000000000000000000000000007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe8301526104a3565b7f3d000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301525b509398975050505050505050565b60606104bb6104e8565b6104c36106c2565b6040516020016104d4929190610806565b604051602081830303815290604052905090565b606060006040518060400160405280601f81526020017f68747470733a2f2f692e696d6775722e636f6d2f594553484336322e706e670081525090506040516020016106ad907f3c7376672077696474683d2232383022206865696768743d223430302220766981527f6577426f783d223020302032383020343030222066696c6c3d226e6f6e65222060208201527f786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f737660408201527f67223e000000000000000000000000000000000000000000000000000000000060608201527f3c646566733e000000000000000000000000000000000000000000000000000060638201527f3c636c6970506174682069643d22636c6970305f325f34223e0000000000000060698201527f3c726563742077696474683d2232383022206865696768743d2234303022206660828201527f696c6c3d227768697465222f3e0000000000000000000000000000000000000060a28201527f3c2f636c6970506174683e00000000000000000000000000000000000000000060af8201527f3c2f646566733e0000000000000000000000000000000000000000000000000060ba82015260c10190565b60405160208183030381529060405291505090565b60606040516020016104d4906109a6565b6000602082840312156106e557600080fd5b5035919050565b6000602082840312156106fe57600080fd5b813567ffffffffffffffff8082111561071657600080fd5b818401915084601f83011261072a57600080fd5b81358181111561073c5761073c610ce6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561078257610782610ce6565b8160405282815287602084870101111561079b57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600082516107cd818460208701610c38565b9190910192915050565b600083516107e9818460208801610c38565b8351908301906107fd818360208801610c38565b01949350505050565b60008351610818818460208801610c38565b83519083019061082c818360208801610c38565b7f3c2f7376673e00000000000000000000000000000000000000000000000000009101908152600601949350505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161089581601d850160208701610c38565b91909101601d0192915050565b7f7b226e616d65223a22476f6f644d6f726e696e67222c0000000000000000000081527f20226465736372697074696f6e223a2022412067656e6572617469766520617260168201527f7420746f2073686f7720476f6f64204d6f726e696e6728474d29222c0000000060368201527f2261747472696275746573223a22222c0000000000000000000000000000000060528201527f22696d616765223a22000000000000000000000000000000000000000000000060628201526000825161097281606b850160208701610c38565b7f227d000000000000000000000000000000000000000000000000000000000000606b939091019283015250606d01919050565b7f3c6720636c69702d706174683d2275726c2823636c6970305f325f3429223e0081527f3c726563742077696474683d2232383022206865696768743d22343030222066601f8201527f696c6c3d2223464632463246222f3e0000000000000000000000000000000000603f8201526000610a6d604e83017f3c726563742077696474683d2232383022206865696768743d2234303022206681527f696c6c3d227768697465222f3e000000000000000000000000000000000000006020820152602d0190565b7f3c636972636c652063783d22313430222063793d223131312220723d2235302281527f2066696c6c3d2223444531303130222f3e00000000000000000000000000000060208201527f3c656c6c697073652063783d22313332222063793d223339392e35222072783d60318201527f22323431222072793d223135322e35222066696c6c3d2223343243323736222f60518201527f3e0000000000000000000000000000000000000000000000000000000000000060718201527f3c2f673e00000000000000000000000000000000000000000000000000000000607282015260760192915050565b6020815260008251806020840152610b76816040850160208701610c38565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008219821115610bbb57610bbb610c88565b500190565b600082610bf6577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c3357610c33610c88565b500290565b60005b83811015610c53578181015183820152602001610c3b565b83811115610c62576000848401525b50505050565b600060ff821660ff811415610c7f57610c7f610c88565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220d25a15a6a3c836411ca74d650213c4eb92a8d09f092c29ef09082509f220a4db64736f6c63430008070033";

export class PureSVG__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PureSVG> {
    return super.deploy(overrides || {}) as Promise<PureSVG>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PureSVG {
    return super.attach(address) as PureSVG;
  }
  connect(signer: Signer): PureSVG__factory {
    return super.connect(signer) as PureSVG__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PureSVGInterface {
    return new utils.Interface(_abi) as PureSVGInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PureSVG {
    return new Contract(address, _abi, signerOrProvider) as PureSVG;
  }
}
