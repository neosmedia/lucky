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
          width="112"
          height="50"
          alt="Lucky Logo"
        />

        <ul>
          <li>
            <ConnectButton />
          </li>
        </ul>

      </nav>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Lucky 75/25 Jackpot
        </h1>

        <Image
          src={luckyHero}
          width="320"
          height="182"
          alt="Lucky Jackpot Hero"
        />

        <p className={styles.description}>
          Coming Soon
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h2>How it Works</h2>

            <p>Jackpot growns until it's won! To play:</p>

            <ol>
              <li>Buy tickets with $DEGEN for your chance to win
                
                <ul>
                  <li>10 $DEGEN for 1 Ticket</li>
                  <li>40 $DEGEN for 5 Tickets</li>
                </ul>

              </li>
              <li>A random winner is selected for the Lucky Jackpot

                <ul>
                  <li>75% of pot goes to winner</li>
                  <li>10% of pot goes to developers</li>
                  <li>15% Held in reserves for the next jackpot</li>
                </ul>

              </li>
              <li>Jackpot is held in this wallet: degenjackpot.cb.id</li>
              <li>Winners must claim pize to collect winnings</li>
            </ol>
          </div>

          <div className={styles.card}>
            <h2>Rules</h2>
            <p>The structure of the game is in a Smart Contract is public to view. Audited Text here. Buy ticket to enter</p>
            <ul>
              <li>Item One</li>
              <li>Item Two</li>
              <li>Item Three</li>
            </ul>
            <p>More text Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
