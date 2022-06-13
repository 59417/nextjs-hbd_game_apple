import Image from 'next/image';
import { useRouter } from 'next/router';
import classes from './Title.module.css';

function Title(props) {

    const setIsShow = props.show;

    const router = useRouter();
    function getStart() {
        setIsShow(false);
        // push after animate end
        setTimeout(() => {
              router.push('/');
        }, 1000);
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <Image 
                    src="/title.png"
                    alt="go" 
                    objectFit='cover' 
                    layout="fill" 
                />
            </div>
            <div className={classes.content}>
                <h1>Hi~歡迎來到</h1>
                <h1>
                    <div><Image src="/hand.png" alt="go" width="24px" height="24px"/></div>
                    <span>蘋果菜果園</span>&#9787;
                </h1>
                <p>
                    接下來是一連串ㄉ<br/>
                    採蘋果大考驗<br/>
                    準備好ㄌ就按下開始ㄅ！
                </p>
            </div>
            <div className={classes.btn_wrapper}>
                <button className="button is-light is-rounded" onClick={getStart}>
                    <p>開始採收</p>
                    <Image src="/apple_index.png" alt="go" width="45px" height="40px"/>
                </button>
            </div>
        </div>
    );
};

export default Title;