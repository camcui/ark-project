/**
 * This file is autogenerated by
 * You should not edit it manually or your changes might be overwritten.
 */

export default [
  {
    type: "impl",
    name: "ImplFreeMint",
    interface_name: "ark_tokens::erc721_royalty::IFreeMint"
  },
  {
    type: "interface",
    name: "ark_tokens::erc721_royalty::IFreeMint",
    items: [
      {
        type: "function",
        name: "mint",
        inputs: [
          {
            name: "recipient",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "token_uri", type: "core::felt252" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "get_current_token_id",
        inputs: [],
        outputs: [{ type: "core::felt252" }],
        state_mutability: "view"
      }
    ]
  },
  {
    type: "impl",
    name: "ERC721MixinImpl",
    interface_name: "openzeppelin::token::erc721::interface::ERC721ABI"
  },
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      { name: "low", type: "core::integer::u128" },
      { name: "high", type: "core::integer::u128" }
    ]
  },
  {
    type: "struct",
    name: "core::array::Span::<core::felt252>",
    members: [
      { name: "snapshot", type: "@core::array::Array::<core::felt252>" }
    ]
  },
  {
    type: "enum",
    name: "core::bool",
    variants: [
      { name: "False", type: "()" },
      { name: "True", type: "()" }
    ]
  },
  {
    type: "struct",
    name: "core::byte_array::ByteArray",
    members: [
      { name: "data", type: "core::array::Array::<core::bytes_31::bytes31>" },
      { name: "pending_word", type: "core::felt252" },
      { name: "pending_word_len", type: "core::integer::u32" }
    ]
  },
  {
    type: "interface",
    name: "openzeppelin::token::erc721::interface::ERC721ABI",
    items: [
      {
        type: "function",
        name: "balance_of",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [{ type: "core::integer::u256" }],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "owner_of",
        inputs: [{ name: "token_id", type: "core::integer::u256" }],
        outputs: [
          { type: "core::starknet::contract_address::ContractAddress" }
        ],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "safe_transfer_from",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress"
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "token_id", type: "core::integer::u256" },
          { name: "data", type: "core::array::Span::<core::felt252>" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "transfer_from",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress"
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "token_id", type: "core::integer::u256" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "approve",
        inputs: [
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "token_id", type: "core::integer::u256" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "set_approval_for_all",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "approved", type: "core::bool" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "get_approved",
        inputs: [{ name: "token_id", type: "core::integer::u256" }],
        outputs: [
          { type: "core::starknet::contract_address::ContractAddress" }
        ],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "is_approved_for_all",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress"
          },
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [{ type: "core::bool" }],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "supports_interface",
        inputs: [{ name: "interface_id", type: "core::felt252" }],
        outputs: [{ type: "core::bool" }],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [{ type: "core::byte_array::ByteArray" }],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "symbol",
        inputs: [],
        outputs: [{ type: "core::byte_array::ByteArray" }],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "token_uri",
        inputs: [{ name: "token_id", type: "core::integer::u256" }],
        outputs: [{ type: "core::byte_array::ByteArray" }],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "balanceOf",
        inputs: [
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [{ type: "core::integer::u256" }],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "ownerOf",
        inputs: [{ name: "tokenId", type: "core::integer::u256" }],
        outputs: [
          { type: "core::starknet::contract_address::ContractAddress" }
        ],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "safeTransferFrom",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress"
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "tokenId", type: "core::integer::u256" },
          { name: "data", type: "core::array::Span::<core::felt252>" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "transferFrom",
        inputs: [
          {
            name: "from",
            type: "core::starknet::contract_address::ContractAddress"
          },
          {
            name: "to",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "tokenId", type: "core::integer::u256" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "setApprovalForAll",
        inputs: [
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "approved", type: "core::bool" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "getApproved",
        inputs: [{ name: "tokenId", type: "core::integer::u256" }],
        outputs: [
          { type: "core::starknet::contract_address::ContractAddress" }
        ],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "isApprovedForAll",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress"
          },
          {
            name: "operator",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [{ type: "core::bool" }],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "tokenURI",
        inputs: [{ name: "tokenId", type: "core::integer::u256" }],
        outputs: [{ type: "core::byte_array::ByteArray" }],
        state_mutability: "view"
      }
    ]
  },
  {
    type: "impl",
    name: "ERC2981",
    interface_name: "ark_oz::erc2981::interface::IERC2981"
  },
  {
    type: "interface",
    name: "ark_oz::erc2981::interface::IERC2981",
    items: [
      {
        type: "function",
        name: "royalty_info",
        inputs: [
          { name: "token_id", type: "core::integer::u256" },
          { name: "sale_price", type: "core::integer::u256" }
        ],
        outputs: [
          {
            type: "(core::starknet::contract_address::ContractAddress, core::integer::u256)"
          }
        ],
        state_mutability: "view"
      }
    ]
  },
  {
    type: "impl",
    name: "ERC2981Setup",
    interface_name: "ark_oz::erc2981::interface::IERC2981Setup"
  },
  {
    type: "struct",
    name: "ark_oz::erc2981::fees::FeesRatio",
    members: [
      { name: "numerator", type: "core::integer::u256" },
      { name: "denominator", type: "core::integer::u256" }
    ]
  },
  {
    type: "interface",
    name: "ark_oz::erc2981::interface::IERC2981Setup",
    items: [
      {
        type: "function",
        name: "default_royalty",
        inputs: [],
        outputs: [
          {
            type: "(core::starknet::contract_address::ContractAddress, ark_oz::erc2981::fees::FeesRatio)"
          }
        ],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "set_default_royalty",
        inputs: [
          {
            name: "receiver",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "fees_ratio", type: "ark_oz::erc2981::fees::FeesRatio" }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "token_royalty",
        inputs: [{ name: "token_id", type: "core::integer::u256" }],
        outputs: [
          {
            type: "(core::starknet::contract_address::ContractAddress, ark_oz::erc2981::fees::FeesRatio)"
          }
        ],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "set_token_royalty",
        inputs: [
          { name: "token_id", type: "core::integer::u256" },
          {
            name: "receiver",
            type: "core::starknet::contract_address::ContractAddress"
          },
          { name: "fees_ratio", type: "ark_oz::erc2981::fees::FeesRatio" }
        ],
        outputs: [],
        state_mutability: "external"
      }
    ]
  },
  {
    type: "impl",
    name: "OwnableMixin",
    interface_name: "openzeppelin::access::ownable::interface::OwnableABI"
  },
  {
    type: "interface",
    name: "openzeppelin::access::ownable::interface::OwnableABI",
    items: [
      {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
          { type: "core::starknet::contract_address::ContractAddress" }
        ],
        state_mutability: "view"
      },
      {
        type: "function",
        name: "transfer_ownership",
        inputs: [
          {
            name: "new_owner",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "renounce_ownership",
        inputs: [],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "transferOwnership",
        inputs: [
          {
            name: "newOwner",
            type: "core::starknet::contract_address::ContractAddress"
          }
        ],
        outputs: [],
        state_mutability: "external"
      },
      {
        type: "function",
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        state_mutability: "external"
      }
    ]
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      { name: "name", type: "core::byte_array::ByteArray" },
      { name: "symbol", type: "core::byte_array::ByteArray" },
      { name: "base_uri", type: "core::byte_array::ByteArray" },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    type: "event",
    name: "openzeppelin::token::erc721::erc721::ERC721Component::Transfer",
    kind: "struct",
    members: [
      {
        name: "from",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      },
      {
        name: "to",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      },
      { name: "token_id", type: "core::integer::u256", kind: "key" }
    ]
  },
  {
    type: "event",
    name: "openzeppelin::token::erc721::erc721::ERC721Component::Approval",
    kind: "struct",
    members: [
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      },
      {
        name: "approved",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      },
      { name: "token_id", type: "core::integer::u256", kind: "key" }
    ]
  },
  {
    type: "event",
    name: "openzeppelin::token::erc721::erc721::ERC721Component::ApprovalForAll",
    kind: "struct",
    members: [
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      },
      {
        name: "operator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      },
      { name: "approved", type: "core::bool", kind: "data" }
    ]
  },
  {
    type: "event",
    name: "openzeppelin::token::erc721::erc721::ERC721Component::Event",
    kind: "enum",
    variants: [
      {
        name: "Transfer",
        type: "openzeppelin::token::erc721::erc721::ERC721Component::Transfer",
        kind: "nested"
      },
      {
        name: "Approval",
        type: "openzeppelin::token::erc721::erc721::ERC721Component::Approval",
        kind: "nested"
      },
      {
        name: "ApprovalForAll",
        type: "openzeppelin::token::erc721::erc721::ERC721Component::ApprovalForAll",
        kind: "nested"
      }
    ]
  },
  {
    type: "event",
    name: "ark_oz::erc2981::erc2981::ERC2981Component::TokenRoyaltyUpdated",
    kind: "struct",
    members: [
      { name: "token_id", type: "core::integer::u256", kind: "key" },
      {
        name: "fees_ratio",
        type: "ark_oz::erc2981::fees::FeesRatio",
        kind: "data"
      },
      {
        name: "receiver",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data"
      }
    ]
  },
  {
    type: "event",
    name: "ark_oz::erc2981::erc2981::ERC2981Component::DefaultRoyaltyUpdated",
    kind: "struct",
    members: [
      {
        name: "fees_ratio",
        type: "ark_oz::erc2981::fees::FeesRatio",
        kind: "data"
      },
      {
        name: "receiver",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data"
      }
    ]
  },
  {
    type: "event",
    name: "ark_oz::erc2981::erc2981::ERC2981Component::Event",
    kind: "enum",
    variants: [
      {
        name: "TokenRoyaltyUpdated",
        type: "ark_oz::erc2981::erc2981::ERC2981Component::TokenRoyaltyUpdated",
        kind: "nested"
      },
      {
        name: "DefaultRoyaltyUpdated",
        type: "ark_oz::erc2981::erc2981::ERC2981Component::DefaultRoyaltyUpdated",
        kind: "nested"
      }
    ]
  },
  {
    type: "event",
    name: "openzeppelin::introspection::src5::SRC5Component::Event",
    kind: "enum",
    variants: []
  },
  {
    type: "event",
    name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      }
    ]
  },
  {
    type: "event",
    name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key"
      }
    ]
  },
  {
    type: "event",
    name: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "OwnershipTransferred",
        type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        kind: "nested"
      },
      {
        name: "OwnershipTransferStarted",
        type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        kind: "nested"
      }
    ]
  },
  {
    type: "event",
    name: "ark_tokens::erc721_royalty::FreeMintNFTRoyalty::Event",
    kind: "enum",
    variants: [
      {
        name: "ERC721Event",
        type: "openzeppelin::token::erc721::erc721::ERC721Component::Event",
        kind: "flat"
      },
      {
        name: "ERC2981Event",
        type: "ark_oz::erc2981::erc2981::ERC2981Component::Event",
        kind: "flat"
      },
      {
        name: "SRC5Event",
        type: "openzeppelin::introspection::src5::SRC5Component::Event",
        kind: "flat"
      },
      {
        name: "OwnableEvent",
        type: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
        kind: "flat"
      }
    ]
  }
] as const;