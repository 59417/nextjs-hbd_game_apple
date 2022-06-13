import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react'; 
import classes from './SeeResult.module.css';

function SeeResult(props) {

    const score = props.result.id;
    const path = props.result.path;

    const isOdd = score % 2;
    const trueArr = Array(Math.floor(score*2.5)).fill(true);
    const half = Array(isOdd).fill('half');
    const falseArr = Array(25-trueArr.length-isOdd).fill(false);
    const appleArr = [...Array(25)].map((e, i) => {
        return { id: i, scored: trueArr.concat(half, falseArr)[i] }
    });
    // console.log(trueArr, half, falseArr, appleArr);

    const [isApple, setIsApple] = useState(false);

    function handleClick() {
        setIsApple(!isApple)
    };

    useEffect(() => {}, [isApple]);

    const router = useRouter();
    function goPostcard() {
        router.push(`/${path}/postcard`);
    };

    function seeApples() {
        if (isApple) {
            return (
                <div className={classes.wrapper}>
                    <div className={classes.text2}>
                        <h1>{score!==0 ? '恭喜獲得' : '太爛ㄌ......'}</h1>
                        <h2>{score*2.5} 顆蘋果</h2>
                    </div>
                    <div className={classes.apples}>
                        {appleArr.map(element => {
                            return (
                                <div key={element.id} className={classes.img_wrapper}>
                                    <Image 
                                        src={
                                            element.scored 
                                                ? element.scored === 'half' 
                                                    ? "/apple_half.png" 
                                                        : "/apple_btn.png" 
                                                    : "/apple_grey.png"
                                            }
                                        alt="go" 
                                        width="100%" 
                                        height="100%"/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={classes.btn2}>
                        <button className="button is-primary is-light" onClick={goPostcard}>
                            <Image src="/envelope_info.png" alt="go" width="36px" height="30px"/>
                            <p>&ensp;果園ㄉ信箱有新通知！</p>
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={classes.wrapper}>
                    <div className={classes.text1}>
                        <h1>查看成果</h1>
                    </div>
                    <div className={classes.btn}>
                        <button className="button is-danger is-light" onClick={handleClick}>
                            <Image src="/apple_btn.png" alt="go" width="30px" height="30px"/>
                            &ensp;前往蘋果園
                        </button>
                    </div>
                </div>
            )
        }
    };

    return (
        <Fragment>
            {seeApples()}
        </Fragment>
    );
};

export default SeeResult;