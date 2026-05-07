---
sidebar_position: 4
---

# useScaffoldEventHistory

Use this hook to retrieve historical event logs for your smart contract, providing past activity data, with the option to watch for new events.

```ts
const {
  data: events,
  isLoading: isLoadingEvents,
  error: errorReadingEvents,
} = useScaffoldEventHistory({
  contractName: "LuckyGuess",
  eventName: "Played",
  fromBlock: 31231n,
  watch: true,
  filters: { player: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045" },
  blockData: true,
  transactionData: true,
  receiptData: true,
});
```

This example loads historical **`Played`** events from **`LuckyGuess`**, starting at block `31231`, optionally watching for new logs, and filtering by the indexed **`player`** field.

## Configuration

| Parameter           | Type      | Required | Description                                                                                              |
| :------------------ | :-------- | :------- | -------------------------------------------------------------------------------------------------------- |
| **contractName**    | `string`  | Yes      | Name of the contract to read from.                                                                       |
| **eventName**       | `string`  | Yes      | Name of the event to read.                                                                               |
| **fromBlock**       | `bigint`  | Yes      | Block number from which to start reading events.                                                         |
| **filters**         | `object`  | No       | Apply filters to the event based on **indexed** parameter names and values `{ [parameterName]: value }`. |
| **blockData**       | `boolean` | No       | If set to true it will return the block data for each event (default: false).                            |
| **transactionData** | `boolean` | No       | If set to true it will return the transaction data for each event (default: false).                      |
| **receiptData**     | `boolean` | No       | If set to true it will return the receipt data for each event (default: false).                          |
| **watch**           | `boolean` | No       | If set to true, the events will be refetched on each block mine (default: false).                        |

## Return Values

- `data` property of the returned object contains an array of event objects, each containing the event parameters and (optionally) the block, transaction, and receipt data.
- `isLoading` property indicates whether the event logs are currently being fetched.
- `error` property contains any error that occurred during the fetching process (if applicable).
- `refetch` property fetches the events again
