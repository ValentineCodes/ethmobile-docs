---
sidebar_position: 3
---

# useReadContract

Use this hook to read public variables and get data from read-only functions of any contract.

```ts
const { data: totalBets } = useReadContract({
  abi: [LuckyGuessABI],
  address: "0xabca6bf26964af9f7eed9e03e53415d37aa90123",
  functionName: "totalBets",
});
```

This example reads the public **`totalBets`** counter from a **`LuckyGuess`**-style contract at `address`.

## Configuration

| Parameter        | Type        | Required | Description                                                                                                         |
| :--------------- | :---------- | :------- | ------------------------------------------------------------------------------------------------------------------- |
| **abi**          | `object[]`  | No       | ABI of the contract to read from.                                                                                   |
| **address**      | `string`    | No       | Address of contract to read from.                                                                                   |
| **functionName** | `string`    | No       | Name of the function to call.                                                                                       |
| **args**         | `unknown[]` | No       | Array of arguments to pass to the function (if accepts any). Types are inferred from contract's function parameters |
| **enabled**      | `boolean`   | No       | Should fetch data onMount. (default: true)                                                                          |
| **watch**        | `boolean`   | No       | If set to true, the data will be refetched on each block mine (default: false).                                     |
| **onError**      | `function`  | No       | Function to handle errors.                                                                                          |

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
