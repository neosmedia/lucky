import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import luckyLogo from '../images/lucky-logo.svg';
import luckyHero from '../images/lucky-hero.avif'

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
        <Image
          src={luckyLogo}
          width="180"
          height="40"
          alt="Lucky Logo"
          className="pull-left"
        />
        
        <ConnectButton label="Connect" className="pull-right" />

        <h1 className={styles.title}>
          Welcome to Lucky Jackpot
        </h1>

        <p className={styles.description}>
          Coming Soon
        </p>

        <Image
          src={luckyHero}
          width="480"
          height="274"
          alt="Lucky Jackpot Hero"
        />

        <ConnectButton />

        <div className={styles.grid}>
          <a
            className={styles.card}
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2>How it Works</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Rules</h2>
            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
