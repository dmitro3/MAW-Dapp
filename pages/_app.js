import '../styles/globals.css';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, avalanche, bscTestnet, mainnet, polygon } from 'wagmi/chains';

const chains = [arbitrum, mainnet, polygon, bscTestnet, avalanche];
const projectId = 'aca932c97e3f9bc59a1636dc1aeae670';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function MyApp({ Component, pageProps }) {
  return (
    
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>
    
  );
}

export default MyApp;
