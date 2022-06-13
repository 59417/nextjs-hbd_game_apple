import Image from 'next/image';
import { useRouter } from 'next/router';
import classes from './CustomizedCard.module.css';


function CustomizedCard(props) {
    
    const photoId = props.photo;

    const router = useRouter();
    function goAllPostcards() {
        router.push('/perfect-marks/all-postcrad')
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.head}>
                <div className="columns is-multiline is-mobile" style={{margin: '0 0 1rem 0'}}>
                    <div className="column is-one-fifth" style={{padding: '0 1rem'}}>
                        <figure className="image is-64x64">
                            <Image className="is-rounded" src='/17icon.png' alt="postcard"  objectFit='cover' layout="fill" />
                        </figure>
                    </div>
                    <div className="column is-three-fifths" style={{padding: '0 1rem'}}>
                        <h4 className="title is-4" style={{marginBottom: '0.5rem'}}>
                            17大正妹
                            <span style={{fontWeight: 300, fontSize: '0.8rem', marginLeft: '0.5rem'}}>6月8日</span>
                        </h4>
                        <p>寄給我&ensp;
                            <span style={{display: 'inline-block', transform: 'scale(2, 1)', fontWeight: 200, fontSize: '0.8rem'}}>v</span>
                        </p>
                    </div>
                    <div className="column" style={{padding: '1rem 1rem 0 0', transform: 'scaleY(-1)', fontSize: '2rem', textAlign: 'right'}}>
                        &crarr;
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <div className={classes.img_wrapper}>
                        <figure className="image is-3by2">
                                <Image 
                                    src={`/pics/apple/apple${photoId}.JPG`}
                                    alt="card" 
                                    objectFit='cover' 
                                    layout="fill" 
                                />
                        </figure>
                    </div>
                </div>
                <div className={classes.content_wrapper}>
                    <div className="card-content" style={{padding: '0.8rem'}}>
                        <div className="media">
                            <div className="media-content">
                                <h5 className="title is-5" style={{marginBottom: '0.5rem'}}>Dear 蘋果菜</h5>
                                <p>
                                    &ensp;&ensp;
                                    基於我不相信妳會一次全對，
                                    所以先恭喜妳解鎖生日賀卡哈哈.
                                    照片超多超難選ㄉ啦！!
                                    在我待業漂泊ㄉ這期間有妳隨時揪出門、
                                    經歷瘋狂荒謬ㄉ事，
                                    真ㄉ留下ㄌ各種美好回憶❤️
                                    打這樣應該不會太噁ㄅ哈哈
                                    總之蒐集到25顆蘋果ㄉ25歲蘋果生快！
                                    願&ensp;<a>#一切安好</a>&ensp;<a>#越來越快樂🤓</a>
                                    &ensp;by&ensp;17
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.btn_wrapper}>
                <div className="buttons">
                    <button className="button is-success is-light" onClick={goAllPostcards}>
                        <Image src="/unlock.png" alt="go" width="14px" height="18px"/>
                        解鎖所有明信片
                    </button>
                    <button className="button is-info is-light" onClick={() => router.back()}>&#8634;&ensp;重新挑選金蘋果</button>
                </div>
            </div>
        </div>
    );
};

export default CustomizedCard;