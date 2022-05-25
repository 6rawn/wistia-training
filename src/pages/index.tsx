import styles from '@styles/Home.module.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { WistiaButtonUploader, WistiaDropInUploader } from '@components/WistiaUploader'

const WistiaVideoViewer = dynamic(() => import('@components/WistiaVideoViewer'), { ssr: false })

const MY_PROJECT_Id = ''
const MY_ACCESS_TOKEN = ''
const MY_VIDEO = ''

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wistia sample</title>
      </Head>

      <main className={styles.main}>
        <WistiaDropInUploader projectId={MY_PROJECT_Id} accessToken={MY_ACCESS_TOKEN} />
        <WistiaButtonUploader projectId={MY_PROJECT_Id} accessToken={MY_ACCESS_TOKEN} />
        <WistiaVideoViewer videoId={MY_VIDEO} />
      </main>
    </div>
  )
}
