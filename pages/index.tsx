import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react"
import axios from 'axios'
import Logo from '../public/assets/logo.png'

const inter = Inter({ subsets: ['latin'] })
const url = 'http://localhost:7000/'


export default function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    console.log()
    getData();
  }, []);

  return (

    <>
      <Head>
        <meta name="description" content="Gotlandshem TestApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data && (
        <main className={styles.main}>
          <div className={styles.description}>
            <p>{data.content.title}

              <code className={styles.code}> {data.content.subTitle}</code>
            </p>
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' '}
                <Image
                  src={Logo}
                  alt="Amaceit"
                  className={styles.vercelLogo}
                  width={125}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>

          <div className={styles.center}>
            <h1>{data.alias}</h1>
          </div>

          
        </main>
      )}
    </>
  )
}
