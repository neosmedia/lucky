import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import luckyLogo from '../images/lucky-logo.svg';
import luckyHero from '../images/lucky-hero.png'

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

      <nav>
        <Image
          src={luckyLogo}
          width="180"
          height="40"
          alt="Lucky Logo"
        />

        <ul>
          <li>
            <ConnectButton label="Connect"/>
          </li>
        </ul>

      </nav>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Lucky Jackpot
        </h1>

        <Image
          src={luckyHero}
          width="480"
          height="274"
          alt="Lucky Jackpot Hero"
        />

        <ConnectButton />

        <br /><br />

        <p className={styles.description}>
          Coming Soon
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h2>How it Works</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className={styles.card}>
            <h2>Rules</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

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
