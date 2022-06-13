import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import fadeTransition from '../../styles/transitions/fade.module.css'; 
import classes from './Perfect.module.css'; 


function Perfect() {

    const photoArr = Array(9).fill().map((_, i) => i+1);
    
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        setIsShow(!isShow);
    }, []);
    
    const router = useRouter();
    function goPerfectPage(element) {
        setIsShow(!isShow);
        setTimeout(() => {
            router.push(`/perfect-marks/${element}`);
        }, 300);
    };

    const nodeRef = useRef(null);


    return (
        <CSSTransition nodeRef={nodeRef} in={isShow} classNames={fadeTransition} timeout={800} unmountOnExit >
            <div className={classes.wrapper} ref={nodeRef}>
                <div>
                    <h1>哇賽金蘋果欸</h1>
                    <h2>&#40;應該是有驚喜啦&#41;</h2>
                </div>
                <div className={classes.apples}>
                    {photoArr.map(element => {
                        return (
                            <div key={element} className={classes.img_wrapper}>
                                {
                                    element !== 5 
                                        ? <Image 
                                            src={`/golden_apple.png`} 
                                            alt={element} objectFit='cover' 
                                            layout="fill" 
                                            onClick={() => goPerfectPage(element)}
                                        />
                                        : <div className={classes.pick}><div>挑一顆</div></div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Perfect;