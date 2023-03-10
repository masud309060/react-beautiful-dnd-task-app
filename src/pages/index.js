import Head from 'next/head'
import Link from "next/link";
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <p>
              <Link href={"/tasks"}>
                  <code className={styles.code}>Tasks</code>
              </Link>
          </p>

        </div>

      </main>
    </>
  )
}
