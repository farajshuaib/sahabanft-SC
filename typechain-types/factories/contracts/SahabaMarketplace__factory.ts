/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SahabaMarketplace,
  SahabaMarketplaceInterface,
} from "../../contracts/SahabaMarketplace";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "changeTokenPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collectionName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collectionNameSymbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collection_id",
        type: "uint256",
      },
    ],
    name: "createAndListToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "createCollection",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getServiceFeesPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getTotalNumberOfTokensOwnedByAnAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setServiceFeesPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "tokenURIExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060075560006008556658d15e17628000600c553480156200002657600080fd5b5060408051808201825260098152681cd85a18589853919560ba1b60208083019182528351808501909452600384526213919560ea1b908401528151919291620000739160009162000192565b5080516200008990600190602084019062000192565b5062000097915050620000e7565b8051620000ad9160099160209091019062000192565b50620000b862000181565b8051620000ce91600a9160209091019062000192565b50600b80546001600160a01b0319163317905562000275565b606060008054620000f89062000238565b80601f0160208091040260200160405190810160405280929190818152602001828054620001269062000238565b8015620001775780601f106200014b5761010080835404028352916020019162000177565b820191906000526020600020905b8154815290600101906020018083116200015957829003601f168201915b5050505050905090565b606060018054620000f89062000238565b828054620001a09062000238565b90600052602060002090601f016020900481019282620001c457600085556200020f565b82601f10620001df57805160ff19168380011785556200020f565b828001600101855582156200020f579182015b828111156200020f578251825591602001919060010190620001f2565b506200021d92915062000221565b5090565b5b808211156200021d576000815560010162000222565b600181811c908216806200024d57607f821691505b602082108114156200026f57634e487b7160e01b600052602260045260246000fd5b50919050565b61223d80620002856000396000f3fe6080604052600436106101815760003560e01c80636352211e116100d1578063a22cb4651161008a578063c87b56dd11610064578063c87b56dd14610470578063e5326ab114610490578063e985e9c5146104a5578063fbc28f87146104ee57600080fd5b8063a22cb46514610410578063a5cd761f14610430578063b88d4fde1461045057600080fd5b80636352211e146103735780636f9507f91461039357806370a08231146103a857806384a2bfdf146103c85780638b08daa8146103db57806395d89b41146103fb57600080fd5b806323b872dd1161013e57806342842e0e1161011857806342842e0e146102d857806343902850146102f857806343d32ae71461031857806362e8e8ac1461035357600080fd5b806323b872dd146102855780632d296bf1146102a55780633bb3a24d146102b857600080fd5b806301ffc9a714610186578063059dfe13146101bb57806306fdde03146101e9578063081812fc1461020b578063095ea7b314610243578063142687f314610265575b600080fd5b34801561019257600080fd5b506101a66101a1366004611c59565b610503565b60405190151581526020015b60405180910390f35b3480156101c757600080fd5b506101db6101d6366004611d22565b610555565b6040519081526020016101b2565b3480156101f557600080fd5b506101fe61062b565b6040516101b29190611daf565b34801561021757600080fd5b5061022b610226366004611dc2565b6106bd565b6040516001600160a01b0390911681526020016101b2565b34801561024f57600080fd5b5061026361025e366004611df7565b6106e4565b005b34801561027157600080fd5b506101a6610280366004611dc2565b6107fa565b34801561029157600080fd5b506102636102a0366004611e21565b61081e565b6102636102b3366004611dc2565b61084f565b3480156102c457600080fd5b506101fe6102d3366004611dc2565b610b70565b3480156102e457600080fd5b506102636102f3366004611e21565b610b7d565b34801561030457600080fd5b506101db610313366004611e5d565b610b98565b34801561032457600080fd5b506101a6610333366004611d22565b8051602081830181018051600f8252928201919093012091525460ff1681565b34801561035f57600080fd5b5061026361036e366004611e78565b610ba4565b34801561037f57600080fd5b5061022b61038e366004611dc2565b610e0a565b34801561039f57600080fd5b506101fe610e6a565b3480156103b457600080fd5b506101db6103c3366004611e5d565b610ef8565b6101db6103d6366004611e9a565b610f7e565b3480156103e757600080fd5b506101db6103f6366004611dc2565b61116c565b34801561040757600080fd5b506101fe6111ea565b34801561041c57600080fd5b5061026361042b366004611ee8565b6111f9565b34801561043c57600080fd5b5061022b61044b366004611dc2565b611208565b34801561045c57600080fd5b5061026361046b366004611f24565b611214565b34801561047c57600080fd5b506101fe61048b366004611dc2565b611246565b34801561049c57600080fd5b506101fe611357565b3480156104b157600080fd5b506101a66104c0366004611fa0565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156104fa57600080fd5b50600c546101db565b60006001600160e01b031982166380ac58cd60e01b148061053457506001600160e01b03198216635b5e139f60e01b145b8061054f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000336105a05760405162461bcd60e51b815260206004820152601460248201527361646472657373206e6f7420666f756e6420212160601b60448201526064015b60405180910390fd5b6008546105ae906001611fe9565b600881905560408051606081018252828152602080820186815233838501526000948552600e825292909320815181559151805191938493926105f79260018501920190611baa565b5060409190910151600290910180546001600160a01b0319166001600160a01b039092169190911790555050600854919050565b60606000805461063a90612001565b80601f016020809104026020016040519081016040528092919081815260200182805461066690612001565b80156106b35780601f10610688576101008083540402835291602001916106b3565b820191906000526020600020905b81548152906001019060200180831161069657829003601f168201915b5050505050905090565b60006106c882611364565b506000908152600460205260409020546001600160a01b031690565b60006106ef82610e0a565b9050806001600160a01b0316836001600160a01b0316141561075d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610597565b336001600160a01b0382161480610779575061077981336104c0565b6107eb5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610597565b6107f583836113c6565b505050565b60008181526002602052604081205481906001600160a01b031615155b9392505050565b6108283382611434565b6108445760405162461bcd60e51b81526004016105979061203c565b6107f58383836114b2565b336108905760405162461bcd60e51b81526020600482015260116024820152701859191c995cdcc81b9bdd08199bdd5b99607a1b6044820152606401610597565b600061089b82610e0a565b90506001600160a01b0381166108f35760405162461bcd60e51b815260206004820181905260248201527f746f6b656e206f776e65722061646472657373206973206d69737365642021216044820152606401610597565b6001600160a01b03811633141561097d5760405162461bcd60e51b815260206004820152604260248201527f746865206f6e652077686f2077616e747320746f206275792074686520746f6b60448201527f656e2073686f756c64206e6f742062652074686520746f6b656e2773206f776e60648201526132b960f11b608482015260a401610597565b6000828152600d6020908152604091829020825160e0810184528154815260018201546001600160a01b0390811693820193909352600282015483169381019390935260038101549091166060830152600481015460808301819052600582015460a084015260069091015460c0830152341015610a3d5760405162461bcd60e51b815260206004820152601b60248201527f7072696365206973206c657373207468616e20726571756972656400000000006044820152606401610597565b80604001516001600160a01b03166108fc349081150290604051600060405180830381858888f19350505050158015610a7a573d6000803e3d6000fd5b50610a868233856114b2565b6040810180516001600160a01b0316606083015233905260c08101805160019190610ab2908390611fe9565b9052506000838152600d6020908152604080832084518155918401516001830180546001600160a01b03199081166001600160a01b039384161790915585830151600285018054831691841691909117905560608601516003850180549092169083161790556080850151600484015560a0850151600584015560c0850151600690930192909255600b54600c5491519216926108fc8215029290818181858888f19350505050158015610b6a573d6000803e3d6000fd5b50505050565b6060600061081783611246565b6107f583838360405180602001604052806000815250611214565b60008061081783610ef8565b33610be65760405162461bcd60e51b815260206004820152601260248201527161646472657373206973206d697373696e6760701b6044820152606401610597565b6000610bf183610e0a565b90506001600160a01b0381163314610c5d5760405162461bcd60e51b815260206004820152602960248201527f796f75277265206e6f7420616c6c6f77656420746f206d61696e7461696e20746044820152683434b9903a37b5b2b760b91b6064820152608401610597565b6000600d60008581526020019081526020016000206040518060e0016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600482015481526020016005820154815260200160068201548152505090508281608001818152505080600d60008681526020019081526020016000206000820151816000015560208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816004015560a0820151816005015560c0820151816006015590505050505050565b6000818152600260205260408120546001600160a01b03168061054f5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610597565b600a8054610e7790612001565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea390612001565b8015610ef05780601f10610ec557610100808354040283529160200191610ef0565b820191906000526020600020905b815481529060010190602001808311610ed357829003601f168201915b505050505081565b60006001600160a01b038216610f625760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610597565b506001600160a01b031660009081526003602052604090205490565b600033610fc45760405162461bcd60e51b815260206004820152601460248201527361646472657373206e6f7420666f756e6420212160601b6044820152606401610597565b600f84604051610fd4919061208a565b9081526040519081900360200190205460ff16156110345760405162461bcd60e51b815260206004820152601a60248201527f746f6b656e55524920697320616c7265616479206d696e7465640000000000006044820152606401610597565b600083116110845760405162461bcd60e51b815260206004820152601860248201527f5072696365206d7573742062652061626f7665207a65726f00000000000000006044820152606401610597565b600754611092906001611fe9565b60078190556110a290339061164e565b6110ae60075485611790565b6110b93060016111f9565b506040805160e08101825260078054808352336020808501828152858701928352600060608701818152608088019a8b5260a08801998a5260c08801828152958252600d909352969096209451855594516001850180546001600160a01b039283166001600160a01b031991821617909155915160028601805491831691841691909117905594516003850180549190961691161790935593516004820155915160058301555160069091015554919050565b600b546000906001600160a01b031633146111e15760405162461bcd60e51b815260206004820152602f60248201527f796f7520646f6e277420686176652061636365737320746f206d6f646966792060448201526e74686520746f6b656e20707269636560881b6064820152608401610597565b50600c81905590565b60606001805461063a90612001565b61120433838361182a565b5050565b60008061081783610e0a565b61121e3383611434565b61123a5760405162461bcd60e51b81526004016105979061203c565b610b6a848484846118f9565b606061125182611364565b6000828152600660205260408120805461126a90612001565b80601f016020809104026020016040519081016040528092919081815260200182805461129690612001565b80156112e35780601f106112b8576101008083540402835291602001916112e3565b820191906000526020600020905b8154815290600101906020018083116112c657829003601f168201915b50505050509050600061130160408051602081019091526000815290565b9050805160001415611314575092915050565b81511561134657808260405160200161132e9291906120a6565b60405160208183030381529060405292505050919050565b61134f8461192c565b949350505050565b60098054610e7790612001565b6000818152600260205260409020546001600160a01b03166113c35760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610597565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906113fb82610e0a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061144083610e0a565b9050806001600160a01b0316846001600160a01b0316148061148757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061134f5750836001600160a01b03166114a0846106bd565b6001600160a01b031614949350505050565b826001600160a01b03166114c582610e0a565b6001600160a01b0316146115295760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610597565b6001600160a01b03821661158b5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610597565b6115966000826113c6565b6001600160a01b03831660009081526003602052604081208054600192906115bf9084906120d5565b90915550506001600160a01b03821660009081526003602052604081208054600192906115ed908490611fe9565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166116a45760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610597565b6000818152600260205260409020546001600160a01b0316156117095760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610597565b6001600160a01b0382166000908152600360205260408120805460019290611732908490611fe9565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000828152600260205260409020546001600160a01b031661180b5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610597565b600082815260066020908152604090912082516107f592840190611baa565b816001600160a01b0316836001600160a01b0316141561188c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610597565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6119048484846114b2565b6119108484848461199f565b610b6a5760405162461bcd60e51b8152600401610597906120ec565b606061193782611364565b600061194e60408051602081019091526000815290565b9050600081511161196e5760405180602001604052806000815250610817565b8061197884611aac565b6040516020016119899291906120a6565b6040516020818303038152906040529392505050565b60006001600160a01b0384163b15611aa157604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906119e390339089908890889060040161213e565b602060405180830381600087803b1580156119fd57600080fd5b505af1925050508015611a2d575060408051601f3d908101601f19168201909252611a2a9181019061217b565b60015b611a87573d808015611a5b576040519150601f19603f3d011682016040523d82523d6000602084013e611a60565b606091505b508051611a7f5760405162461bcd60e51b8152600401610597906120ec565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061134f565b506001949350505050565b606081611ad05750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611afa5780611ae481612198565b9150611af39050600a836121c9565b9150611ad4565b60008167ffffffffffffffff811115611b1557611b15611c76565b6040519080825280601f01601f191660200182016040528015611b3f576020820181803683370190505b5090505b841561134f57611b546001836120d5565b9150611b61600a866121dd565b611b6c906030611fe9565b60f81b818381518110611b8157611b816121f1565b60200101906001600160f81b031916908160001a905350611ba3600a866121c9565b9450611b43565b828054611bb690612001565b90600052602060002090601f016020900481019282611bd85760008555611c1e565b82601f10611bf157805160ff1916838001178555611c1e565b82800160010185558215611c1e579182015b82811115611c1e578251825591602001919060010190611c03565b50611c2a929150611c2e565b5090565b5b80821115611c2a5760008155600101611c2f565b6001600160e01b0319811681146113c357600080fd5b600060208284031215611c6b57600080fd5b813561081781611c43565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611ca757611ca7611c76565b604051601f8501601f19908116603f01168101908282118183101715611ccf57611ccf611c76565b81604052809350858152868686011115611ce857600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611d1357600080fd5b61081783833560208501611c8c565b600060208284031215611d3457600080fd5b813567ffffffffffffffff811115611d4b57600080fd5b61134f84828501611d02565b60005b83811015611d72578181015183820152602001611d5a565b83811115610b6a5750506000910152565b60008151808452611d9b816020860160208601611d57565b601f01601f19169290920160200192915050565b6020815260006108176020830184611d83565b600060208284031215611dd457600080fd5b5035919050565b80356001600160a01b0381168114611df257600080fd5b919050565b60008060408385031215611e0a57600080fd5b611e1383611ddb565b946020939093013593505050565b600080600060608486031215611e3657600080fd5b611e3f84611ddb565b9250611e4d60208501611ddb565b9150604084013590509250925092565b600060208284031215611e6f57600080fd5b61081782611ddb565b60008060408385031215611e8b57600080fd5b50508035926020909101359150565b600080600060608486031215611eaf57600080fd5b833567ffffffffffffffff811115611ec657600080fd5b611ed286828701611d02565b9660208601359650604090950135949350505050565b60008060408385031215611efb57600080fd5b611f0483611ddb565b915060208301358015158114611f1957600080fd5b809150509250929050565b60008060008060808587031215611f3a57600080fd5b611f4385611ddb565b9350611f5160208601611ddb565b925060408501359150606085013567ffffffffffffffff811115611f7457600080fd5b8501601f81018713611f8557600080fd5b611f9487823560208401611c8c565b91505092959194509250565b60008060408385031215611fb357600080fd5b611fbc83611ddb565b9150611fca60208401611ddb565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611ffc57611ffc611fd3565b500190565b600181811c9082168061201557607f821691505b6020821081141561203657634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b6000825161209c818460208701611d57565b9190910192915050565b600083516120b8818460208801611d57565b8351908301906120cc818360208801611d57565b01949350505050565b6000828210156120e7576120e7611fd3565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061217190830184611d83565b9695505050505050565b60006020828403121561218d57600080fd5b815161081781611c43565b60006000198214156121ac576121ac611fd3565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826121d8576121d86121b3565b500490565b6000826121ec576121ec6121b3565b500690565b634e487b7160e01b600052603260045260246000fdfea26469706673582212209fff6b3aa58a448d67ea6e9c25979c8d8f84909e0ab0aa143157399b5bec618164736f6c63430008090033";

type SahabaMarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SahabaMarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SahabaMarketplace__factory extends ContractFactory {
  constructor(...args: SahabaMarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SahabaMarketplace> {
    return super.deploy(overrides || {}) as Promise<SahabaMarketplace>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SahabaMarketplace {
    return super.attach(address) as SahabaMarketplace;
  }
  override connect(signer: Signer): SahabaMarketplace__factory {
    return super.connect(signer) as SahabaMarketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SahabaMarketplaceInterface {
    return new utils.Interface(_abi) as SahabaMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SahabaMarketplace {
    return new Contract(address, _abi, signerOrProvider) as SahabaMarketplace;
  }
}
