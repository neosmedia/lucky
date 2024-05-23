import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import { JackpotTotal } from "../components/jackpot-total";
import { PurchaseOptions } from "../components/purchase-options";
import favIcon from "../images/favicon.png";
import luckyHero from "../images/lucky-hero.png";
import luckyLogo from "../images/lucky-logo.svg";
import potPie from "../images/pot-pie.png";
import styles from "../styles/Home.module.css";
import { JACKPOT_ADDRESS } from "../utils/contract-addresses";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucky Jackpot</title>
        <meta content="Win Degen tokens in the Lucky 75/25 Jackpot" name="description" />

        <link href="https://luckyjackpot.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.b34c1433.png&w=48&q=75" rel="shortcut icon" type="image/x-icon" />
        <link href="https://i.ibb.co/vw8qS11/apple-touch-icon.png" rel="apple-touch-icon" />
        <meta property="og:title" content="Lucky Jackpot" />
        <meta property="og:image" content="https://i.ibb.co/gyhfcFy/social-tn.png" />
        <meta property="og:description" content="Win Degen tokens in the Lucky 75/25 Jackpot" />
        <meta property="og:url" content="https://www.luckyjackpot.xyz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
      </Head>

      <nav>
        <Image src={luckyLogo} width="80" height="36" alt="Lucky Jackpot Logo" />

        <ul>
          <li>
            <ConnectButton />
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Lucky 75/25 Jackpot</h1>

        <Image src={luckyHero} className={styles.responsive} alt="Lucky Jackpot Hero" />

        <div className={styles.box}>
          <div className={styles.one}>
            <JackpotTotal />
          </div>
          <div className={styles.two}>
            <PurchaseOptions />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>How it Works 🛠️</h3>

            <p>Jackpot grows until a random winner is selected - follow these steps to play</p>

            <ol>
              <li>
                Buy tickets for a chance to win
                <ul>
                  <li>1 ticket for 20 $DEGEN</li>
                  <li>5 tickets for 100 $DEGEN</li>
                </ul>
              </li>
              <li>
                The winner is selected randomly
                <ul>
                  <li>75% goes to one winner</li>
                  <li>15% reserved for the next Jackpot</li>
                  <li>10% funds development</li>
                </ul>
              </li>
              <li>Jackpot is sent directly to the winner and a new Jackpot begins</li>
            </ol>
          </div>

          <div className={styles.card}>
            <h3>Rules 📐</h3>

            <p>
              The structure of the game is written in a&nbsp;
              <Link href={`https://basescan.org/address/${JACKPOT_ADDRESS}`} rel="noopener noreferrer" target="_blank">
                smart contract
              </Link>
              &nbsp;for all to see
            </p>

            <ul>
              <li>Each ticket has a chance to win the Lucky Jackpot</li>
              <li>Purchase ticket(s) with $DEGEN token using UI or send directly to contract</li>
              <li><Link href="/leaderboard" rel="noopener noreferrer">Winners</Link> are randomly selected</li>
              <li>Odds of winning are 100/1</li>
              <li>Winner is sent Jackpot automatically</li>
              <li>Max 200 tickets per person</li>
              <li>Base Network</li>
              <li>Txn fees are not included</li>
            </ul>
          </div>
        </div>

        <Image src={potPie} className={styles.responsive} alt="Pot Pie Chart" />

        <br />

        <h2>Previous Winners</h2>

        <p className={styles.btn}>
          <Link href="/leaderboard" rel="noopener noreferrer">
            Lucky 🏆 Leaderboard
          </Link>
        </p>

        <br />
        <p>
          <Link href="https://basescan.org/token/0x4ed4e862860bed51a9570b96d89af5e1b0efefed?a=0xD243C72e4a1E1430fa7406aF43Dad03d99a61F79" rel="noopener noreferrer" target="_blank">
            View Basescan transactions
          </Link>
        </p>
        <br />
        <br />

        <ConnectButton />
      </main>

      <footer className={styles.footer}>
        <Image src={favIcon} width="20" height="20" alt="Lucky 75/25 Jackpot" />
        &nbsp;
        <p>
          Lucky Jackpot by
          <Link href="https://warpcast.com/neos88" rel="noopener noreferrer" target="_blank">
            Neos
          </Link>
          |
          <Link href="https://warpcast.com/web3designer" rel="noopener noreferrer" target="_blank">
            Web3Designer
          </Link>
          &copy;2024
        </p>
      </footer>
    </div>
  );
};

export default Home;
