import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          en <a href="https://nextjs.org">{` `}Projects</a>
        </h1>

        <p className={styles.description}>
          We <code className={styles.code}>{` { plan, solve, implement } `}</code>in the following areas.
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Tech ๐ค&rarr;</h2>
            <p>Robotics. IoT. Cloud. Data.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Turf ๐ฑ&rarr;</h2>
            <p>Soil. Inputs. Outcomes.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Innovation ๐งช&rarr;</h2>
            <p>Research. Development. Prototypes.</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Insights ๐ฌ&rarr;</h2>
            <p>
              Test assumptions. Draw conclusions. Act with purpose.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by โก๏ธโ๏ธ๐ฅ
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
