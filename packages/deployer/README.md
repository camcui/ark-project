# Using the Deployer

### Environment Settings

Navigate to the `root` directory and copy the .env.example for your needs,

**Warning** env.example use the default katana accounts, if they change you need to update your .env file

### Contracts.json file

the contract.json file is a reference of the deployed contracts, when working locally you may need to clear it to redeploy the contracts

## Contracts

### Starknet

- appchain_messaging - appchain messaging contract to receive & send messages from starknet
- executor - executor contract to execute the messages from the appchain (swap assets)
- nft - nft contract to mint & transfer nft from starknet used as a test contract
- erc20 - erc20 contract to mint & transfer erc20 from starknet used as a test contract only on katana because base one doesn't support erc20

### Solis

- orderbook - orderbook contract to store the orders

## Deployer cmd list

Execute the following commands in the `root` directory:

**Deploy all Starknet contracts**

`pnpm run deploy:starknet:all`

- Using this cmd will clean the contracts.json file
- Deploy all starknet contract:
  - appchain_messaging
  - executor
  - nft
  - erc20

**Deploy ArkProject Starknet contracts**

`pnpm run deploy:starknet`

- Deploy starknet contracts:
  - appchain_messaging
  - executor
- additional args:
  - `-sn, --starknet <network>` - starknet network to deploy on (default: "dev")

**Deploy Starknet tokens contracts, for testing purpose**

`pnpm run deploy:starknet:tokens`

- Deploy starknet contracts:

  - nft
  - erc20

- additional args:
  - `-sn, --starknet <network>` - starknet network to deploy on (default: "dev")

**Deploy ArkProject Solis contracts**

`pnpm run deploy:solis`

- Deploy solis contracts:

  - orderbook

- additional args:
  - `-sn, --starknet <network>` - starknet network to deploy on (default: "dev")
  - `-so, --solis <network>` - solis network to deploy on (default: "dev")

## Running & deploying ArkProject locally

**1. Build the Starknet contracts:**

`cd contracts`

`scarb build --workspace`

**2. Install the dojo dependencies:**
Follow the dojo installation guide:
https://book.dojoengine.org/getting-started/quick-start.html

**3. Start a katana for starknet**
With the previously installed dojo, start katana using the following command:

`katana`

**4. Deploy all Starknet contracts on katana**

at the root of the repository execute:

`pnpm run deploy:starknet`

and

`pnpm run deploy:starknet:tokens`

**5. Start the Solis L3 sequencer:**

at the root of the repository execute:

`cargo run -p solis -- --messaging crates/solis/messaging.local.json --dev`

(the messaging.local.json file should be relative to your network, in our case local)

**6. Deploy Solis contracts using:**

at the root of the repository execute:

`pnpm run deploy:solis`

You can now use the SDK locally

check the examples in the `packages/core` folder
