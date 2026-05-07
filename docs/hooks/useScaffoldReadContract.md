---
sidebar_position: 1
---

# useScaffoldReadContract

Use this hook to read public variables and get data from read-only functions of your smart contract.

```ts
const { data: betsForUser } = useScaffoldReadContract({
  contractName: "LuckyGuess",
  functionName: "betsPerAddress",
  args: ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
});
```

This example reads `betsPerAddress` for a given wallet from the **`LuckyGuess`** contract.

## Configuration

| Parameter        | Type        | Required | Description                                                                                                         |
| :--------------- | :---------- | :------- | ------------------------------------------------------------------------------------------------------------------- |
| **contractName** | `string`    | Yes      | Name of the contract to read from.                                                                                  |
| **functionName** | `string`    | Yes      | Name of the function to call.                                                                                       |
| **args**         | `unknown[]` | No       | Array of arguments to pass to the function (if accepts any). Types are inferred from contract's function parameters |
| **enable**       | `boolean`   | No       | Fetch data on mount                                                                                                 |
| **watch**        | `boolean`   | No       | If set to true, the data will be refetched on each block mine (default: false).                                     |

## Return Values

- The retrieved data is stored in the `data` property.
- The loading state is stored in the `isLoading` property.
- The `error` property stores any errors during reads.
- You can refetch the data by calling the `refetch` function.
- You can also use `readContract` function to read data. by filling the object parameter with - `abi`,
  `address`,
  `functionName`,
  `args`

Below is the configuration for `readContract` function:

## Configuration

| Parameter        | Type        | Required | Description                                                                                                         |
| :--------------- | :---------- | :------- | ------------------------------------------------------------------------------------------------------------------- |
| **abi**          | `object[]`  | Yes      | ABI of the contract to read from.                                                                                   |
| **address**      | `string`    | Yes      | Address of contract to read from.                                                                                   |
| **functionName** | `string`    | Yes      | Name of the function to call.                                                                                       |
| **args**         | `unknown[]` | No       | Array of arguments to pass to the function (if accepts any). Types are inferred from contract's function parameters |
