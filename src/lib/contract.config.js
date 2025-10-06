// Mainnet contract address
export const SeaDrop="0x529B376eCCE29f132feE5a212187E5A204D7EA0e";

export const SeaDropABI= [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "CreatorPayoutAddressCannotBeZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DuplicateFeeRecipient",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DuplicatePayer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeRecipientCannotBeZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeRecipientNotAllowed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeRecipientNotPresent",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "want",
          "type": "uint256"
        }
      ],
      "name": "IncorrectPayment",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "feeBps",
          "type": "uint256"
        }
      ],
      "name": "InvalidFeeBps",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidProof",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recoveredSigner",
          "type": "address"
        }
      ],
      "name": "InvalidSignature",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maximum",
          "type": "uint256"
        }
      ],
      "name": "InvalidSignedEndTime",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minimumOrMaximum",
          "type": "uint256"
        }
      ],
      "name": "InvalidSignedFeeBps",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maximum",
          "type": "uint256"
        }
      ],
      "name": "InvalidSignedMaxTokenSupplyForStage",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maximum",
          "type": "uint256"
        }
      ],
      "name": "InvalidSignedMaxTotalMintableByWallet",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minimum",
          "type": "uint256"
        }
      ],
      "name": "InvalidSignedMintPrice",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minimum",
          "type": "uint256"
        }
      ],
      "name": "InvalidSignedStartTime",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintQuantityCannotBeZero",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "allowed",
          "type": "uint256"
        }
      ],
      "name": "MintQuantityExceedsMaxMintedPerWallet",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxSupply",
          "type": "uint256"
        }
      ],
      "name": "MintQuantityExceedsMaxSupply",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxTokenSupplyForStage",
          "type": "uint256"
        }
      ],
      "name": "MintQuantityExceedsMaxTokenSupplyForStage",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "currentTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endTimestamp",
          "type": "uint256"
        }
      ],
      "name": "NotActive",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "OnlyINonFungibleSeaDropToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PayerCannotBeZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PayerNotAllowed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PayerNotPresent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SignatureAlreadyUsed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SignedMintsMustRestrictFeeRecipients",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SignerCannotBeZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SignerNotPresent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TokenGatedDropAllowedNftTokenCannotBeDropToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TokenGatedDropAllowedNftTokenCannotBeZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TokenGatedDropStageNotPresent",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "allowedNftToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowedNftTokenId",
          "type": "uint256"
        }
      ],
      "name": "TokenGatedNotTokenOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "allowedNftToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowedNftTokenId",
          "type": "uint256"
        }
      ],
      "name": "TokenGatedTokenIdAlreadyRedeemed",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousMerkleRoot",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newMerkleRoot",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "string[]",
          "name": "publicKeyURI",
          "type": "string[]"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "allowListURI",
          "type": "string"
        }
      ],
      "name": "AllowListUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bool",
          "name": "allowed",
          "type": "bool"
        }
      ],
      "name": "AllowedFeeRecipientUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newPayoutAddress",
          "type": "address"
        }
      ],
      "name": "CreatorPayoutAddressUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newDropURI",
          "type": "string"
        }
      ],
      "name": "DropURIUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bool",
          "name": "allowed",
          "type": "bool"
        }
      ],
      "name": "PayerUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "mintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint48",
              "name": "startTime",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "endTime",
              "type": "uint48"
            },
            {
              "internalType": "uint16",
              "name": "maxTotalMintableByWallet",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "feeBps",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct PublicDrop",
          "name": "publicDrop",
          "type": "tuple"
        }
      ],
      "name": "PublicDropUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "quantityMinted",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "unitMintPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feeBps",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "dropStageIndex",
          "type": "uint256"
        }
      ],
      "name": "SeaDropMint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "signer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "minMintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint24",
              "name": "maxMaxTotalMintableByWallet",
              "type": "uint24"
            },
            {
              "internalType": "uint40",
              "name": "minStartTime",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "maxEndTime",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "maxMaxTokenSupplyForStage",
              "type": "uint40"
            },
            {
              "internalType": "uint16",
              "name": "minFeeBps",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "maxFeeBps",
              "type": "uint16"
            }
          ],
          "indexed": false,
          "internalType": "struct SignedMintValidationParams",
          "name": "signedMintValidationParams",
          "type": "tuple"
        }
      ],
      "name": "SignedMintValidationParamsUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "allowedNftToken",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "mintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint16",
              "name": "maxTotalMintableByWallet",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "startTime",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "endTime",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "dropStageIndex",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "maxTokenSupplyForStage",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "feeBps",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct TokenGatedDropStage",
          "name": "dropStage",
          "type": "tuple"
        }
      ],
      "name": "TokenGatedDropStageUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        }
      ],
      "name": "getAllowListMerkleRoot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        }
      ],
      "name": "getAllowedFeeRecipients",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "allowedNftToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowedNftTokenId",
          "type": "uint256"
        }
      ],
      "name": "getAllowedNftTokenIdIsRedeemed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        }
      ],
      "name": "getCreatorPayoutAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        }
      ],
      "name": "getFeeRecipientIsAllowed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        }
      ],
      "name": "getPayerIsAllowed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        }
      ],
      "name": "getPayers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        }
      ],
      "name": "getPublicDrop",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "mintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint48",
              "name": "startTime",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "endTime",
              "type": "uint48"
            },
            {
              "internalType": "uint16",
              "name": "maxTotalMintableByWallet",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "feeBps",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "internalType": "struct PublicDrop",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "getSignedMintValidationParams",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "minMintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint24",
              "name": "maxMaxTotalMintableByWallet",
              "type": "uint24"
            },
            {
              "internalType": "uint40",
              "name": "minStartTime",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "maxEndTime",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "maxMaxTokenSupplyForStage",
              "type": "uint40"
            },
            {
              "internalType": "uint16",
              "name": "minFeeBps",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "maxFeeBps",
              "type": "uint16"
            }
          ],
          "internalType": "struct SignedMintValidationParams",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        }
      ],
      "name": "getSigners",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        }
      ],
      "name": "getTokenGatedAllowedTokens",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "allowedNftToken",
          "type": "address"
        }
      ],
      "name": "getTokenGatedDrop",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "mintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint16",
              "name": "maxTotalMintableByWallet",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "startTime",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "endTime",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "dropStageIndex",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "maxTokenSupplyForStage",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "feeBps",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "internalType": "struct TokenGatedDropStage",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minterIfNotPayer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "mintPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxTotalMintableByWallet",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dropStageIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxTokenSupplyForStage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "feeBps",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "internalType": "struct MintParams",
          "name": "mintParams",
          "type": "tuple"
        },
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        }
      ],
      "name": "mintAllowList",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minterIfNotPayer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "allowedNftToken",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "allowedNftTokenIds",
              "type": "uint256[]"
            }
          ],
          "internalType": "struct TokenGatedMintParams",
          "name": "mintParams",
          "type": "tuple"
        }
      ],
      "name": "mintAllowedTokenHolder",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minterIfNotPayer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "name": "mintPublic",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "nftContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minterIfNotPayer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "mintPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxTotalMintableByWallet",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "endTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dropStageIndex",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxTokenSupplyForStage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "feeBps",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "internalType": "struct MintParams",
          "name": "mintParams",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "salt",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "mintSigned",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "merkleRoot",
              "type": "bytes32"
            },
            {
              "internalType": "string[]",
              "name": "publicKeyURIs",
              "type": "string[]"
            },
            {
              "internalType": "string",
              "name": "allowListURI",
              "type": "string"
            }
          ],
          "internalType": "struct AllowListData",
          "name": "allowListData",
          "type": "tuple"
        }
      ],
      "name": "updateAllowList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "allowed",
          "type": "bool"
        }
      ],
      "name": "updateAllowedFeeRecipient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "payoutAddress",
          "type": "address"
        }
      ],
      "name": "updateCreatorPayoutAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "dropURI",
          "type": "string"
        }
      ],
      "name": "updateDropURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "allowed",
          "type": "bool"
        }
      ],
      "name": "updatePayer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "mintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint48",
              "name": "startTime",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "endTime",
              "type": "uint48"
            },
            {
              "internalType": "uint16",
              "name": "maxTotalMintableByWallet",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "feeBps",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "internalType": "struct PublicDrop",
          "name": "publicDrop",
          "type": "tuple"
        }
      ],
      "name": "updatePublicDrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "signer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "minMintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint24",
              "name": "maxMaxTotalMintableByWallet",
              "type": "uint24"
            },
            {
              "internalType": "uint40",
              "name": "minStartTime",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "maxEndTime",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "maxMaxTokenSupplyForStage",
              "type": "uint40"
            },
            {
              "internalType": "uint16",
              "name": "minFeeBps",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "maxFeeBps",
              "type": "uint16"
            }
          ],
          "internalType": "struct SignedMintValidationParams",
          "name": "signedMintValidationParams",
          "type": "tuple"
        }
      ],
      "name": "updateSignedMintValidationParams",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "allowedNftToken",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "mintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint16",
              "name": "maxTotalMintableByWallet",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "startTime",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "endTime",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "dropStageIndex",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "maxTokenSupplyForStage",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "feeBps",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "internalType": "struct TokenGatedDropStage",
          "name": "dropStage",
          "type": "tuple"
        }
      ],
      "name": "updateTokenGatedDrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];

export const ERC721SeaDropbytecode = "0x608060405260016010553480156200001657600080fd5b50604051620052ed380380620052ed8339810160408190526200003991620002f8565b82828181818160026200004d83826200049e565b5060036200005c82826200049e565b5060016000555062000072925050620001229050565b5050805160005b81811015620000d8576001601160008584815181106200009d576200009d6200056a565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905560010162000079565b508151620000ee906012906020850190620001a1565b506040517fd7aca75208b9be5ffc04c6a01922020ffd62b55e68e502e317f5344960279af890600090a15050505062000580565b303b15620001425760405162dc149f60e41b815260040160405180910390fd5b6200014d336200014f565b565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054828255906000526020600020908101928215620001f9579160200282015b82811115620001f957825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620001c2565b50620002079291506200020b565b5090565b5b808211156200020757600081556001016200020c565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000263576200026362000222565b604052919050565b600082601f8301126200027d57600080fd5b81516001600160401b0381111562000299576200029962000222565b6020620002af601f8301601f1916820162000238565b8281528582848701011115620002c457600080fd5b60005b83811015620002e4578581018301518282018401528201620002c7565b506000928101909101919091529392505050565b6000806000606084860312156200030e57600080fd5b83516001600160401b03808211156200032657600080fd5b62000334878388016200026b565b94506020915081860151818111156200034c57600080fd5b6200035a888289016200026b565b9450506040860151818111156200037057600080fd5b8601601f810188136200038257600080fd5b80518281111562000397576200039762000222565b8060051b9250620003aa84840162000238565b818152928201840192848101908a851115620003c557600080fd5b928501925b84841015620003ff57835192506001600160a01b0383168314620003ee5760008081fd5b8282529285019290850190620003ca565b8096505050505050509250925092565b600181811c908216806200042457607f821691505b6020821081036200044557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200049957600081815260208120601f850160051c81016020861015620004745750805b601f850160051c820191505b81811015620004955782815560010162000480565b5050505b505050565b81516001600160401b03811115620004ba57620004ba62000222565b620004d281620004cb84546200040f565b846200044b565b602080601f8311600181146200050a5760008415620004f15750858301515b600019600386901b1c1916600185901b17855562000495565b600085815260208120601f198616915b828110156200053b578886015182559484019460019091019084016200051a565b50858210156200055a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b614d5d80620005906000396000f3fe608060405234801561001057600080fd5b50600436106103205760003560e01c80636c0360eb116101a7578063a22cb465116100ee578063c87b56dd11610097578063e8a3d48511610071578063e8a3d48514610736578063e985e9c51461073e578063f2fde38b1461075157600080fd5b8063c87b56dd14610708578063cb743ba81461071b578063d5abeb011461072e57600080fd5b8063ad2f852a116100c8578063ad2f852a146106cf578063b88d4fde146106ed578063c6ab67a31461070057600080fd5b8063a22cb46514610696578063a4830114146106a9578063a9fc664e146106bc57600080fd5b80637bc2be7611610150578063911f456b1161012a578063911f456b14610668578063938e3d7b1461067b57806395d89b411461068e57600080fd5b80637bc2be7614610609578063840e15d41461061c5780638da5cb5b1461064a57600080fd5b8063715018a611610181578063715018a6146105e657806379ba5097146105ee5780637a05bc82146105f657600080fd5b80636c0360eb146105b85780636f8b44b0146105c057806370a08231146105d357600080fd5b80633680620d1161026b578063511aa644116102145780636352211e116101ee5780636352211e1461057f57806364869dad1461059257806366251b69146105a557600080fd5b8063511aa6441461054657806355f804b31461055957806360c308b61461056c57600080fd5b806342966c681161024557806342966c681461050d57806344dae42c1461052057806348a4c1011461053357600080fd5b80633680620d146104b957806342260b5d146104cc57806342842e0e146104fa57600080fd5b80630d705df6116102cd57806323452b9c116102a757806323452b9c1461045f57806323b872dd146104675780632a55205a1461047a57600080fd5b80630d705df6146103e057806318160ddd146104145780631b73593c1461044c57600080fd5b8063095ea7b3116102fe578063095ea7b31461039a578063098144d4146103af578063099b6bfa146103cd57600080fd5b806301ffc9a71461032557806306fdde031461034d578063081812fc14610362575b600080fd5b610338610333366004613867565b610764565b60405190151581526020015b60405180910390f35b61035561080c565b60405161034491906138f2565b610375610370366004613905565b61089e565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610344565b6103ad6103a8366004613940565b610908565b005b60085473ffffffffffffffffffffffffffffffffffffffff16610375565b6103ad6103db366004613905565b6109f3565b604080517fcaee23ea0000000000000000000000000000000000000000000000000000000081526000602082015201610344565b600154600054037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b604051908152602001610344565b6103ad61045a36600461396c565b610a9d565b6103ad610b36565b6103ad6104753660046139cb565b610b9c565b61048d610488366004613a0c565b610e3f565b6040805173ffffffffffffffffffffffffffffffffffffffff9093168352602083019190915201610344565b6103ad6104c7366004613a2e565b610ea8565b600f547401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1661043e565b6103ad6105083660046139cb565b610f0b565b6103ad61051b366004613905565b610f2b565b6103ad61052e366004613a85565b610f39565b6103ad610541366004613ab2565b6110aa565b6103ad610554366004613bf4565b61114a565b6103ad610567366004613d2a565b6111af565b6103ad61057a366004613d6c565b611243565b61037561058d366004613905565b611255565b6103ad6105a0366004613940565b611260565b6103ad6105b3366004613de1565b6113a0565b610355611405565b6103ad6105ce366004613905565b611414565b61043e6105e1366004613e0f565b611529565b6103ad6115ab565b6103ad6115bf565b6103ad610604366004613e2c565b611676565b6103ad610617366004613e81565b6116db565b61062f61062a366004613e0f565b611740565b60408051938452602084019290925290820152606001610344565b60095473ffffffffffffffffffffffffffffffffffffffff16610375565b6103ad610676366004613ef4565b6117ad565b6103ad610689366004613d2a565b612548565b61035561258f565b6103ad6106a4366004613f30565b61259e565b6103ad6106b7366004613a0c565b612635565b6103ad6106ca366004613e0f565b612673565b600f5473ffffffffffffffffffffffffffffffffffffffff16610375565b6103ad6106fb366004613f65565b612684565b600e5461043e565b610355610716366004613905565b6126f4565b6103ad610729366004613ab2565b612819565b600b5461043e565b610355612886565b61033861074c366004613de1565b612895565b6103ad61075f366004613e0f565b61291a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f1890fe8e0000000000000000000000000000000000000000000000000000000014806107f757507fffffffff0000000000000000000000000000000000000000000000000000000082167f9c15441500000000000000000000000000000000000000000000000000000000145b806108065750610806826129e2565b92915050565b60606002805461081b90614047565b80601f016020809104026020016040519081016040528092919081815260200182805461084790614047565b80156108945780601f1061086957610100808354040283529160200191610894565b820191906000526020600020905b81548152906001019060200180831161087757829003601f168201915b5050505050905090565b60006108a982612b1c565b6108df576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060009081526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061091382611255565b90503373ffffffffffffffffffffffffffffffffffffffff8216146109725761093c8133612895565b610972576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6109fb612b6a565b6000547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0115610a57576040517fe03264af00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600e80549082905560408051828152602081018490527f7c22004198bf87da0f0dab623c72e66ca1200f4454aa3b9ca30f436275428b7c91015b60405180910390a15050565b610aa5612b6a565b610aae82612bfa565b6040517f01308e6500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316906301308e6590610b00908490600401614134565b600060405180830381600087803b158015610b1a57600080fd5b505af1158015610b2e573d6000803e3d6000fd5b505050505050565b610b3e612c5e565b600a80547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055604051600081527f11a3cf439fb225bfe74225716b6774765670ec1060e3796802e62139d69974da9060200160405180910390a1565b6000610ba782612caf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c0e576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281526006602052604090208054610c478187335b73ffffffffffffffffffffffffffffffffffffffff9081169116811491141790565b610c8b57610c558633612895565b610c8b576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516610cd8576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ce58686866001612d6e565b8015610cf057600082555b73ffffffffffffffffffffffffffffffffffffffff86811660009081526005602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019055918716808252919020805460010190554260a01b177c0200000000000000000000000000000000000000000000000000000000176000858152600460205260408120919091557c020000000000000000000000000000000000000000000000000000000084169003610ddf57600184016000818152600460205260408120549003610ddd576000548114610ddd5760008181526004602052604090208490555b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610b2e565b600f8054600091829161271090610e7c907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1686614171565b610e869190614188565b905473ffffffffffffffffffffffffffffffffffffffff169590945092505050565b610eb0612b6a565b610eb982612bfa565b6040517febb4a55f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83169063ebb4a55f90610b00908490600401614380565b610f2683838360405180602001604052806000815250612684565b505050565b610f36816001612e68565b50565b610f41612b6a565b6000610f506020830183613e0f565b73ffffffffffffffffffffffffffffffffffffffff1603610f9d576040517f1cc0baef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612710610fb060408301602084016143ad565b6bffffffffffffffffffffffff16111561101c57610fd460408201602083016143ad565b6040517f3cadbafb0000000000000000000000000000000000000000000000000000000081526bffffffffffffffffffffffff90911660048201526024015b60405180910390fd5b80600f61102982826143ca565b507ff21fccf4d64d86d532c4e4eb86c007b6ad57a460c27d724188625e755ec6cf6d905061105a6020830183613e0f565b61106a60408401602085016143ad565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526bffffffffffffffffffffffff9091166020830152015b60405180910390a150565b6110b2612b6a565b6110bb83612bfa565b6040517f8e7d1e4300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301528215156024830152841690638e7d1e43906044015b600060405180830381600087803b15801561112d57600080fd5b505af1158015611141573d6000803e3d6000fd5b50505050505050565b611152612b6a565b61115b83612bfa565b6040517f4d38017800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841690634d38017890611113908590859060040161442f565b6111b7612b6a565b600c6111c4828483614509565b50600154600054037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff011561123f577f6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c60018061122060005490565b61122a9190614623565b60408051928352602083019190915201610a91565b5050565b61124b612c5e565b61123f8282613025565b600061080682612caf565b6010546001146112cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f5245454e5452414e4359000000000000000000000000000000000000000000006044820152606401611013565b60026010556112da33612bfa565b600b54816113096000547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b6113139190614636565b111561138d57806113456000547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b61134f9190614636565b600b546040517fe12d231400000000000000000000000000000000000000000000000000000000815260048101929092526024820152604401611013565b6113978282613195565b50506001601055565b6113a8612b6a565b6113b182612bfa565b6040517f12738db800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301528316906312738db890602401610b00565b606061140f6131af565b905090565b61141c612b6a565b67ffffffffffffffff811115611461576040517fb43e913700000000000000000000000000000000000000000000000000000000815260048101829052602401611013565b6000547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018110156114f457806114b96000547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b6040517f8c19f1f900000000000000000000000000000000000000000000000000000000815260048101929092526024820152604401611013565b600b8190556040518181527f7810bd47de260c3e9ee10061cf438099dd12256c79485f12f94dbccc981e806c9060200161109f565b600073ffffffffffffffffffffffffffffffffffffffff8216611578576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205467ffffffffffffffff1690565b6115b3612c5e565b6115bd60006131be565b565b600a5473ffffffffffffffffffffffffffffffffffffffff16338114611611576040517fd6eb09ce00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600a80547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055604051600081527f11a3cf439fb225bfe74225716b6774765670ec1060e3796802e62139d69974da9060200160405180910390a1610f36816131be565b61167e612b6a565b61168783612bfa565b6040517fb957d0cb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063b957d0cb906111139085908590600401614649565b6116e3612b6a565b6116ec83612bfa565b6040517ffd9ab22a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063fd9ab22a90611113908590859060040161472e565b73ffffffffffffffffffffffffffffffffffffffff811660009081526005602052604080822054901c67ffffffffffffffff1690806117a06000547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600b549395909450915050565b6117b5612c5e565b803515611827576040517f6f8b44b0000000000000000000000000000000000000000000000000000000008152813560048201523090636f8b44b090602401600060405180830381600087803b15801561180e57600080fd5b505af1158015611822573d6000803e3d6000fd5b505050505b6118346020820182614759565b15905061189e57306355f804b361184e6020840184614759565b6040518363ffffffff1660e01b815260040161186b929190614649565b600060405180830381600087803b15801561188557600080fd5b505af1158015611899573d6000803e3d6000fd5b505050505b6118ab6040820182614759565b159050611915573063938e3d7b6118c56040840184614759565b6040518363ffffffff1660e01b81526004016118e2929190614649565b600060405180830381600087803b1580156118fc57600080fd5b505af1158015611910573d6000803e3d6000fd5b505050505b61193561192860e0830160c084016147be565b65ffffffffffff16151590565b61194861192860c0840160a085016147be565b176001036119ba5730631b73593c6119666080840160608501613e0f565b836080016040518363ffffffff1660e01b81526004016119879291906147d9565b600060405180830381600087803b1580156119a157600080fd5b505af11580156119b5573d6000803e3d6000fd5b505050505b6119c8610140820182614759565b159050611a445730637a05bc826119e56080840160608501613e0f565b6119f3610140850185614759565b6040518463ffffffff1660e01b8152600401611a1193929190614803565b600060405180830381600087803b158015611a2b57600080fd5b505af1158015611a3f573d6000803e3d6000fd5b505050505b6000611a5461016083018361483c565b3514611ace5730633680620d611a706080840160608501613e0f565b611a7e61016085018561483c565b6040518363ffffffff1660e01b8152600401611a9b92919061487a565b600060405180830381600087803b158015611ab557600080fd5b505af1158015611ac9573d6000803e3d6000fd5b505050505b6000611ae26101a083016101808401613e0f565b73ffffffffffffffffffffffffffffffffffffffff1614611bab57306366251b69611b136080840160608501613e0f565b611b256101a085016101808601613e0f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604401600060405180830381600087803b158015611b9257600080fd5b505af1158015611ba6573d6000803e3d6000fd5b505050505b6101a081013515611c25576040517f099b6bfa0000000000000000000000000000000000000000000000000000000081526101a08201356004820152309063099b6bfa90602401600060405180830381600087803b158015611c0c57600080fd5b505af1158015611c20573d6000803e3d6000fd5b505050505b6000611c356101c08301836148a9565b90501115611d395760005b611c4e6101c08301836148a9565b9050811015611d3757306348a4c101611c6d6080850160608601613e0f565b611c7b6101c08601866148a9565b85818110611c8b57611c8b614911565b9050602002016020810190611ca09190613e0f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff92831660048201529116602482015260016044820152606401600060405180830381600087803b158015611d1457600080fd5b505af1158015611d28573d6000803e3d6000fd5b50505050806001019050611c40565b505b6000611d496101e08301836148a9565b90501115611e4d5760005b611d626101e08301836148a9565b9050811015611e4b57306348a4c101611d816080850160608601613e0f565b611d8f6101e08601866148a9565b85818110611d9f57611d9f614911565b9050602002016020810190611db49190613e0f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff92831660048201529116602482015260006044820152606401600060405180830381600087803b158015611e2857600080fd5b505af1158015611e3c573d6000803e3d6000fd5b50505050806001019050611d54565b505b6000611e5d6102008301836148a9565b90501115611f615760005b611e766102008301836148a9565b9050811015611f5f573063cb743ba8611e956080850160608601613e0f565b611ea36102008601866148a9565b85818110611eb357611eb3614911565b9050602002016020810190611ec89190613e0f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff92831660048201529116602482015260016044820152606401600060405180830381600087803b158015611f3c57600080fd5b505af1158015611f50573d6000803e3d6000fd5b50505050806001019050611e68565b505b6000611f716102208301836148a9565b905011156120755760005b611f8a6102208301836148a9565b9050811015612073573063cb743ba8611fa96080850160608601613e0f565b611fb76102208601866148a9565b85818110611fc757611fc7614911565b9050602002016020810190611fdc9190613e0f565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff92831660048201529116602482015260006044820152606401600060405180830381600087803b15801561205057600080fd5b505af1158015612064573d6000803e3d6000fd5b50505050806001019050611f7c565b505b6000612085610260830183614940565b905011156121c95761209b6102408201826148a9565b90506120ab610260830183614940565b9050146120e4576040517fb81aa63900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b6120f5610260830183614940565b90508110156121c75730637bc2be766121146080850160608601613e0f565b6121226102408601866148a9565b8581811061213257612132614911565b90506020020160208101906121479190613e0f565b612155610260870187614940565b8681811061216557612165614911565b905061010002016040518463ffffffff1660e01b815260040161218a939291906149a8565b600060405180830381600087803b1580156121a457600080fd5b505af11580156121b8573d6000803e3d6000fd5b505050508060010190506120e7565b505b60006121d96102808301836148a9565b905011156122e45760005b6121f26102808301836148a9565b90508110156122e2576040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915230637bc2be766122526080860160608701613e0f565b6122606102808701876148a9565b8681811061227057612270614911565b90506020020160208101906122859190613e0f565b846040518463ffffffff1660e01b81526004016122a4939291906149db565b600060405180830381600087803b1580156122be57600080fd5b505af11580156122d2573d6000803e3d6000fd5b50505050816001019150506121e4565b505b60006122f46102c0830183614a9e565b905011156124375761230a6102a08201826148a9565b905061231a6102c0830183614a9e565b905014612353576040517f74ef6df700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b6123646102c0830183614a9e565b9050811015612435573063511aa6446123836080850160608601613e0f565b6123916102a08601866148a9565b858181106123a1576123a1614911565b90506020020160208101906123b69190613e0f565b6123c46102c0870187614a9e565b868181106123d4576123d4614911565b905060e002016040518463ffffffff1660e01b81526004016123f893929190614b05565b600060405180830381600087803b15801561241257600080fd5b505af1158015612426573d6000803e3d6000fd5b50505050806001019050612356565b505b60006124476102e08301836148a9565b90501115610f365760005b6124606102e08301836148a9565b905081101561123f576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091523063511aa6446124b86080860160608701613e0f565b6124c66102e08701876148a9565b868181106124d6576124d6614911565b90506020020160208101906124eb9190613e0f565b846040518463ffffffff1660e01b815260040161250a93929190614bce565b600060405180830381600087803b15801561252457600080fd5b505af1158015612538573d6000803e3d6000fd5b5050505081600101915050612452565b612550612b6a565b600d61255d828483614509565b507f905d981207a7d0b6c62cc46ab0be2a076d0298e4a86d0ab79882dbd01ac373788282604051610a91929190614649565b60606003805461081b90614047565b33600081815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61263d612b6a565b60408051838152602081018390527f6bd5c950a8d8df17f772f5af37cb3655737899cbf903264b9795592da439661c9101610a91565b61267b612c5e565b610f3681613235565b61268f848484610b9c565b73ffffffffffffffffffffffffffffffffffffffff83163b156126ee576126b884848484613308565b6126ee576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60606126ff82612b1c565b612735576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061273f6131af565b90508051600003612760575050604080516020810190915260008152919050565b6040805180820190915260018082527f2f000000000000000000000000000000000000000000000000000000000000006020909201829052825183916127a591614623565b815181106127b5576127b5614911565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016146127e75792915050565b806127f184613482565b604051602001612802929190614c6a565b604051602081830303815290604052915050919050565b612821612b6a565b61282a83612bfa565b6040517f7f2a5cca00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301528215156024830152841690637f2a5cca90604401611113565b6060600d805461081b90614047565b60007fffffffffffffffffffffffffe1ffb687c0ff75ff7ae6c1ffffc2ff32abffc38f73ffffffffffffffffffffffffffffffffffffffff8316016128dc57506001610806565b73ffffffffffffffffffffffffffffffffffffffff80841660009081526007602090815260408083209386168352929052205460ff165b9392505050565b612922612c5e565b73ffffffffffffffffffffffffffffffffffffffff811661296f576040517f7448fbae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600a80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f11a3cf439fb225bfe74225716b6774765670ec1060e3796802e62139d69974da9060200161109f565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f2a55205a000000000000000000000000000000000000000000000000000000001480612a7557507fffffffff0000000000000000000000000000000000000000000000000000000082167fad0d7f6c00000000000000000000000000000000000000000000000000000000145b80612ac157507fffffffff0000000000000000000000000000000000000000000000000000000082167fa07d229a00000000000000000000000000000000000000000000000000000000145b80612b0d57507f49064906000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b806108065750610806826134e4565b600081600111158015612b30575060005482105b80156108065750506000908152600460205260409020547c0100000000000000000000000000000000000000000000000000000000161590565b303314612bc0612b8f60095473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161490565b176000036115bd576040517f5fc483c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526011602052604090205460ff161515600114610f36576040517f15e26ff300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60095473ffffffffffffffffffffffffffffffffffffffff1633146115bd576040517f5fc483c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008180600111612d3c57600054811015612d3c57600081815260046020526040812054907c010000000000000000000000000000000000000000000000000000000082169003612d3a575b8060000361291357507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01600081815260046020526040902054612cfb565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841615801590612da8575073ffffffffffffffffffffffffffffffffffffffff831615155b156126ee5760085473ffffffffffffffffffffffffffffffffffffffff168015612e61576040517fcaee23ea00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff868116602483015285811660448301526064820185905282169063caee23ea9060840160006040518083038186803b158015612e4857600080fd5b505afa158015612e5c573d6000803e3d6000fd5b505050505b5050505050565b6000612e7383612caf565b905080600080612e9186600090815260066020526040902080549091565b915091508415612eea57612ea6818433610c25565b612eea57612eb48333612895565b612eea576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612ef8836000886001612d6e565b8015612f0357600082555b73ffffffffffffffffffffffffffffffffffffffff8316600081815260056020526040902080546fffffffffffffffffffffffffffffffff0190554260a01b177c0300000000000000000000000000000000000000000000000000000000176000878152600460205260408120919091557c020000000000000000000000000000000000000000000000000000000085169003612fd057600186016000818152600460205260408120549003612fce576000548114612fce5760008181526004602052604090208590555b505b604051869060009073ffffffffffffffffffffffffffffffffffffffff8616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050600180548101905550505050565b6012548160005b828110156130b4576000601160006012848154811061304d5761304d614911565b60009182526020808320919091015473ffffffffffffffffffffffffffffffffffffffff168352820192909252604001902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905560010161302c565b5060005b81811015613148576001601160008787858181106130d8576130d8614911565b90506020020160208101906130ed9190613e0f565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790556001016130b8565b506131556012858561379c565b507fbbd3b69c138de4d317d0bc4290282c4e1cbd1e58b579a5b4f114b598c237454d8484604051613187929190614c99565b60405180910390a150505050565b61123f8282604051806020016040528060008152506135c5565b6060600c805461081b90614047565b6009805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60085473ffffffffffffffffffffffffffffffffffffffff908116908216810361328b576040517f4a3bb19e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84811691821790925560408051928416835260208301919091527fcc5dc080ff977b3c3a211fa63ab74f90f658f5ba9d3236e92c8f59570f442aac9101610a91565b6040517f150b7a0200000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290613363903390899088908890600401614cf4565b6020604051808303816000875af19250505080156133bc575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526133b991810190614d33565b60015b613433573d8080156133ea576040519150601f19603f3d011682016040523d82523d6000602084013e6133ef565b606091505b50805160000361342b576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001490505b949350505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a90048061349c57508190037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909101908152919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061357757507f80ac58cd000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b806108065750507fffffffff00000000000000000000000000000000000000000000000000000000167f5b5e139f000000000000000000000000000000000000000000000000000000001490565b6135cf8383613651565b73ffffffffffffffffffffffffffffffffffffffff83163b15610f26576000548281035b6136066000868380600101945086613308565b61363c576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8181106135f3578160005414612e6157600080fd5b600080549082900361368f576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61369c6000848385612d6e565b73ffffffffffffffffffffffffffffffffffffffff831660008181526005602090815260408083208054680100000000000000018802019055848352600490915281206001851460e11b4260a01b178317905582840190839083907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a4600183015b81811461375857808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4600101613720565b5081600003613793576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005550505050565b828054828255906000526020600020908101928215613814579160200282015b828111156138145781547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8435161782556020909201916001909101906137bc565b50613820929150613824565b5090565b5b808211156138205760008155600101613825565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610f3657600080fd5b60006020828403121561387957600080fd5b813561291381613839565b60005b8381101561389f578181015183820152602001613887565b50506000910152565b600081518084526138c0816020860160208601613884565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061291360208301846138a8565b60006020828403121561391757600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610f3657600080fd5b6000806040838503121561395357600080fd5b823561395e8161391e565b946020939093013593505050565b60008082840360e081121561398057600080fd5b833561398b8161391e565b925060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156139bd57600080fd5b506020830190509250929050565b6000806000606084860312156139e057600080fd5b83356139eb8161391e565b925060208401356139fb8161391e565b929592945050506040919091013590565b60008060408385031215613a1f57600080fd5b50508035926020909101359150565b60008060408385031215613a4157600080fd5b8235613a4c8161391e565b9150602083013567ffffffffffffffff811115613a6857600080fd5b830160608186031215613a7a57600080fd5b809150509250929050565b600060408284031215613a9757600080fd5b50919050565b80358015158114613aad57600080fd5b919050565b600080600060608486031215613ac757600080fd5b8335613ad28161391e565b92506020840135613ae28161391e565b9150613af060408501613a9d565b90509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715613b4b57613b4b613af9565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715613b9857613b98613af9565b604052919050565b803569ffffffffffffffffffff81168114613aad57600080fd5b803562ffffff81168114613aad57600080fd5b803564ffffffffff81168114613aad57600080fd5b803561ffff81168114613aad57600080fd5b6000806000838503610120811215613c0b57600080fd5b8435613c168161391e565b93506020850135613c268161391e565b925060e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc082011215613c5857600080fd5b50613c61613b28565b613c6d60408601613ba0565b8152613c7b60608601613bba565b6020820152613c8c60808601613bcd565b6040820152613c9d60a08601613bcd565b6060820152613cae60c08601613bcd565b6080820152613cbf60e08601613be2565b60a0820152613cd16101008601613be2565b60c0820152809150509250925092565b60008083601f840112613cf357600080fd5b50813567ffffffffffffffff811115613d0b57600080fd5b602083019150836020828501011115613d2357600080fd5b9250929050565b60008060208385031215613d3d57600080fd5b823567ffffffffffffffff811115613d5457600080fd5b613d6085828601613ce1565b90969095509350505050565b60008060208385031215613d7f57600080fd5b823567ffffffffffffffff80821115613d9757600080fd5b818501915085601f830112613dab57600080fd5b813581811115613dba57600080fd5b8660208260051b8501011115613dcf57600080fd5b60209290920196919550909350505050565b60008060408385031215613df457600080fd5b8235613dff8161391e565b91506020830135613a7a8161391e565b600060208284031215613e2157600080fd5b81356129138161391e565b600080600060408486031215613e4157600080fd5b8335613e4c8161391e565b9250602084013567ffffffffffffffff811115613e6857600080fd5b613e7486828701613ce1565b9497909650939450505050565b6000806000838503610140811215613e9857600080fd5b8435613ea38161391e565b93506020850135613eb38161391e565b92506101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc082011215613ee657600080fd5b506040840190509250925092565b600060208284031215613f0657600080fd5b813567ffffffffffffffff811115613f1d57600080fd5b8201610300818503121561291357600080fd5b60008060408385031215613f4357600080fd5b8235613f4e8161391e565b9150613f5c60208401613a9d565b90509250929050565b60008060008060808587031215613f7b57600080fd5b8435613f868161391e565b9350602085810135613f978161391e565b935060408601359250606086013567ffffffffffffffff80821115613fbb57600080fd5b818801915088601f830112613fcf57600080fd5b813581811115613fe157613fe1613af9565b614011847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601613b51565b9150808252898482850101111561402757600080fd5b808484018584013760008482840101525080935050505092959194509250565b600181811c9082168061405b57607f821691505b602082108103613a97577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b803565ffffffffffff81168114613aad57600080fd5b69ffffffffffffffffffff6140be82613ba0565b1682526140cd60208201614094565b65ffffffffffff8082166020850152806140e960408501614094565b16604085015250506140fd60608201613be2565b61ffff80821660608501528061411560808501613be2565b166080850152505061412960a08201613a9d565b151560a08301525050565b60c0810161080682846140aa565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202811582820484141761080657610806614142565b6000826141be577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261424157600080fd5b830160208101925035905067ffffffffffffffff81111561426157600080fd5b803603821315613d2357600080fd5b600060608301823584526020808401357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18536030181126142b057600080fd5b8401818101903567ffffffffffffffff8111156142cc57600080fd5b8060051b8036038313156142df57600080fd5b6060848901529381905260809387018401938290880160005b83811015614350577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808a8803018252614331838661420c565b61433c8982846141c3565b9850505091850191908501906001016142f8565b505050505050614363604084018461420c565b85830360408701526143768382846141c3565b9695505050505050565b6020815260006129136020830184614270565b6bffffffffffffffffffffffff81168114610f3657600080fd5b6000602082840312156143bf57600080fd5b813561291381614393565b81356143d58161391e565b73ffffffffffffffffffffffffffffffffffffffff811690507fffffffffffffffffffffffff00000000000000000000000000000000000000008181845416178355602084013561442581614393565b60a01b1617905550565b73ffffffffffffffffffffffffffffffffffffffff831681526101008101612913602083018469ffffffffffffffffffff815116825262ffffff6020820151166020830152604081015164ffffffffff8082166040850152806060840151166060850152806080840151166080850152505060a081015161ffff80821660a08501528060c08401511660c085015250505050565b601f821115610f2657600081815260208120601f850160051c810160208610156144ea5750805b601f850160051c820191505b81811015610b2e578281556001016144f6565b67ffffffffffffffff83111561452157614521613af9565b6145358361452f8354614047565b836144c3565b6000601f84116001811461458757600085156145515750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355612e61565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156145d657868501358255602094850194600190920191016145b6565b5086821015614611577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b8181038181111561080657610806614142565b8082018082111561080657610806614142565b60208152600061347a6020830184866141c3565b803563ffffffff81168114613aad57600080fd5b69ffffffffffffffffffff61468582613ba0565b16825261ffff61469760208301613be2565b1660208301526146a960408201614094565b65ffffffffffff8082166040850152806146c560608501614094565b1660608501525050608081013560ff811681146146e157600080fd5b60ff1660808301526146f560a0820161465d565b63ffffffff1660a083015261470c60c08201613be2565b61ffff1660c083015261472160e08201613a9d565b80151560e0840152505050565b73ffffffffffffffffffffffffffffffffffffffff8316815261012081016129136020830184614671565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261478e57600080fd5b83018035915067ffffffffffffffff8211156147a957600080fd5b602001915036819003821315613d2357600080fd5b6000602082840312156147d057600080fd5b61291382614094565b73ffffffffffffffffffffffffffffffffffffffff8316815260e0810161291360208301846140aa565b73ffffffffffffffffffffffffffffffffffffffff841681526040602082015260006148336040830184866141c3565b95945050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa183360301811261487057600080fd5b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061347a6040830184614270565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126148de57600080fd5b83018035915067ffffffffffffffff8211156148f957600080fd5b6020019150600581901b3603821315613d2357600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261497557600080fd5b83018035915067ffffffffffffffff82111561499057600080fd5b6020019150600881901b3603821315613d2357600080fd5b73ffffffffffffffffffffffffffffffffffffffff848116825283166020820152610140810161347a6040830184614671565b60006101408201905073ffffffffffffffffffffffffffffffffffffffff808616835280851660208401525069ffffffffffffffffffff835116604083015261ffff602084015116606083015265ffffffffffff60408401511660808301526060830151614a5360a084018265ffffffffffff169052565b50608083015160ff811660c08401525060a083015163ffffffff811660e08401525060c083015161ffff81166101008401525060e08301518015156101208401525b50949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112614ad357600080fd5b83018035915067ffffffffffffffff821115614aee57600080fd5b602001915060e081023603821315613d2357600080fd5b73ffffffffffffffffffffffffffffffffffffffff848116825283166020820152610120810169ffffffffffffffffffff614b3f84613ba0565b16604083015262ffffff614b5560208501613bba565b166060830152614b6760408401613bcd565b64ffffffffff808216608085015280614b8260608701613bcd565b1660a085015280614b9560808701613bcd565b1660c08501525050614ba960a08401613be2565b61ffff1660e0830152614bbe60c08401613be2565b61ffff8116610100840152614a95565b73ffffffffffffffffffffffffffffffffffffffff848116825283166020820152610120810161347a604083018469ffffffffffffffffffff815116825262ffffff6020820151166020830152604081015164ffffffffff8082166040850152806060840151166060850152806080840151166080850152505060a081015161ffff80821660a08501528060c08401511660c085015250505050565b60008351614c7c818460208801613884565b835190830190614c90818360208801613884565b01949350505050565b60208082528181018390526000908460408401835b86811015614ce9578235614cc18161391e565b73ffffffffffffffffffffffffffffffffffffffff1682529183019190830190600101614cae565b509695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261437660808301846138a8565b600060208284031215614d4557600080fd5b81516129138161383956fea164736f6c6343000811000a";

export const ERC721SeaDropabi= 
[
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "allowedSeaDrop",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "AlreadyInitialized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newMaxSupply",
          "type": "uint256"
        }
      ],
      "name": "CannotExceedMaxSupplyOfUint64",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "basisPoints",
          "type": "uint256"
        }
      ],
      "name": "InvalidRoyaltyBasisPoints",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintERC2309QuantityExceedsLimit",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxSupply",
          "type": "uint256"
        }
      ],
      "name": "MintQuantityExceedsMaxSupply",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintZeroQuantity",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "got",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalMinted",
          "type": "uint256"
        }
      ],
      "name": "NewMaxSupplyCannotBeLessThenTotalMinted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NewOwnerIsZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotNextOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyAllowedSeaDrop",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnershipNotInitializedForExtraData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ProvenanceHashCannotBeSetAfterMintStarted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RoyaltyAddressCannotBeZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SameTransferValidator",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SignersMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TokenGatedMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "URIQueryForNonexistentToken",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "allowedSeaDrop",
          "type": "address[]"
        }
      ],
      "name": "AllowedSeaDropUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_toTokenId",
          "type": "uint256"
        }
      ],
      "name": "BatchMetadataUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fromTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "toTokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "ConsecutiveTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "newContractURI",
          "type": "string"
        }
      ],
      "name": "ContractURIUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newMaxSupply",
          "type": "uint256"
        }
      ],
      "name": "MaxSupplyUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newPotentialAdministrator",
          "type": "address"
        }
      ],
      "name": "PotentialOwnerUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "previousHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "newHash",
          "type": "bytes32"
        }
      ],
      "name": "ProvenanceHashUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bps",
          "type": "uint256"
        }
      ],
      "name": "RoyaltyInfoUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "SeaDropTokenDeployed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldValidator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newValidator",
          "type": "address"
        }
      ],
      "name": "TransferValidatorUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cancelOwnershipTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fromTokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "toTokenId",
          "type": "uint256"
        }
      ],
      "name": "emitBatchMetadataUpdate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        }
      ],
      "name": "getMintStats",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "minterNumMinted",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentTotalSupply",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxSupply",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransferValidationFunction",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "functionSignature",
          "type": "bytes4"
        },
        {
          "internalType": "bool",
          "name": "isViewFunction",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTransferValidator",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "quantity",
          "type": "uint256"
        }
      ],
      "name": "mintSeaDrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "maxSupply",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "baseURI",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contractURI",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "seaDropImpl",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "uint80",
                  "name": "mintPrice",
                  "type": "uint80"
                },
                {
                  "internalType": "uint48",
                  "name": "startTime",
                  "type": "uint48"
                },
                {
                  "internalType": "uint48",
                  "name": "endTime",
                  "type": "uint48"
                },
                {
                  "internalType": "uint16",
                  "name": "maxTotalMintableByWallet",
                  "type": "uint16"
                },
                {
                  "internalType": "uint16",
                  "name": "feeBps",
                  "type": "uint16"
                },
                {
                  "internalType": "bool",
                  "name": "restrictFeeRecipients",
                  "type": "bool"
                }
              ],
              "internalType": "struct PublicDrop",
              "name": "publicDrop",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "dropURI",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "bytes32",
                  "name": "merkleRoot",
                  "type": "bytes32"
                },
                {
                  "internalType": "string[]",
                  "name": "publicKeyURIs",
                  "type": "string[]"
                },
                {
                  "internalType": "string",
                  "name": "allowListURI",
                  "type": "string"
                }
              ],
              "internalType": "struct AllowListData",
              "name": "allowListData",
              "type": "tuple"
            },
            {
              "internalType": "address",
              "name": "creatorPayoutAddress",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "provenanceHash",
              "type": "bytes32"
            },
            {
              "internalType": "address[]",
              "name": "allowedFeeRecipients",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "disallowedFeeRecipients",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "allowedPayers",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "disallowedPayers",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "tokenGatedAllowedNftTokens",
              "type": "address[]"
            },
            {
              "components": [
                {
                  "internalType": "uint80",
                  "name": "mintPrice",
                  "type": "uint80"
                },
                {
                  "internalType": "uint16",
                  "name": "maxTotalMintableByWallet",
                  "type": "uint16"
                },
                {
                  "internalType": "uint48",
                  "name": "startTime",
                  "type": "uint48"
                },
                {
                  "internalType": "uint48",
                  "name": "endTime",
                  "type": "uint48"
                },
                {
                  "internalType": "uint8",
                  "name": "dropStageIndex",
                  "type": "uint8"
                },
                {
                  "internalType": "uint32",
                  "name": "maxTokenSupplyForStage",
                  "type": "uint32"
                },
                {
                  "internalType": "uint16",
                  "name": "feeBps",
                  "type": "uint16"
                },
                {
                  "internalType": "bool",
                  "name": "restrictFeeRecipients",
                  "type": "bool"
                }
              ],
              "internalType": "struct TokenGatedDropStage[]",
              "name": "tokenGatedDropStages",
              "type": "tuple[]"
            },
            {
              "internalType": "address[]",
              "name": "disallowedTokenGatedAllowedNftTokens",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "signers",
              "type": "address[]"
            },
            {
              "components": [
                {
                  "internalType": "uint80",
                  "name": "minMintPrice",
                  "type": "uint80"
                },
                {
                  "internalType": "uint24",
                  "name": "maxMaxTotalMintableByWallet",
                  "type": "uint24"
                },
                {
                  "internalType": "uint40",
                  "name": "minStartTime",
                  "type": "uint40"
                },
                {
                  "internalType": "uint40",
                  "name": "maxEndTime",
                  "type": "uint40"
                },
                {
                  "internalType": "uint40",
                  "name": "maxMaxTokenSupplyForStage",
                  "type": "uint40"
                },
                {
                  "internalType": "uint16",
                  "name": "minFeeBps",
                  "type": "uint16"
                },
                {
                  "internalType": "uint16",
                  "name": "maxFeeBps",
                  "type": "uint16"
                }
              ],
              "internalType": "struct SignedMintValidationParams[]",
              "name": "signedMintValidationParams",
              "type": "tuple[]"
            },
            {
              "internalType": "address[]",
              "name": "disallowedSigners",
              "type": "address[]"
            }
          ],
          "internalType": "struct ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStruct",
          "name": "config",
          "type": "tuple"
        }
      ],
      "name": "multiConfigure",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "provenanceHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "royaltyAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "royaltyBasisPoints",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_salePrice",
          "type": "uint256"
        }
      ],
      "name": "royaltyInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "royaltyAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newBaseURI",
          "type": "string"
        }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newContractURI",
          "type": "string"
        }
      ],
      "name": "setContractURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newMaxSupply",
          "type": "uint256"
        }
      ],
      "name": "setMaxSupply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "newProvenanceHash",
          "type": "bytes32"
        }
      ],
      "name": "setProvenanceHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "royaltyAddress",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "royaltyBps",
              "type": "uint96"
            }
          ],
          "internalType": "struct ISeaDropTokenContractMetadata.RoyaltyInfo",
          "name": "newInfo",
          "type": "tuple"
        }
      ],
      "name": "setRoyaltyInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newValidator",
          "type": "address"
        }
      ],
      "name": "setTransferValidator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newPotentialOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seaDropImpl",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "merkleRoot",
              "type": "bytes32"
            },
            {
              "internalType": "string[]",
              "name": "publicKeyURIs",
              "type": "string[]"
            },
            {
              "internalType": "string",
              "name": "allowListURI",
              "type": "string"
            }
          ],
          "internalType": "struct AllowListData",
          "name": "allowListData",
          "type": "tuple"
        }
      ],
      "name": "updateAllowList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seaDropImpl",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "allowed",
          "type": "bool"
        }
      ],
      "name": "updateAllowedFeeRecipient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "allowedSeaDrop",
          "type": "address[]"
        }
      ],
      "name": "updateAllowedSeaDrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seaDropImpl",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payoutAddress",
          "type": "address"
        }
      ],
      "name": "updateCreatorPayoutAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seaDropImpl",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "dropURI",
          "type": "string"
        }
      ],
      "name": "updateDropURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seaDropImpl",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "allowed",
          "type": "bool"
        }
      ],
      "name": "updatePayer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seaDropImpl",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "mintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint48",
              "name": "startTime",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "endTime",
              "type": "uint48"
            },
            {
              "internalType": "uint16",
              "name": "maxTotalMintableByWallet",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "feeBps",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "internalType": "struct PublicDrop",
          "name": "publicDrop",
          "type": "tuple"
        }
      ],
      "name": "updatePublicDrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seaDropImpl",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "signer",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "minMintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint24",
              "name": "maxMaxTotalMintableByWallet",
              "type": "uint24"
            },
            {
              "internalType": "uint40",
              "name": "minStartTime",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "maxEndTime",
              "type": "uint40"
            },
            {
              "internalType": "uint40",
              "name": "maxMaxTokenSupplyForStage",
              "type": "uint40"
            },
            {
              "internalType": "uint16",
              "name": "minFeeBps",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "maxFeeBps",
              "type": "uint16"
            }
          ],
          "internalType": "struct SignedMintValidationParams",
          "name": "signedMintValidationParams",
          "type": "tuple"
        }
      ],
      "name": "updateSignedMintValidationParams",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "seaDropImpl",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "allowedNftToken",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint80",
              "name": "mintPrice",
              "type": "uint80"
            },
            {
              "internalType": "uint16",
              "name": "maxTotalMintableByWallet",
              "type": "uint16"
            },
            {
              "internalType": "uint48",
              "name": "startTime",
              "type": "uint48"
            },
            {
              "internalType": "uint48",
              "name": "endTime",
              "type": "uint48"
            },
            {
              "internalType": "uint8",
              "name": "dropStageIndex",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "maxTokenSupplyForStage",
              "type": "uint32"
            },
            {
              "internalType": "uint16",
              "name": "feeBps",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "restrictFeeRecipients",
              "type": "bool"
            }
          ],
          "internalType": "struct TokenGatedDropStage",
          "name": "dropStage",
          "type": "tuple"
        }
      ],
      "name": "updateTokenGatedDrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];




export const marketplaceAddress = "0xC193567915302E5d6F7d5E621B576af281713703";

export const marketplaceABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_admin",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "_adminRoyalty",
                "type": "uint8"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            }
        ],
        "name": "Bought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "lister",
                "type": "address"
            }
        ],
        "name": "Listed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            }
        ],
        "name": "OfferAccepted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            }
        ],
        "name": "OfferRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            }
        ],
        "name": "Offered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "PriceChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Unlisted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "proposer",
                "type": "address"
            }
        ],
        "name": "acceptOffer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "adminRoyalty",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "changeAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "changePrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "creatorOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "list",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "offer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "offers",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "priceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "removeOffer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "royaltyOf",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "royalty",
                "type": "uint8"
            }
        ],
        "name": "setAdminRoyalty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            }
        ],
        "name": "setCreator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "royalty",
                "type": "uint8"
            }
        ],
        "name": "setRoyalty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "royalty",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            }
        ],
        "name": "setRoyaltyFromSig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "sold",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collection",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "unlist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const erc721ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "NFTMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            }
        ],
        "name": "mintNFT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const erc721Bytecode = "0x60806040523480156200001157600080fd5b5060405162002bf238038062002bf28339818101604052810190620000379190620002a1565b828281600090816200004a919062000586565b5080600190816200005c919062000586565b50505080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200066d565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200011282620000c7565b810181811067ffffffffffffffff82111715620001345762000133620000d8565b5b80604052505050565b600062000149620000a9565b905062000157828262000107565b919050565b600067ffffffffffffffff8211156200017a5762000179620000d8565b5b6200018582620000c7565b9050602081019050919050565b60005b83811015620001b257808201518184015260208101905062000195565b60008484015250505050565b6000620001d5620001cf846200015c565b6200013d565b905082815260208101848484011115620001f457620001f3620000c2565b5b6200020184828562000192565b509392505050565b600082601f830112620002215762000220620000bd565b5b815162000233848260208601620001be565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000269826200023c565b9050919050565b6200027b816200025c565b81146200028757600080fd5b50565b6000815190506200029b8162000270565b92915050565b600080600060608486031215620002bd57620002bc620000b3565b5b600084015167ffffffffffffffff811115620002de57620002dd620000b8565b5b620002ec8682870162000209565b935050602084015167ffffffffffffffff81111562000310576200030f620000b8565b5b6200031e8682870162000209565b925050604062000331868287016200028a565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038e57607f821691505b602082108103620003a457620003a362000346565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200040e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620003cf565b6200041a8683620003cf565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000467620004616200045b8462000432565b6200043c565b62000432565b9050919050565b6000819050919050565b620004838362000446565b6200049b62000492826200046e565b848454620003dc565b825550505050565b600090565b620004b2620004a3565b620004bf81848462000478565b505050565b5b81811015620004e757620004db600082620004a8565b600181019050620004c5565b5050565b601f82111562000536576200050081620003aa565b6200050b84620003bf565b810160208510156200051b578190505b620005336200052a85620003bf565b830182620004c4565b50505b505050565b600082821c905092915050565b60006200055b600019846008026200053b565b1980831691505092915050565b600062000576838362000548565b9150826002028217905092915050565b62000591826200033b565b67ffffffffffffffff811115620005ad57620005ac620000d8565b5b620005b9825462000375565b620005c6828285620004eb565b600060209050601f831160018114620005fe5760008415620005e9578287015190505b620005f5858262000568565b86555062000665565b601f1984166200060e86620003aa565b60005b82811015620006385784890151825560018201915060208501945060208101905062000611565b8683101562000658578489015162000654601f89168262000548565b8355505b6001600288020188555050505b505050505050565b612575806200067d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063b88d4fde11610066578063b88d4fde1461025b578063c87b56dd14610277578063e985e9c5146102a7578063eacabe14146102d7576100ea565b806370a08231146101f157806395d89b4114610221578063a22cb4651461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b6101096004803603810190610104919061193b565b610307565b6040516101169190611983565b60405180910390f35b610127610368565b6040516101349190611a2e565b60405180910390f35b61015760048036038101906101529190611a86565b6103fa565b6040516101649190611af4565b60405180910390f35b61018760048036038101906101829190611b3b565b610416565b005b6101a3600480360381019061019e9190611b7b565b61042c565b005b6101bf60048036038101906101ba9190611b7b565b61052e565b005b6101db60048036038101906101d69190611a86565b61054e565b6040516101e89190611af4565b60405180910390f35b61020b60048036038101906102069190611bce565b610560565b6040516102189190611c0a565b60405180910390f35b61022961061a565b6040516102369190611a2e565b60405180910390f35b61025960048036038101906102549190611c51565b6106ac565b005b61027560048036038101906102709190611dc6565b6106c2565b005b610291600480360381019061028c9190611a86565b6106df565b60405161029e9190611a2e565b60405180910390f35b6102c160048036038101906102bc9190611e49565b6107f2565b6040516102ce9190611983565b60405180910390f35b6102f160048036038101906102ec9190611f2a565b610886565b6040516102fe9190611c0a565b60405180910390f35b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103615750610360826109e7565b5b9050919050565b60606000805461037790611fb5565b80601f01602080910402602001604051908101604052809291908181526020018280546103a390611fb5565b80156103f05780601f106103c5576101008083540402835291602001916103f0565b820191906000526020600020905b8154815290600101906020018083116103d357829003601f168201915b5050505050905090565b600061040582610ac9565b5061040f82610b51565b9050919050565b6104288282610423610b8e565b610b96565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361049e5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016104959190611af4565b60405180910390fd5b60006104b283836104ad610b8e565b610ba8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610528578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161051f93929190611fe6565b60405180910390fd5b50505050565b610549838383604051806020016040528060008152506106c2565b505050565b600061055982610ac9565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105d35760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016105ca9190611af4565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461062990611fb5565b80601f016020809104026020016040519081016040528092919081815260200182805461065590611fb5565b80156106a25780601f10610677576101008083540402835291602001916106a2565b820191906000526020600020905b81548152906001019060200180831161068557829003601f168201915b5050505050905090565b6106be6106b7610b8e565b8383610dc2565b5050565b6106cd84848461042c565b6106d984848484610f31565b50505050565b60606106ea82610ac9565b50600060066000848152602001908152602001600020805461070b90611fb5565b80601f016020809104026020016040519081016040528092919081815260200182805461073790611fb5565b80156107845780601f1061075957610100808354040283529160200191610784565b820191906000526020600020905b81548152906001019060200180831161076757829003601f168201915b5050505050905060006107956110e8565b905060008151036107aa5781925050506107ed565b6000825111156107df5780826040516020016107c7929190612059565b604051602081830303815290604052925050506107ed565b6107e8846110ff565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60003373ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806109325750600073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b610971576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610968906120ef565b60405180910390fd5b600760008154809291906109849061213e565b919050555061099583600754611168565b6109a160075483611261565b7f4cc0a9c4a99ddc700de1af2c9f916a7cbfdb71f14801ccff94061ad1ef8a8040836007546040516109d4929190612186565b60405180910390a1600754905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610ab257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ac25750610ac1826112bd565b5b9050919050565b600080610ad583611327565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b4857826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610b3f9190611c0a565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610ba38383836001611364565b505050565b600080610bb484611327565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610bf657610bf5818486611529565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c8757610c38600085600080611364565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610d0a576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e3357816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610e2a9190611af4565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f249190611983565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156110e2578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610f75610b8e565b8685856040518563ffffffff1660e01b8152600401610f979493929190612204565b6020604051808303816000875af1925050508015610fd357506040513d601f19601f82011682018060405250810190610fd09190612265565b60015b611057573d8060008114611003576040519150601f19603f3d011682016040523d82523d6000602084013e611008565b606091505b50600081510361104f57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016110469190611af4565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146110e057836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016110d79190611af4565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b606061110a82610ac9565b5060006111156110e8565b905060008151116111355760405180602001604052806000815250611160565b8061113f846115ed565b604051602001611150929190612059565b6040516020818303038152906040525b915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111da5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016111d19190611af4565b60405180910390fd5b60006111e883836000610ba8565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461125c5760006040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016112539190611af4565b60405180910390fd5b505050565b80600660008481526020019081526020016000209081611281919061243e565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516112b19190611c0a565b60405180910390a15050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061139d5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156114d15760006113ad84610ac9565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561141857508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561142b575061142981846107f2565b155b1561146d57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016114649190611af4565b60405180910390fd5b81156114cf57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6115348383836116bb565b6115e857600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036115a957806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016115a09190611c0a565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016115df929190612186565b60405180910390fd5b505050565b6060600060016115fc8461177c565b01905060008167ffffffffffffffff81111561161b5761161a611c9b565b5b6040519080825280601f01601f19166020018201604052801561164d5781602001600182028036833780820191505090505b509050600082602001820190505b6001156116b0578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816116a4576116a3612510565b5b0494506000850361165b575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561177357508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611734575061173384846107f2565b5b8061177257508273ffffffffffffffffffffffffffffffffffffffff1661175a83610b51565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106117da577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816117d0576117cf612510565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611817576d04ee2d6d415b85acef8100000000838161180d5761180c612510565b5b0492506020810190505b662386f26fc10000831061184657662386f26fc10000838161183c5761183b612510565b5b0492506010810190505b6305f5e100831061186f576305f5e100838161186557611864612510565b5b0492506008810190505b612710831061189457612710838161188a57611889612510565b5b0492506004810190505b606483106118b757606483816118ad576118ac612510565b5b0492506002810190505b600a83106118c6576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611918816118e3565b811461192357600080fd5b50565b6000813590506119358161190f565b92915050565b600060208284031215611951576119506118d9565b5b600061195f84828501611926565b91505092915050565b60008115159050919050565b61197d81611968565b82525050565b60006020820190506119986000830184611974565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119d85780820151818401526020810190506119bd565b60008484015250505050565b6000601f19601f8301169050919050565b6000611a008261199e565b611a0a81856119a9565b9350611a1a8185602086016119ba565b611a23816119e4565b840191505092915050565b60006020820190508181036000830152611a4881846119f5565b905092915050565b6000819050919050565b611a6381611a50565b8114611a6e57600080fd5b50565b600081359050611a8081611a5a565b92915050565b600060208284031215611a9c57611a9b6118d9565b5b6000611aaa84828501611a71565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ade82611ab3565b9050919050565b611aee81611ad3565b82525050565b6000602082019050611b096000830184611ae5565b92915050565b611b1881611ad3565b8114611b2357600080fd5b50565b600081359050611b3581611b0f565b92915050565b60008060408385031215611b5257611b516118d9565b5b6000611b6085828601611b26565b9250506020611b7185828601611a71565b9150509250929050565b600080600060608486031215611b9457611b936118d9565b5b6000611ba286828701611b26565b9350506020611bb386828701611b26565b9250506040611bc486828701611a71565b9150509250925092565b600060208284031215611be457611be36118d9565b5b6000611bf284828501611b26565b91505092915050565b611c0481611a50565b82525050565b6000602082019050611c1f6000830184611bfb565b92915050565b611c2e81611968565b8114611c3957600080fd5b50565b600081359050611c4b81611c25565b92915050565b60008060408385031215611c6857611c676118d9565b5b6000611c7685828601611b26565b9250506020611c8785828601611c3c565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611cd3826119e4565b810181811067ffffffffffffffff82111715611cf257611cf1611c9b565b5b80604052505050565b6000611d056118cf565b9050611d118282611cca565b919050565b600067ffffffffffffffff821115611d3157611d30611c9b565b5b611d3a826119e4565b9050602081019050919050565b82818337600083830152505050565b6000611d69611d6484611d16565b611cfb565b905082815260208101848484011115611d8557611d84611c96565b5b611d90848285611d47565b509392505050565b600082601f830112611dad57611dac611c91565b5b8135611dbd848260208601611d56565b91505092915050565b60008060008060808587031215611de057611ddf6118d9565b5b6000611dee87828801611b26565b9450506020611dff87828801611b26565b9350506040611e1087828801611a71565b925050606085013567ffffffffffffffff811115611e3157611e306118de565b5b611e3d87828801611d98565b91505092959194509250565b60008060408385031215611e6057611e5f6118d9565b5b6000611e6e85828601611b26565b9250506020611e7f85828601611b26565b9150509250929050565b600067ffffffffffffffff821115611ea457611ea3611c9b565b5b611ead826119e4565b9050602081019050919050565b6000611ecd611ec884611e89565b611cfb565b905082815260208101848484011115611ee957611ee8611c96565b5b611ef4848285611d47565b509392505050565b600082601f830112611f1157611f10611c91565b5b8135611f21848260208601611eba565b91505092915050565b60008060408385031215611f4157611f406118d9565b5b6000611f4f85828601611b26565b925050602083013567ffffffffffffffff811115611f7057611f6f6118de565b5b611f7c85828601611efc565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611fcd57607f821691505b602082108103611fe057611fdf611f86565b5b50919050565b6000606082019050611ffb6000830186611ae5565b6120086020830185611bfb565b6120156040830184611ae5565b949350505050565b600081905092915050565b60006120338261199e565b61203d818561201d565b935061204d8185602086016119ba565b80840191505092915050565b60006120658285612028565b91506120718284612028565b91508190509392505050565b7f4f6e6c79206f776e6572206f662074686520636f6c6c656374696f6e2063616e60008201527f206d696e74204e46547300000000000000000000000000000000000000000000602082015250565b60006120d9602a836119a9565b91506120e48261207d565b604082019050919050565b60006020820190508181036000830152612108816120cc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061214982611a50565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361217b5761217a61210f565b5b600182019050919050565b600060408201905061219b6000830185611ae5565b6121a86020830184611bfb565b9392505050565b600081519050919050565b600082825260208201905092915050565b60006121d6826121af565b6121e081856121ba565b93506121f08185602086016119ba565b6121f9816119e4565b840191505092915050565b60006080820190506122196000830187611ae5565b6122266020830186611ae5565b6122336040830185611bfb565b818103606083015261224581846121cb565b905095945050505050565b60008151905061225f8161190f565b92915050565b60006020828403121561227b5761227a6118d9565b5b600061228984828501612250565b91505092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026122f47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826122b7565b6122fe86836122b7565b95508019841693508086168417925050509392505050565b6000819050919050565b600061233b61233661233184611a50565b612316565b611a50565b9050919050565b6000819050919050565b61235583612320565b61236961236182612342565b8484546122c4565b825550505050565b600090565b61237e612371565b61238981848461234c565b505050565b5b818110156123ad576123a2600082612376565b60018101905061238f565b5050565b601f8211156123f2576123c381612292565b6123cc846122a7565b810160208510156123db578190505b6123ef6123e7856122a7565b83018261238e565b50505b505050565b600082821c905092915050565b6000612415600019846008026123f7565b1980831691505092915050565b600061242e8383612404565b9150826002028217905092915050565b6124478261199e565b67ffffffffffffffff8111156124605761245f611c9b565b5b61246a8254611fb5565b6124758282856123b1565b600060209050601f8311600181146124a85760008415612496578287015190505b6124a08582612422565b865550612508565b601f1984166124b686612292565b60005b828110156124de578489015182556001820191506020850194506020810190506124b9565b868310156124fb57848901516124f7601f891682612404565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220f9872717a0bcda78d1a7c1ea2d6199870cc5f5940ddd32a146c6bab86e086d5964736f6c63430008140033";

export const erc721Merkle = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "bytes32",
                "name": "root",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "royaltyReceiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "feeReceiver",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "royalty",
                "type": "uint8"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "NFTMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "_feeReceiver",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_root",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_royaltyReceiver",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_tokenIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "root",
                "type": "bytes32"
            }
        ],
        "name": "changeRoot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            }
        ],
        "name": "changeTokenURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isWhitelist",
                "type": "bool"
            },
            {
                "internalType": "bytes32[]",
                "name": "leaves",
                "type": "bytes32[]"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const erc721Simple = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_tokenURI",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "NFTMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "defaultTokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "mintNFT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


export const contractAddress = "0xaF24cAd4ef87494774494E6fc265e7432236F7eC"; 

// PrizePool contract ABI for frontend (ethers v5)
export const contractAbi = [
    // Constructor
    {
      inputs: [
        {
          internalType: "address",
          name: "initArena",
          type: "address"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    
    // Events
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "battleId",
          type: "bytes32"
        },
        {
          indexed: false,
          internalType: "address",
          name: "claimant",
          type: "address"
        }
      ],
      name: "Claim",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "creator",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "lockValue",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "battleId",
          type: "bytes32"
        }
      ],
      name: "Create",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "battleId",
          type: "bytes32"
        }
      ],
      name: "Delete",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "joiner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "addValue",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "battleId",
          type: "bytes32"
        }
      ],
      name: "Join",
      type: "event"
    },
    
    // Functions
    {
      inputs: [],
      name: "arena",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "battleId",
          type: "bytes32"
        },
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32"
        },
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32"
        },
        {
          internalType: "uint8",
          name: "v",
          type: "uint8"
        }
      ],
      name: "claim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "battleId",
          type: "bytes32"
        }
      ],
      name: "create",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "battleId",
          type: "bytes32"
        }
      ],
      name: "delist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "battleId",
          type: "bytes32"
        }
      ],
      name: "join",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [],
      name: "nonce",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      name: "pools",
      outputs: [
        {
          internalType: "address",
          name: "daddress",
          type: "address"
        },
        {
          internalType: "address",
          name: "caddress",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "dmoney",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "cmoney",
          type: "uint256"
        },
        {
          internalType: "bool",
          name: "active",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
];
  