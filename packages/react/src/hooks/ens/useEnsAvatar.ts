import * as React from 'react'

import { useContext } from '../../context'
import { useProvider } from '../providers'

type Config = {
  addressOrName?: string | null
  skip?: boolean
}

type State = {
  avatar?: string | null
  error?: Error
  loading: boolean
}

const initialState: State = {
  loading: false,
}

export const useEnsAvatar = ({ addressOrName, skip }: Config = {}) => {
  const {
    state: { data },
  } = useContext()
  const provider = useProvider()
  const [state, setState] = React.useState<State>(initialState)

  const getEnsAvatar = React.useCallback(
    async (config: Pick<Config, 'addressOrName'>) => {
      try {
        if (!config.addressOrName) return
        setState((x) => ({ ...x, error: undefined, loading: true }))
        const avatar = await provider.getAvatar(config.addressOrName)
        setState((x) => ({ ...x, avatar, loading: false }))
        return avatar
      } catch (_error) {
        const error = _error as Error
        setState((x) => ({ ...x, error, loading: false }))
        return error
      }
    },
    [provider],
  )

  // Fetch avatar when deps or chain changes
  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    if (!addressOrName || skip) return
    getEnsAvatar({ addressOrName })
  }, [addressOrName, data?.chainId])
  /* eslint-enable react-hooks/exhaustive-deps */

  return [
    { data: state.avatar, loading: state.loading, error: state.error },
    getEnsAvatar,
  ] as const
}
