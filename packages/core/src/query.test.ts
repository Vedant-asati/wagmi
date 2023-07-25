import { expect, test } from 'vitest'

import * as query from './query.js'

test('exports', () => {
  expect(Object.keys(query)).toMatchInlineSnapshot(`
    [
      "connectMutationOptions",
      "disconnectMutationOptions",
      "getBalanceQueryKey",
      "getBalanceQueryOptions",
      "getBlockNumberQueryKey",
      "getBlockNumberQueryOptions",
      "getEnsAddressQueryKey",
      "getEnsAddressQueryOptions",
      "getEnsAvatarQueryKey",
      "getEnsAvatarQueryOptions",
      "getEnsNameQueryKey",
      "getEnsNameQueryOptions",
      "getEnsResolverQueryKey",
      "getEnsResolverQueryOptions",
      "getFeeDataQueryKey",
      "getFeeDataQueryOptions",
      "getTokenQueryKey",
      "getTokenQueryOptions",
      "getTransactionQueryKey",
      "getTransactionQueryOptions",
      "prepareSendTransactionQueryKey",
      "prepareSendTransactionQueryOptions",
      "readContractQueryKey",
      "readContractQueryOptions",
      "readContractsQueryKey",
      "readContractsQueryOptions",
      "reconnectMutationOptions",
      "sendTransactionMutationOptions",
      "signMessageMutationOptions",
      "signTypedDataMutationOptions",
      "switchAccountMutationOptions",
      "simulateContractQueryKey",
      "simulateContractQueryOptions",
      "switchChainMutationOptions",
      "waitForTransactionReceiptQueryKey",
      "waitForTransactionReceiptQueryOptions",
      "writeContractMutationOptions",
      "hashFn",
    ]
  `)
})
