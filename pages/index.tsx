import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import luckyLogo from '../images/lucky-logo.svg';
import luckyHero from '../images/lucky-hero.png';
import potPie from '../images/pot-pie.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucky Jackpot | Win 75/25 Degen Jackpot Prize</title>
        <meta
          content="Win Degen tokens in the Lucky Jackpot 75/25 draw"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <nav>
        <Image
          src={luckyLogo}
          width="80"
          height="36"
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

        <div className={styles.box}>
          <div className={styles.one}>
            <h4>Win The Growing Jackpot 🎩</h4>
            <h2>75,040 <small>$DEGEN</small></h2>
            <p>Last updated 2 mins ago</p>
          </div>
          <div className={styles.two}>
            <h4>Tickets 🎟️ Purchase with $DEGEN</h4>
            <h2>1 Tix = 20$ / 5 Tix = 80$</h2>
            <a className={styles.btn} href="#">Get 1 ticket 20$</a>  <a className={styles.btn} href="#">Get 5 tickets 80$</a>
          </div>
        </div>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>How it Works 🛠️</h3>

            <p>Jackpot grows until a random winner is selected - follow these steps to play</p>

            <ol>
              <li>Buy tickets for a chance to win
                
                <ul>
                  <li>20 $DEGEN for 1 ticket</li>
                  <li>80 $DEGEN for 5 tickets</li>
                </ul>

              </li>
              <li>The winner is selected randomly

                <ul>
                  <li>75% goes to winner</li>
                  <li>15% reserved for the next jackpot</li>
                  <li>10% goes to developers</li>
                </ul>

              </li>
              <li>Jackpot is held in secure wallet until theres a winner degenjackpot.id.cb</li>
            </ol>
          </div>

          <div className={styles.card}>
            <h3>Rules 📐</h3>

            <p>The structure of the game is written in a smart contract for all to see</p>
            <br />
            <ul>
              <li>Each ticket has a chance to win the jackpot</li>
              <li>Purchase ticket(s) with $DEGEN token on Base Network</li>
              <li>Winners are randomly selected by smart contract</li>
              <li>Jackpot must be claimed by the winner</li>
              <li>No maximun amount of entries</li>
              <li>Transaction fees are not included</li>
            </ul>

          </div>

        </div>

        <Image
          src={potPie}
          className={styles.responsive}
          alt="Pot Pie Chart"
        />

        <ConnectButton />

      </main>

      <footer className={styles.footer}>
        <p>Smart Contract <small>🟢</small> Audited  &nbsp;|&nbsp;  Made with 💛 by <a href="https://northvanweb.com/" rel="noopener noreferrer" target="_blank">Neos</a> | <a href="https://warpcast.com/" rel="noopener noreferrer">Web3Desginer</a></p>
      </footer>
    </div>
  );
};

export default Home;