import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Logo from '../public/assets/logo.png';
import { MenuBar } from '../components/Menu/MenuBar';
import useData from './api/data';

export default function Home() {
 const data = useData()


  return (
    <>
      <Head>
        <meta name="description" content="gotlandshem TestApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data && (
        <main className={styles.main}>
          <div className={styles.description}>
            <MenuBar />
            <p>
              {data.content.title}
              <code className={styles.code}>{data.content.subTitle}</code>
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
  );
}
