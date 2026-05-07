---
sidebar_position: 6
---

# useScaffoldContract

Use this hook to get your contract instance by providing the contract name. It enables you to interact with your contract methods.
For reading data or sending transactions, it's recommended to use `useScaffoldReadContract` and `useScaffoldWriteContract`.

```ts
const { data: luckyGuess } = useScaffoldContract({
  contractName: "LuckyGuess",
});
// Example read: total bets placed (public uint256)
const total = await luckyGuess?.read.totalBets();

// Example write: place a guess (1–6) with a payable bet
const playGuess = async () => {
  await luckyGuess?.write.guess([3], { value: parseEther("0.01") });
};
```

This example uses the `useScaffoldContract` hook to obtain a contract instance for the template **`LuckyGuess`** contract.

## Configuration

| Parameter        | Type     | Required | Description           |
| :--------------- | :------- | :------- | --------------------- |
| **contractName** | `string` | Yes      | Name of the contract. |

|

## Return Value

- `data` : Object which can be used to call `read` and `write` functions of the contract.
