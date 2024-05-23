import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import favIcon from "../images/favicon.png";
import luckyHero from "../images/lucky-hero.png";
import luckyLogo from "../images/lucky-logo.svg";
import potPie from "../images/pot-pie.png";
import styles from "../styles/Leaderboard.module.css";


export default function Leaderboard() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Leaderboard | Lucky Jackpot</title>
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
        <Link href="/"><Image src={luckyLogo} width="80" height="36" alt="lucky Jackpot Logo" /></Link>

        <ul>
          <li>
            <ConnectButton />
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Lucky 🏆 Leaderboard</h1>

        <Image src={luckyHero} className={styles.responsive} alt="Lucky Jackpot Tickets" />
        <h2 className={styles.subtitle}>jackpot has been won 2 times</h2>

        <table className={styles.leaderboards}>
          <caption>
            Leaderboard updates every 24 hrs
          </caption>
          <thead>
            <tr>
              <th className={styles.centre}>RANK</th>
              <th>PLAYER</th>
              <th className={styles.centre}>WINS</th>
              <th className={styles.right}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.centre}>1</td>
              <td>TBA</td>
              <td className={styles.centre}>1</td>
              <td className={styles.right}>420</td>
            </tr>
            <tr>
              <td className={styles.centre}>2</td>
              <td>0x94t3z</td>
              <td className={styles.centre}>1</td>
              <td className={styles.right}>181</td>
            </tr>
            <tr>
              <td className={styles.centre}>3</td>
              <td>liveineth.eth</td>
              <td className={styles.centre}>0</td>
              <td className={styles.right}>60</td>
            </tr>
            <tr>
              <td className={styles.centre}>4</td>
              <td>testy1234567890x</td>
              <td className={styles.centre}>0</td>
              <td className={styles.right}>1</td>
            </tr>
            <tr>
              <td className={styles.centre}>5</td>
              <td>neos88</td>
              <td className={styles.centre}>0</td>
              <td className={styles.right}>0</td>
            </tr>
          </tbody>
        </table>
        <p>Amounts are in $degen</p>

        <h2>Do you feel lucky?</h2>

        <p className={styles.description}>Winners get 75% of the Jackpot sent automatically 🪄 to your wallet</p>

        <Image src={potPie} className={styles.responsive} alt="Pot Pie Chart" />

        <p className={styles.btn}>
          <Link href="/" rel="noopener noreferrer">
            ☘️ Play Now
          </Link>
        </p>

        <p>
          <Link href="https://basescan.org/token/0x4ed4e862860bed51a9570b96d89af5e1b0efefed?a=0xD243C72e4a1E1430fa7406aF43Dad03d99a61F79" rel="noopener noreferrer" target="_blank">
            View Basescan transactions
          </Link>
        </p>

        <br />

        <p className={styles.description}>Jackpot grows until a random win 🎲 is rolled</p>

        <p>Frame version is currently being built now, and is coming to channels soon</p>


      </main>

      <footer className={styles.footer}>
        <Image src={favIcon} width="20" height="20" alt="Lucky 75/25 Jackpot" />
        &nbsp;
        <p>
          Lucky Jackpot by&nbsp;
          <Link href="https://warpcast.com/neos88" rel="noopener noreferrer" target="_blank">
            Neos
          </Link>
          &nbsp;|&nbsp;
          <Link href="https://warpcast.com/web3designer" rel="noopener noreferrer" target="_blank">
            Web3Designer
          </Link>
          &nbsp;&copy;2024
        </p>
      </footer>
    </div>

    );
};
