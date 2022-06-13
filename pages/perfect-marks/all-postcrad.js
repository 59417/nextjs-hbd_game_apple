import Head from "next/head";
import { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css";
import AllPostcards from "../../components/score/AllPostcards"; 


function AllPostcardPage() {
    return (
        <div className={styles.container}>
            
            <Head>
                <title>25 Apples</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
    
            <main className={styles.main}>
                <AllPostcards />
            </main>

        </div>
    );
};

export default AllPostcardPage;