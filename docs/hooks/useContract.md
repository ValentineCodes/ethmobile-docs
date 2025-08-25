---
sidebar_position: 13
---

# useContract

Use this hook to get a contract instance by providing the contract ABI and address. It enables you to interact with your contract methods for both reading data and sending transactions with integrated transaction signing.

```ts
const { data: yourContract } = useContract({
  abi: YourContractABI,
  address: "0x...",
});

// Read contract data
const result = await yourContract.read.yourReadFunction(["param1", "param2"]);

// Write to contract with transaction signing
const tx = await yourContract.write.yourWriteFunction(["param1", "param2"], {
  value: parseEther("0.1"),
  gasLimit: 300000n,
});
```

This example uses the `useContract` hook to obtain a contract instance for any smart contract, enabling both read and write operations with automatic transaction signing integration.

## Configuration

| Parameter   | Type     | Required | Description                                       |
| :---------- | :------- | :------- | ------------------------------------------------- |
| **abi**     | `Abi`    | Yes      | The contract ABI containing function definitions. |
| **address** | `string` | Yes      | The contract address on the blockchain.           |

## Return Value

- `data` : Object which can be used to call `read` and `write` functions of the contract.

## Read Operations

Read functions are automatically detected from the ABI and provide a clean interface for contract calls:

```tsx
// Simple read operation
const balance = await contract.read.balanceOf(["0x1234..."]);

// Read with options
const result = await contract.read.getData([], {
  gasLimit: 100000n,
  blockTag: "latest",
});
```

## Write Operations

Write functions automatically integrate with the transaction signing modal:

```tsx
// Simple write operation
const tx = await contract.write.transfer(["0x1234...", 100n]);

// Write with transaction options
const tx = await contract.write.mint([], {
  value: parseEther("0.1"),
  gasLimit: 500000n,
  blockConfirmations: 3,
});
```

## Contract Read Options

| Parameter    | Type               | Description                       |
| :----------- | :----------------- | --------------------------------- |
| **gasLimit** | `bigint`           | Gas limit for the transaction.    |
| **blockTag** | `string \| number` | Block tag for the read operation. |

## Contract Write Options

| Parameter                | Type     | Description                                |
| :----------------------- | :------- | ------------------------------------------ |
| **value**                | `bigint` | ETH value to send with the transaction.    |
| **gasLimit**             | `bigint` | Gas limit for the transaction.             |
| **gasPrice**             | `bigint` | Gas price for the transaction.             |
| **maxFeePerGas**         | `bigint` | Maximum fee per gas (EIP-1559).            |
| **maxPriorityFeePerGas** | `bigint` | Maximum priority fee per gas (EIP-1559).   |
| **nonce**                | `number` | Transaction nonce.                         |
| **blockConfirmations**   | `number` | Number of block confirmations to wait for. |
