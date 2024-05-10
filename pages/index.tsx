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

            <p>Jackpot growns until a random winner is selected</p>

            <ol>
              <li>Buy tickets with $DEGEN to win
                
                <ul>
                  <li>20 $DEGEN for 1 ticket</li>
                  <li>80 $DEGEN for 5 tickets</li>
                </ul>

              </li>
              <li>The winner is selected randomly

                <ul>
                  <li>75% goes to winner</li>
                  <li>10% goes to developers</li>
                  <li>15% held in reserves for the next jackpot</li>
                </ul>

              </li>
              <li>Jackpot is held in secure wallet until theres a winner degenjackpot.id.cb</li>
            </ol>
          </div>

          <div className={styles.card}>
            <h2>Rules</h2>
            <p>The structure of the game is in a smart contract is public to view</p>
            
            <ul>
              <li>Each ticket has a chance to win the jackpot</li>
              <li>Purchase ticket(s) with $DEGEN token on Base Network</li>
              <li>Winners are randomly selected by smart contract</li>
              <li>Jackpot must be claimed by the winner to collect</li>
              <li>No maximun amount of entries</li>
              <li>No rugs</li>
              <li>Transaction fees are not included</li>
            </ul>

          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://northvanweb.com/" rel="noopener noreferrer" target="_blank">
          Made with 💜 by Neos
        </a>
      </footer>
    </div>
  );
};

export default Home;