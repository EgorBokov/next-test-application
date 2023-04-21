import { NextPage } from 'next'
import next from '@/../public/next.svg'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/MainPage.module.scss'
export default function MainPage() {
  return (
      <>
          <Head>
              <title>Main page</title>
              <meta name='description' content='This is working SEO description!' />
          </Head>
        <div>
            <h3>Welcome to out website.</h3>
            <p>We are glad to see you here!</p>
            <hr />
            <div style={{ margin: '30px 0px'}}>
                <Link
                    href='/clients-by-path'
                    className={styles.link}
                >
                    Страница с клиентами, реализованная через <span style={{ fontWeight: 'bold' }}>getStaticPaths</span>
                </Link>
            </div>
            <hr/>
            <div>
                <p>This website was written using <span style={{ fontWeight: 'bold' }}>Next.js</span>, SSR technology</p>
                <Image
                    src={next}
                    alt='Next.js Image'
                    width={200}
                    height={70}
                    priority
                />
            </div>
        </div>
      </>
  )
}
