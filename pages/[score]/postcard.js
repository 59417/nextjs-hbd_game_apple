import Head from 'next/head'
import Postcard from '../../components/score/Postcard'
import Perfect from '../../components/score/Perfect'
import Zero from '../../components/score/Zero'
import { SCORE_PATH } from '../../data/data'
import styles from '../../styles/Home.module.css'

export default function PostcardPage({ result }) {
  const { path: currentPath } = result

  const score = SCORE_PATH.find((obj) => obj.path === currentPath).id

  return (
    <div className={styles.container}>
      <Head>
        <title>25 Apples</title>
        <link rel="icon" href="/apple_icon.png" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <main className={styles.main}>
        {currentPath !== 'g5yb6yE8' ? (
          currentPath !== 'Nmpjtbr5' ? (
            <Postcard score={score} />
          ) : (
            <Perfect />
          )
        ) : (
          <Zero />
        )}
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    fallback: 'blocking',
    paths: SCORE_PATH.map((obj) => ({
      params: { score: obj.path },
    })),
  }
}

export async function getStaticProps(context) {
  const scoreId = context.params.score
  const scoreResult = SCORE_PATH.find((obj) => obj.path === scoreId)

  return { props: { result: scoreResult } }
}
