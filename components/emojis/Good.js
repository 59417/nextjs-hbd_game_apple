import Image from "next/image"; 
import { useRouter } from "next/router";
import { useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import slideTransition from '../../styles/transitions/slide.module.css'; 
import classes from './Emoji.module.css';

function Good(props) {

    const isShow = props.in;
    const handleNext = props.handle_next;
    const currCard = props.curr_card;
    const resultPath = props.path;

    const router = useRouter();
    function handleGoResult() {
        router.push(`/${resultPath.path}`);
    };

    const nodeRef = useRef(null);

    return (
        <CSSTransition nodeRef={nodeRef} in={isShow === true} classNames={slideTransition} timeout={200} unmountOnExit >
            <div className={classes.wrapper} ref={nodeRef}>
                <div className={classes.text_wrapper}>
                    <h1>答對勒</h1>
                </div>
                <div className={classes.img_wrapper}>
                    <Image 
                        src="/good_face.png"
                        alt="pic" 
                        width="200px" 
                        height="200px" 
                    />
                </div>
                <div className={classes.btn_wrapper}>
                    <button 
                        className="button is-large is-responsive is-hovered"
                        onClick={currCard !== 9 ? handleNext : handleGoResult}
                    >
                        <Image src="/hand.png" alt="go" width="20px" height="20px"/>
                        &ensp;
                        {currCard !== 9 ? '下一題' : '看結果'}
                    </button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Good;