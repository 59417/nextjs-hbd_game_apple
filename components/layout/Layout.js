import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import classes from './Layout.module.css';


function Layout(props) {

    const date = new Date();
    const nowTime = date.getSeconds();
    console.log('Welcome!', nowTime);


    return (
        <div className={classes.container}>
            <div className={classes.banner}>
                <div className={classes.apples}> 
                    <div><Image src="/apple_icon2.png" alt="banner" width="100%" height="100%"/></div>
                    <div><Image src="/apple_icon.png" alt="banner" width="100%" height="100%"/></div>
                    <div><Image src="/apple_icon3.png" alt="banner" width="100%" height="100%"/></div>
                    <div><Image src="/apple_icon.png" alt="banner" width="100%" height="100%"/></div>
                    <div><Image src="/apple_icon4.png" alt="banner" width="100%" height="100%"/></div>
                </div>
            </div>
            <main className={classes.main}>{props.children}</main>
        </div>
    )
    
} ;

export default Layout;