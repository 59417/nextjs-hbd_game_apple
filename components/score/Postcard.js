import Image from 'next/image';
import { useRouter } from 'next/router';
import classes from './Postcard.module.css';  
import { POSTCARD_DATA } from '../../data/data';


function Postcard(props) {

    // const currentPath = props.path;
    const score = props.score;
    const data = POSTCARD_DATA.find(obj => obj.id === score);
    
    const router = useRouter();
    function goHomepage() {
        router.push('/welcome')
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
                    <figure className="image is-3by2">
                        <Image 
                            src={`/pics/us/us${score-1}.JPG`}
                            alt="postcard" 
                            objectFit='cover' 
                            layout="fill" 
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <Image 
                                    src='/pics/me.JPG'
                                    alt="postcard" 
                                    objectFit='cover' 
                                    layout="fill" 
                                />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4" style={{letterSpacing: '2px'}}>17大正妹</p>
                            <p className="subtitle is-6">@YiChiDaJengMei</p>
                        </div>
                    </div>
                    <div className="content">
                        {data.content}
                        <br/>
                        <a>#HBD&ensp;</a>
                        <a>#25Y老人&ensp;</a>
                        <a>{data.hashtags[0]}&ensp;</a>
                        <a>{data.hashtags[1]}</a>
                        <br/>
                        <br/>
                        <p>{data.timestamp}</p>
                    </div>
                </div>
            </div>
            <div className={classes.btn_wrapper}>
                <button className="button is-info is-light" onClick={goHomepage}>
                    <p>&#8634;&ensp;再採一次蘋果</p>
                </button>
            </div>
        </div>
    );
};

export default Postcard;