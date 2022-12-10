import { FC } from "react";
import type { AppProps } from "next/app";

import "v2/styles/index.scss";
import "react-day-picker/lib/style.css";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


import WarpSpeed from "../layouts/WarpSpeed";

const Body: FC<AppProps> = (props) => {
  return <WarpSpeed {...props} />;
};

const App: FC<AppProps> = (props) => {

  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      alchemyProvider({ apiKey: "v_ARaQWW4qVEC0ZsjeutSHswvZ_y5t2S" }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return (
    <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Body {...props} />
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  );
};

export default App;
