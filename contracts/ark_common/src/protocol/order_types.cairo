//! Order generic variables.
use starknet::ContractAddress;
use poseidon::poseidon_hash_span;
use ark_common::protocol::order_v1::OrderV1;

/// Order types.
#[derive(Serde, Drop, PartialEq, Copy, Debug, starknet::Store)]
enum OrderType {
    #[default]
    Listing,
    Auction,
    Offer,
    CollectionOffer,
}

impl OrderTypeIntoFelt252 of Into<OrderType, felt252> {
    fn into(self: OrderType) -> felt252 {
        match self {
            OrderType::Listing => 'LISTING',
            OrderType::Auction => 'AUCTION',
            OrderType::Offer => 'OFFER',
            OrderType::CollectionOffer => 'COLLECTION_OFFER',
        }
    }
}

impl Felt252TryIntoOrderType of TryInto<felt252, OrderType> {
    fn try_into(self: felt252) -> Option<OrderType> {
        if self == 'LISTING' {
            Option::Some(OrderType::Listing)
        } else if self == 'AUCTION' {
            Option::Some(OrderType::Auction)
        } else if self == 'OFFER' {
            Option::Some(OrderType::Offer)
        } else if self == 'COLLECTION_OFFER' {
            Option::Some(OrderType::CollectionOffer)
        } else {
            Option::None
        }
    }
}

/// Order validation status.
/// This enum is returned by the `validate_data` in order
/// to have details on what's wrong with the order.
#[derive(Serde, Drop, PartialEq)]
enum OrderValidationError {
    EndDateInThePast,
    EndDateTooFar,
    AdditionalDataTooLong,
    InvalidContent,
    InvalidSalt,
}

impl OrderValidationErrorIntoFelt252 of Into<OrderValidationError, felt252> {
    fn into(self: OrderValidationError) -> felt252 {
        match self {
            OrderValidationError::EndDateInThePast => 'END_DATE_IN_THE_PAST',
            OrderValidationError::EndDateTooFar => 'END_DATE_TOO_FAR',
            OrderValidationError::AdditionalDataTooLong => 'ADDITIONAL_DATA_TOO_LONG',
            OrderValidationError::InvalidContent => 'INVALID_CONTENT',
            OrderValidationError::InvalidSalt => 'INVALID_SALT',
        }
    }
}

impl Felt252TryIntoOrderValidationError of TryInto<felt252, OrderValidationError> {
    fn try_into(self: felt252) -> Option<OrderValidationError> {
        if self == 'END_DATE_IN_THE_PAST' {
            Option::Some(OrderValidationError::EndDateInThePast)
        } else if self == 'END_DATE_TOO_FAR' {
            Option::Some(OrderValidationError::EndDateTooFar)
        } else if self == 'ADDITIONAL_DATA_TOO_LONG' {
            Option::Some(OrderValidationError::AdditionalDataTooLong)
        } else if self == 'INVALID_CONTENT' {
            Option::Some(OrderValidationError::InvalidContent)
        } else if self == 'INVALID_SALT' {
            Option::Some(OrderValidationError::InvalidSalt)
        } else {
            Option::None
        }
    }
}

/// A trait to describe order capability.
trait OrderTrait<T, +Serde<T>, +Drop<T>> {
    /// get order version.
    fn get_version(self: @T) -> felt252;
    /// Returns ok if the order common data are valid, `OrderValidationError` otherwise.
    fn validate_common_data(self: @T, block_timestamp: u64) -> Result<(), OrderValidationError>;

    /// Validates and returns the order type on success, `OrderValidationError` otherwise.
    fn validate_order_type(self: @T) -> Result<OrderType, OrderValidationError>;

    /// Returns the hash of the order's data.
    /// Every field of the order that must be signed
    /// must be considered in the computation of this hash.
    fn compute_order_hash(self: @T) -> felt252;
    fn compute_token_hash(self: @T) -> felt252;
}

// Cancel status
enum CancelStatus {
    CancelledUser,
    CancelledByNewOrder,
    CancelledAssetFault,
    CancelledOwnership
}

impl CancelStatusIntoFelt252 of Into<CancelStatus, felt252> {
    fn into(self: CancelStatus) -> felt252 {
        match self {
            CancelStatus::CancelledUser => 'CANCELLED_USER',
            CancelStatus::CancelledByNewOrder => 'CANCELLED_NEW_ORDER',
            CancelStatus::CancelledAssetFault => 'CANCELLED_ASSET_FAULT',
            CancelStatus::CancelledOwnership => 'CANCELLED_OWNERSHIP'
        }
    }
}

impl CancelStatusTryIntoOrderStatus of TryInto<felt252, CancelStatus> {
    fn try_into(self: felt252) -> Option<CancelStatus> {
        if self == 1 {
            Option::Some(CancelStatus::CancelledUser)
        } else if self == 2 {
            Option::Some(CancelStatus::CancelledByNewOrder)
        } else if self == 3 {
            Option::Some(CancelStatus::CancelledAssetFault)
        } else if self == 4 {
            Option::Some(CancelStatus::CancelledOwnership)
        } else {
            Option::None
        }
    }
}

/// Status of an order, that may be defined from
/// incoming transactions or messages from Starknet.
#[derive(Serde, Drop, PartialEq, Debug)]
enum OrderStatus {
    Open,
    Fulfilled,
    Executed,
    CancelledUser,
    CancelledByNewOrder,
    CancelledAssetFault,
    CancelledOwnership
}

impl OrderStatusIntoFelt252 of Into<OrderStatus, felt252> {
    fn into(self: OrderStatus) -> felt252 {
        match self {
            OrderStatus::Open => 'OPEN',
            OrderStatus::Fulfilled => 'FULFILLED',
            OrderStatus::Executed => 'EXECUTED',
            OrderStatus::CancelledUser => 'CANCELLED_USER',
            OrderStatus::CancelledByNewOrder => 'CANCELLED_NEW_ORDER',
            OrderStatus::CancelledAssetFault => 'CANCELLED_ASSET_FAULT',
            OrderStatus::CancelledOwnership => 'CANCELLED_OWNERSHIP',
        }
    }
}

impl Felt252TryIntoOrderStatus of TryInto<felt252, OrderStatus> {
    fn try_into(self: felt252) -> Option<OrderStatus> {
        if self == 'OPEN' {
            Option::Some(OrderStatus::Open)
        } else if self == 'EXECUTED' {
            Option::Some(OrderStatus::Executed)
        } else if self == 'FULFILLED' {
            Option::Some(OrderStatus::Fulfilled)
        } else if self == 'CANCELLED_USER' {
            Option::Some(OrderStatus::CancelledUser)
        } else if self == 'CANCELLED_NEW_ORDER' {
            Option::Some(OrderStatus::CancelledByNewOrder)
        } else if self == 'CANCELLED_ASSET_FAULT' {
            Option::Some(OrderStatus::CancelledAssetFault)
        } else if self == 'CANCELLED_OWNERSHIP' {
            Option::Some(OrderStatus::CancelledOwnership)
        } else {
            Option::None
        }
    }
}

#[derive(starknet::Store, Serde, Copy, Drop)]
struct CancelInfo {
    order_hash: felt252,
    canceller: ContractAddress,
    token_chain_id: felt252,
    token_address: ContractAddress,
    token_id: Option<u256>,
}

/// The info related to the fulfill of an order.
#[derive(starknet::Store, Serde, Copy, Drop)]
struct FulfillInfo {
    // The hash of the order to fulfill.
    order_hash: felt252,
    // Related order hash in case of an auction for example.
    related_order_hash: Option<felt252>,
    // Address of the fulfiller of the order.
    fulfiller: ContractAddress,
    // The token chain id.
    token_chain_id: felt252,
    // The token contract address.
    token_address: ContractAddress,
    // Token token id.
    token_id: Option<u256>,
    // Broker address.
    fulfill_broker_address: ContractAddress,
}

/// The info sent from the Arkchain to Starknet
/// to execute an order.
#[derive(Drop, Serde, Copy)]
struct ExecutionInfo {
    order_hash: felt252,
    nft_address: ContractAddress,
    nft_from: ContractAddress,
    nft_to: ContractAddress,
    nft_token_id: u256,
    payment_from: ContractAddress,
    payment_to: ContractAddress,
    payment_amount: u256,
    payment_currency_address: ContractAddress,
    payment_currency_chain_id: felt252,
    listing_broker_address: ContractAddress,
    fulfill_broker_address: ContractAddress
}

#[derive(Serde, Copy, Drop)]
struct CreateOrderInfo {
    order: OrderV1
}

#[derive(Serde, Copy, Drop)]
struct CancelOrderInfo {
    cancelInfo: CancelInfo
}

#[derive(Serde, Copy, Drop)]
struct FulfillOrderInfo {
    fulfillInfo: FulfillInfo
}

/// The info sent from Starknet to the Arkchain to
/// validate the execution of an order.
#[derive(starknet::Store, Serde, Copy, Drop)]
struct ExecutionValidationInfo {
    order_hash: felt252,
    transaction_hash: felt252,
    starknet_block_timestamp: u64,
    from: ContractAddress,
    to: ContractAddress,
}

/// Type of an route, that may be defined from
/// incoming order.
#[derive(starknet::Store, Serde, Drop, PartialEq, Copy, Debug)]
enum RouteType {
    #[default]
    Erc20ToErc721,
    Erc721ToErc20,
}

impl RouteIntoFelt252 of Into<RouteType, felt252> {
    fn into(self: RouteType) -> felt252 {
        match self {
            RouteType::Erc20ToErc721 => 'ERC20TOERC721',
            RouteType::Erc721ToErc20 => 'ERC721TOERC20',
        }
    }
}

impl Felt252TryIntoRoute of TryInto<felt252, RouteType> {
    fn try_into(self: felt252) -> Option<RouteType> {
        if self == 'ERC20TOERC721' {
            Option::Some(RouteType::Erc20ToErc721)
        } else if self == 'ERC721TOERC20' {
            Option::Some(RouteType::Erc721ToErc20)
        } else {
            Option::None
        }
    }
}
