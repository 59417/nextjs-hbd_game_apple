import Head from "next/head";
import { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css";
import { SCORE_PATH } from '../../data/data';
import Counting from '../../components/score/Counting';
import SeeResult from '../../components/score/SeeResult';


export default function Score(props) {

    const result = props.result;
    // console.log(score);
    const [isSeeResult, setIsSeeResult] = useState(false);

    useEffect(() => {
        // console.log(isSeeResult);
        const timer = setTimeout(() => {
        //   console.log('This will run after 5 second!');
          setIsSeeResult(!isSeeResult);
        }, 3000);
        // return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            
            <Head>
                <title>25 Apples</title>
                <link rel="icon" href="/apple_icon.png"/>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
    
            <main className={styles.main}>
                {isSeeResult ? <SeeResult result={result} /> : <Counting/>}
            </main>

        </div>
    );
};


export async function getStaticPaths () {

    return {
        fallback: 'blocking',  
        paths: SCORE_PATH.map(obj => ({
            params: {
                score: obj.path,
            }
        }))
    }
};


export async function getStaticProps (context) {

    const scoreId = context.params.score; 
    const scoreResult = SCORE_PATH.find((obj) => (
        obj.path === scoreId
    ));

    return {
        props: {
            result: scoreResult
        }
    };
};


