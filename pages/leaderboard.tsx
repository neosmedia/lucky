import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import { JackpotTotal } from "../components/jackpot-total";
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
        <h1 className={styles.title}>🏆 Leaderboard</h1>

        <Image src={luckyHero} className={styles.responsive} alt="Lucky Jackpot Raffle" />
        <h2 className={styles.subtitle}>jackpot has been won 2 times</h2>

        <table className={styles.leaderboards}>
          <caption>
            Leaderboard updates every 12 hrs
          </caption>
          <thead>
            <tr>
              <th className={styles.centre}>#</th>
              <th>PLAYER</th>
              <th className={styles.centre}>&nbsp;WINS&nbsp;</th>
              <th className={styles.right}>&nbsp;AMOUNT&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.leader}>
              <td className={styles.centre}>&nbsp;1</td>
              <td>TBA ☘️</td>
              <td className={styles.centre}>--</td>
              <td className={styles.right}>495</td>
            </tr>
            <tr>
              <td className={styles.centre}>&nbsp;2</td>
              <td>0x94t3z</td>
              <td className={styles.centre}>1</td>
              <td className={styles.right}>181</td>
            </tr>
            <tr>
              <td className={styles.centre}>&nbsp;3</td>
              <td>vihavibes.eth</td>
              <td className={styles.centre}>1</td>
              <td className={styles.right}>60</td>
            </tr>
            <tr>
              <td className={styles.centre}>&nbsp;4</td>
              <td>test_ty1</td>
              <td className={styles.centre}>0</td>
              <td className={styles.right}>0</td>
            </tr>
            <tr>
              <td className={styles.centre}>&nbsp;5</td>
              <td>dev-0x000000000</td>
              <td className={styles.centre}>0</td>
              <td className={styles.right}>0</td>
            </tr>
            <tr>
              <td className={styles.centre}>&nbsp;6</td>
              <td>dev-1</td>
              <td className={styles.centre}>--</td>
              <td className={styles.right}>--</td>
            </tr>
            <tr>
              <td className={styles.centre}>&nbsp;7</td>
              <td>henry</td>
              <td className={styles.centre}>--</td>
              <td className={styles.right}>--</td>
            </tr>
            <tr>
              <td className={styles.centre}>&nbsp;8</td>
              <td>neos88</td>
              <td className={styles.centre}>--</td>
              <td className={styles.right}>--</td>
            </tr>
            <tr>
              <td className={styles.centre}>&nbsp;9</td>
              <td>qa-1</td>
              <td className={styles.centre}>--</td>
              <td className={styles.right}>--</td>
            </tr>
            <tr>
              <td className={styles.centre}>10</td>
              <td>web3designer</td>
              <td className={styles.centre}>--</td>
              <td className={styles.right}>--</td>
            </tr>
          </tbody>
        </table>
        <p>*Amounts are in $DEGEN from <Link href="https://degen.tips" rel="noopener noreferrer" target="_blank">
            degen.tips</Link></p>

        <h2>Do you feel lucky?</h2>

        <p className={styles.btn}>
          <Link href="/" rel="noopener noreferrer">
            ☘️ Play Now
          </Link>
        </p>

        <br />

        <Image src={potPie} className={styles.responsive} alt="Pot Pie Chart" />

        <JackpotTotal />

        <p>
          <small>
            <Link href="https://basescan.org/token/0x4ed4e862860bed51a9570b96d89af5e1b0efefed?a=0xD243C72e4a1E1430fa7406aF43Dad03d99a61F79" rel="noopener noreferrer" target="_blank">
              View Basescan transactions
            </Link>
          </small>
        </p>

        <br />

        <p className={styles.description}>Jackpot grows until a random win 🎲 is rolled</p>

        
      </main>

      <footer className={styles.footer}>
        <Image src={favIcon} width="20" height="20" alt="Lucky 75/25 Jackpot" />
        &nbsp;
        <p>
          Lucky Jackpot by&nbsp;
          <Link href="https://warpcast.com/neos88" rel="noopener noreferrer">
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
