import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucky Jackpot Dapp</title>
        <meta
          content="Win Degen token in Lucky Jackpot by Neos"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

     

      <main className={styles.main}>
         <Image src="/images/lucky-logo.svg" alt="Lucky" />

        <ConnectButton label="Connect" />

        <h1 className={styles.title}>
          Welcome to Lucky Jackpot 👋
        </h1>

        <ConnectButton />

        <p className={styles.description}>
          Coming Soon
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href="https://rainbowkit.com">
            <h2>RainbowKit Documentation &rarr;</h2>
            <p>Learn how to customize your wallet connection flow.</p>
          </a>

          <a className={styles.card} href="https://wagmi.sh">
            <h2>wagmi Documentation &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>

          <a
            className={styles.card}
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2>How it Works</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Rules</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://warpcast.com/neos88" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by Neos
        </a>
      </footer>
    </div>
  );
};

export default Home;
