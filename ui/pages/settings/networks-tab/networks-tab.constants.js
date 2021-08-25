import {
  GOERLI,
  GOERLI_CHAIN_ID,
  GOERLI_RPC_URL,
  KOVAN,
  KOVAN_CHAIN_ID,
  KOVAN_RPC_URL,
  MAINNET,
  MAINNET_CHAIN_ID,
  MAINNET_RPC_URL,
  RINKEBY,
  RINKEBY_CHAIN_ID,
  RINKEBY_RPC_URL,
  TESTNET,
  TESTNET_CHAIN_ID,
  TESTNET_RPC_URL,
} from '../../../../shared/constants/network';

const defaultNetworksData = [
  {
    labelKey: MAINNET,
    iconColor: '#29B6AF',
    providerType: MAINNET,
    rpcUrl: MAINNET_RPC_URL,
    chainId: MAINNET_CHAIN_ID,
    ticker: 'ETH',
    blockExplorerUrl: 'https://explorer.xinfin.network',
  },
  {
    labelKey: TESTNET,
    iconColor: '#FF4A8D',
    providerType: TESTNET,
    rpcUrl: TESTNET_RPC_URL,
    chainId: TESTNET_CHAIN_ID,
    ticker: 'ETH',
    blockExplorerUrl: 'https://explorer.apothem.network',
  },
  {
    labelKey: RINKEBY, 
    iconColor: '#F6C343',
    providerType: RINKEBY,
    rpcUrl: RINKEBY_RPC_URL,
    chainId: RINKEBY_CHAIN_ID,
    ticker: 'ETH',
    blockExplorerUrl: 'https://rinkeby.network',
  },
  {
    labelKey: GOERLI,
    iconColor: '#3099f2',
    providerType: GOERLI,
    rpcUrl: GOERLI_RPC_URL,
    chainId: GOERLI_CHAIN_ID,
    ticker: 'ETH',
    blockExplorerUrl: 'https://goerli.network',
  },
  {
    labelKey: KOVAN,
    iconColor: '#9064FF',
    providerType: KOVAN,
    rpcUrl: KOVAN_RPC_URL,
    chainId: KOVAN_CHAIN_ID,
    ticker: 'ETH',
    blockExplorerUrl: 'https://kovan.network',
  },
];

export { defaultNetworksData };
