import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { SCORE_PATH } from '../../data/data';
import Postcard from '../../components/score/Postcard';
import Perfect from '../../components/score/Perfect';
import Zero from '../../components/score/Zero';


export default function PostcardPage(props) {

    const currentPath = props.result.path;
    const score = SCORE_PATH.find(obj => obj.path === props.result.path).id;

    
    return (
        <div className={styles.container}>

            <Head>
                <title>25 Apples</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <main className={styles.main}>
                {
                    currentPath!=='g5yb6yE8' 
                    ? currentPath!=='Nmpjtbr5' 
                        ? <Postcard score={score}/> 
                        : <Perfect />
                    : <Zero />
                }
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

