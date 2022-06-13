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
                                    基於我不相信妳會第一次就全答對，
                                    所以先恭喜妳解鎖生日賀卡哈哈哈.
                                    挑照片的時候發現我們真ㄉ去ㄌ好多地方，
                                    照片超難選！!
                                    但很慶幸妳都不會催我拍照XD
                                    在我待業漂泊ㄉ這段時期有妳隨時殼以揪出門、
                                    一起經歷些瘋狂荒謬ㄉ事，
                                    真ㄉ是留下ㄌ很美好ㄉ回憶❤️
                                    打這樣應該不會太噁心ㄅ哈哈
                                    總之恭喜妳蒐集到ㄌ25顆蘋果過25歲生日！
                                    祝&ensp;<a>#一切安好</a>&ensp;還要&ensp;<a>#越來越快樂🤓</a>
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
                        <Image src="/unlock.png" alt="go" width="20px" height="25px"/>
                        解鎖所有明信片
                    </button>
                    <button className="button is-info is-light" onClick={() => router.back()}>&#8634;&ensp;重新挑選金蘋果</button>
                </div>
            </div>
        </div>
    );
};

export default CustomizedCard;