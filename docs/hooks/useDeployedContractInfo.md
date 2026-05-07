---
sidebar_position: 5
---

# useDeployedContractInfo

Use this hook to fetch details about a deployed smart contract, including the ABI and address.

```ts
const { data: deployedContractData } = useDeployedContractInfo({ contractName: "LuckyGuess" });
```

This example retrieves the details of the deployed `LuckyGuess` contract bundled with the default template and stores them in the `deployedContractData` object.

## Configuration

| Parameter        | Type     | Required | Description                                    |
| :--------------- | :------- | :------- | ---------------------------------------------- |
| **contractName** | `string` | Yes      | Name of the contract.                          |
| **chainId**      | `number` | No       | Chain ID of blockchain contract is deployed to |

### Return Value

- `data`: Object containing `address` and `abi` of contract.
- `isLoading`: Boolean indicating whether the data is loaded
