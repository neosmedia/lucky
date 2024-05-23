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
        <Link href="/"><Image src={luckyLogo} width="80" height="36" alt="Lucky Jackpot Logo" /></Link>

        <ul>
          <li>
            <ConnectButton />
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Leaderboard</h1>

        <Image src={luckyHero} className={styles.responsive} alt="Lucky Jackpot Hero" />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Leaderboard</h3>

            <p>Coming Soon TBA</p>

            <table className={styles.leaderboards}>
              <caption>
                Front-end web developer course 2021
              </caption>
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Lucky Player</th>
                  <th scope="col">Wins</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Chris</th>
                  <td>HTML tables</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">Dennis</th>
                  <td>Web accessibility</td>
                  <td>45</td>
                </tr>
                <tr>
                  <th scope="row">Sarah</th>
                  <td>JavaScript frameworks</td>
                  <td>29</td>
                </tr>
                <tr>
                  <th scope="row">Karen</th>
                  <td>Web performance</td>
                  <td>36</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colspan="2">Average age</th>
                  <td>33</td>
                </tr>
              </tfoot>
            </table>


          </div>
        </div>

        <h2>Lucky 75/25 Jackpot</h2>

        <p className={styles.btn}>
          <Link href="/" rel="noopener noreferrer">
            Play Now
          </Link>
        </p>

        <br />
        <p>
          <Link href="https://basescan.org/token/0x4ed4e862860bed51a9570b96d89af5e1b0efefed?a=0xD243C72e4a1E1430fa7406aF43Dad03d99a61F79" rel="noopener noreferrer" target="_blank">
            View Basescan Transactions
          </Link>
        </p>
        <br />

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
