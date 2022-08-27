/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NFT, NFTInterface } from "../../contracts/NFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "marketplaceAddress",
        type: "address",
      },
    ],
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
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "createToken",
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
  "0x60806040523480156200001157600080fd5b5060405162002d2d38038062002d2d833981810160405281019062000037919062000239565b6040518060400160405280601381526020017f506172746e6572766572736520546f6b656e73000000000000000000000000008152506040518060400160405280600481526020017f504e5654000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb9291906200011f565b508060019080519060200190620000d49291906200011f565b50505080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620002d0565b8280546200012d906200029a565b90600052602060002090601f0160209004810192826200015157600085556200019d565b82601f106200016c57805160ff19168380011785556200019d565b828001600101855582156200019d579182015b828111156200019c5782518255916020019190600101906200017f565b5b509050620001ac9190620001b0565b5090565b5b80821115620001cb576000816000905550600101620001b1565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200020182620001d4565b9050919050565b6200021381620001f4565b81146200021f57600080fd5b50565b600081519050620002338162000208565b92915050565b600060208284031215620002525762000251620001cf565b5b6000620002628482850162000222565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002b357607f821691505b60208210811415620002ca57620002c96200026b565b5b50919050565b612a4d80620002e06000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb4651461026f578063b88d4fde1461028b578063c87b56dd146102a7578063e985e9c5146102d7576100ea565b80636352211e146101f157806370a082311461022157806395d89b4114610251576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a557806345576f94146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611958565b610307565b60405161011691906119a0565b60405180910390f35b6101276103e9565b6040516101349190611a54565b60405180910390f35b61015760048036038101906101529190611aac565b61047b565b6040516101649190611b1a565b60405180910390f35b61018760048036038101906101829190611b61565b6104c1565b005b6101a3600480360381019061019e9190611ba1565b6105d9565b005b6101bf60048036038101906101ba9190611ba1565b610639565b005b6101db60048036038101906101d69190611d29565b610659565b6040516101e89190611d81565b60405180910390f35b61020b60048036038101906102069190611aac565b610771565b6040516102189190611b1a565b60405180910390f35b61023b60048036038101906102369190611d9c565b610823565b6040516102489190611d81565b60405180910390f35b6102596108db565b6040516102669190611a54565b60405180910390f35b61028960048036038101906102849190611df5565b61096d565b005b6102a560048036038101906102a09190611ed6565b610983565b005b6102c160048036038101906102bc9190611aac565b6109e5565b6040516102ce9190611a54565b60405180910390f35b6102f160048036038101906102ec9190611f59565b610af8565b6040516102fe91906119a0565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e182610b8c565b5b9050919050565b6060600080546103f890611fc8565b80601f016020809104026020016040519081016040528092919081815260200182805461042490611fc8565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600061048682610bf6565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104cc82610771565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561053d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105349061206c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661055c610c41565b73ffffffffffffffffffffffffffffffffffffffff16148061058b575061058a81610585610c41565b610af8565b5b6105ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c1906120fe565b60405180910390fd5b6105d48383610c49565b505050565b6105ea6105e4610c41565b82610d02565b610629576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062090612190565b60405180910390fd5b610634838383610d97565b505050565b61065483838360405180602001604052806000815250610983565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156106ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c1906121fc565b60405180910390fd5b60008251141561070f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070690612268565b60405180910390fd5b6107196007610ffe565b60006107256007611014565b90506107313382611022565b61073b81846111fc565b610768600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600161096d565b80915050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561081a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610811906122d4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610894576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088b90612366565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546108ea90611fc8565b80601f016020809104026020016040519081016040528092919081815260200182805461091690611fc8565b80156109635780601f1061093857610100808354040283529160200191610963565b820191906000526020600020905b81548152906001019060200180831161094657829003601f168201915b5050505050905090565b61097f610978610c41565b8383611270565b5050565b61099461098e610c41565b83610d02565b6109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90612190565b60405180910390fd5b6109df848484846113dd565b50505050565b60606109f082610bf6565b6000600660008481526020019081526020016000208054610a1090611fc8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3c90611fc8565b8015610a895780601f10610a5e57610100808354040283529160200191610a89565b820191906000526020600020905b815481529060010190602001808311610a6c57829003601f168201915b505050505090506000610a9a611439565b9050600081511415610ab0578192505050610af3565b600082511115610ae5578082604051602001610acd9291906123c2565b60405160208183030381529060405292505050610af3565b610aee84611450565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610bff816114b8565b610c3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c35906122d4565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cbc83610771565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d0e83610771565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d505750610d4f8185610af8565b5b80610d8e57508373ffffffffffffffffffffffffffffffffffffffff16610d768461047b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610db782610771565b73ffffffffffffffffffffffffffffffffffffffff1614610e0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0490612458565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e74906124ea565b60405180910390fd5b610e88838383611524565b610e93600082610c49565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ee39190612539565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f3a919061256d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ff9838383611529565b505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611092576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110899061260f565b60405180910390fd5b61109b816114b8565b156110db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d29061267b565b60405180910390fd5b6110e760008383611524565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611137919061256d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46111f860008383611529565b5050565b611205826114b8565b611244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123b9061270d565b60405180910390fd5b8060066000848152602001908152602001600020908051906020019061126b929190611849565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d690612779565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113d091906119a0565b60405180910390a3505050565b6113e8848484610d97565b6113f48484848461152e565b611433576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142a9061280b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061145b82610bf6565b6000611465611439565b9050600081511161148557604051806020016040528060008152506114b0565b8061148f846116c5565b6040516020016114a09291906123c2565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b600061154f8473ffffffffffffffffffffffffffffffffffffffff16611826565b156116b8578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611578610c41565b8786866040518563ffffffff1660e01b815260040161159a9493929190612880565b602060405180830381600087803b1580156115b457600080fd5b505af19250505080156115e557506040513d601f19601f820116820180604052508101906115e291906128e1565b60015b611668573d8060008114611615576040519150601f19603f3d011682016040523d82523d6000602084013e61161a565b606091505b50600081511415611660576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116579061280b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506116bd565b600190505b949350505050565b6060600082141561170d576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611821565b600082905060005b6000821461173f5780806117289061290e565b915050600a826117389190612986565b9150611715565b60008167ffffffffffffffff81111561175b5761175a611bfe565b5b6040519080825280601f01601f19166020018201604052801561178d5781602001600182028036833780820191505090505b5090505b6000851461181a576001826117a69190612539565b9150600a856117b591906129b7565b60306117c1919061256d565b60f81b8183815181106117d7576117d66129e8565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856118139190612986565b9450611791565b8093505050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b82805461185590611fc8565b90600052602060002090601f01602090048101928261187757600085556118be565b82601f1061189057805160ff19168380011785556118be565b828001600101855582156118be579182015b828111156118bd5782518255916020019190600101906118a2565b5b5090506118cb91906118cf565b5090565b5b808211156118e85760008160009055506001016118d0565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61193581611900565b811461194057600080fd5b50565b6000813590506119528161192c565b92915050565b60006020828403121561196e5761196d6118f6565b5b600061197c84828501611943565b91505092915050565b60008115159050919050565b61199a81611985565b82525050565b60006020820190506119b56000830184611991565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119f55780820151818401526020810190506119da565b83811115611a04576000848401525b50505050565b6000601f19601f8301169050919050565b6000611a26826119bb565b611a3081856119c6565b9350611a408185602086016119d7565b611a4981611a0a565b840191505092915050565b60006020820190508181036000830152611a6e8184611a1b565b905092915050565b6000819050919050565b611a8981611a76565b8114611a9457600080fd5b50565b600081359050611aa681611a80565b92915050565b600060208284031215611ac257611ac16118f6565b5b6000611ad084828501611a97565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b0482611ad9565b9050919050565b611b1481611af9565b82525050565b6000602082019050611b2f6000830184611b0b565b92915050565b611b3e81611af9565b8114611b4957600080fd5b50565b600081359050611b5b81611b35565b92915050565b60008060408385031215611b7857611b776118f6565b5b6000611b8685828601611b4c565b9250506020611b9785828601611a97565b9150509250929050565b600080600060608486031215611bba57611bb96118f6565b5b6000611bc886828701611b4c565b9350506020611bd986828701611b4c565b9250506040611bea86828701611a97565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c3682611a0a565b810181811067ffffffffffffffff82111715611c5557611c54611bfe565b5b80604052505050565b6000611c686118ec565b9050611c748282611c2d565b919050565b600067ffffffffffffffff821115611c9457611c93611bfe565b5b611c9d82611a0a565b9050602081019050919050565b82818337600083830152505050565b6000611ccc611cc784611c79565b611c5e565b905082815260208101848484011115611ce857611ce7611bf9565b5b611cf3848285611caa565b509392505050565b600082601f830112611d1057611d0f611bf4565b5b8135611d20848260208601611cb9565b91505092915050565b600060208284031215611d3f57611d3e6118f6565b5b600082013567ffffffffffffffff811115611d5d57611d5c6118fb565b5b611d6984828501611cfb565b91505092915050565b611d7b81611a76565b82525050565b6000602082019050611d966000830184611d72565b92915050565b600060208284031215611db257611db16118f6565b5b6000611dc084828501611b4c565b91505092915050565b611dd281611985565b8114611ddd57600080fd5b50565b600081359050611def81611dc9565b92915050565b60008060408385031215611e0c57611e0b6118f6565b5b6000611e1a85828601611b4c565b9250506020611e2b85828601611de0565b9150509250929050565b600067ffffffffffffffff821115611e5057611e4f611bfe565b5b611e5982611a0a565b9050602081019050919050565b6000611e79611e7484611e35565b611c5e565b905082815260208101848484011115611e9557611e94611bf9565b5b611ea0848285611caa565b509392505050565b600082601f830112611ebd57611ebc611bf4565b5b8135611ecd848260208601611e66565b91505092915050565b60008060008060808587031215611ef057611eef6118f6565b5b6000611efe87828801611b4c565b9450506020611f0f87828801611b4c565b9350506040611f2087828801611a97565b925050606085013567ffffffffffffffff811115611f4157611f406118fb565b5b611f4d87828801611ea8565b91505092959194509250565b60008060408385031215611f7057611f6f6118f6565b5b6000611f7e85828601611b4c565b9250506020611f8f85828601611b4c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611fe057607f821691505b60208210811415611ff457611ff3611f99565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006120566021836119c6565b915061206182611ffa565b604082019050919050565b6000602082019050818103600083015261208581612049565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006120e8603e836119c6565b91506120f38261208c565b604082019050919050565b60006020820190508181036000830152612117816120db565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b600061217a602e836119c6565b91506121858261211e565b604082019050919050565b600060208201905081810360008301526121a98161216d565b9050919050565b7f61646472657373206e6f7420666f756e64202121000000000000000000000000600082015250565b60006121e66014836119c6565b91506121f1826121b0565b602082019050919050565b60006020820190508181036000830152612215816121d9565b9050919050565b7f746f6b656e555249206973206e6f742065786973740000000000000000000000600082015250565b60006122526015836119c6565b915061225d8261221c565b602082019050919050565b6000602082019050818103600083015261228181612245565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006122be6018836119c6565b91506122c982612288565b602082019050919050565b600060208201905081810360008301526122ed816122b1565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006123506029836119c6565b915061235b826122f4565b604082019050919050565b6000602082019050818103600083015261237f81612343565b9050919050565b600081905092915050565b600061239c826119bb565b6123a68185612386565b93506123b68185602086016119d7565b80840191505092915050565b60006123ce8285612391565b91506123da8284612391565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006124426025836119c6565b915061244d826123e6565b604082019050919050565b6000602082019050818103600083015261247181612435565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006124d46024836119c6565b91506124df82612478565b604082019050919050565b60006020820190508181036000830152612503816124c7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061254482611a76565b915061254f83611a76565b9250828210156125625761256161250a565b5b828203905092915050565b600061257882611a76565b915061258383611a76565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156125b8576125b761250a565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006125f96020836119c6565b9150612604826125c3565b602082019050919050565b60006020820190508181036000830152612628816125ec565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612665601c836119c6565b91506126708261262f565b602082019050919050565b6000602082019050818103600083015261269481612658565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006126f7602e836119c6565b91506127028261269b565b604082019050919050565b60006020820190508181036000830152612726816126ea565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006127636019836119c6565b915061276e8261272d565b602082019050919050565b6000602082019050818103600083015261279281612756565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006127f56032836119c6565b915061280082612799565b604082019050919050565b60006020820190508181036000830152612824816127e8565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006128528261282b565b61285c8185612836565b935061286c8185602086016119d7565b61287581611a0a565b840191505092915050565b60006080820190506128956000830187611b0b565b6128a26020830186611b0b565b6128af6040830185611d72565b81810360608301526128c18184612847565b905095945050505050565b6000815190506128db8161192c565b92915050565b6000602082840312156128f7576128f66118f6565b5b6000612905848285016128cc565b91505092915050565b600061291982611a76565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561294c5761294b61250a565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061299182611a76565b915061299c83611a76565b9250826129ac576129ab612957565b5b828204905092915050565b60006129c282611a76565b91506129cd83611a76565b9250826129dd576129dc612957565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212207b36f3056bfb5e65f382f9ee4acb3630aed7700a7303749d42b5ba0aee74190e64736f6c63430008090033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    marketplaceAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFT> {
    return super.deploy(marketplaceAddress, overrides || {}) as Promise<NFT>;
  }
  override getDeployTransaction(
    marketplaceAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(marketplaceAddress, overrides || {});
  }
  override attach(address: string): NFT {
    return super.attach(address) as NFT;
  }
  override connect(signer: Signer): NFT__factory {
    return super.connect(signer) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new utils.Interface(_abi) as NFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT {
    return new Contract(address, _abi, signerOrProvider) as NFT;
  }
}
