---
sidebar_position: 2
---

# useScaffoldWriteContract

Use this hook to send a transaction to your smart contract to write data or perform an action.

```ts
const { write: writeGuessAsync } = useScaffoldWriteContract({
  contractName: "LuckyGuess",
});
```

The following configuration options can be passed to the hook:

## Configuration

| Parameter              | Type     | Required | Description                                             |
| :--------------------- | :------- | :------- | ------------------------------------------------------- |
| **contractName**       | `string` | Yes      | Name of the contract to write to.                       |
| **blockConfirmations** | `number` | No       | Number of block confirmations to wait for (default: 1). |
| **gasLimit**           | `bigint` | No       | Transaction gas limit.                                  |

To send the transaction, you can call the `writeGuessAsync` function returned by the hook. Here's an example usage:

```tsx
<Button
  onPress={async () => {
    try {
      await writeGuessAsync({
        functionName: "guess",
        args: [4],
        value: parseEther("0.01"),
      });
    } catch (e) {
      console.error("Error placing guess:", e);
    }
  }}
>
  Guess 4
</Button>
```

This example sends a **`guess`** transaction on **`LuckyGuess`**: pick a number from **1–6**, attach **ETH** as the bet (up to the contract max), and let `writeGuessAsync` broadcast the transaction.

Below is the configuration for `writeGuessAsync` function:

## Configuration

| Parameter        | Type        | Required | Description                                                                                                          |
| :--------------- | :---------- | :------- | -------------------------------------------------------------------------------------------------------------------- |
| **functionName** | `string`    | Yes      | Name of the function to be called.                                                                                   |
| **args**         | `unknown[]` | No       | Array of arguments to pass to the function (if accepts any). Types are inferred from contract's function parameters. |
| **value**        | `bigint`    | No       | Value in ETH that will be sent with transaction (for payable functions only).                                        |

## Return Values

- The loading state is stored in the `isLoading` property.
- The mining state is stored in the `isMining` property.
- `writeContract` functions send the transaction to the smart contract but doesn't return a promise.
- `writeContractAsync` function sends the transaction to the smart contract and returns a promise that resolves when transactions is successful.
