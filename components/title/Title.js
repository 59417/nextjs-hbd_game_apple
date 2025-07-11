import { useRouter } from 'next/router'
import Image from 'next/image'
import { txtTitle, iconHand, picAppleIdx } from '../../data/imgs'
import classes from './Title.module.css'

export default function Title({ show: setIsShow, ref }) {
  const router = useRouter()

  const getStart = () => {
    setIsShow(false)
    // push after animate end
    setTimeout(() => router.push('/quiz'), 1000)
  }

  return (
    <div ref={ref} className={classes.wrapper}>
      <div className={classes.title}>
        <Image src={txtTitle} alt="go" objectFit="cover" layout="fill" />
      </div>
      <div className={classes.content}>
        <h1>Hi~歡迎來到</h1>
        <h1>
          <div>
            <Image src={iconHand} alt="go" width={24} height={24} />
          </div>
          <span>蘋果菜果園</span>&#9787;
        </h1>
        <p>
          接下來是一連串ㄉ
          <br />
          採蘋果大考驗
          <br />
          準備好ㄌ就按下開始ㄅ！
        </p>
      </div>
      <div className={classes.btn_wrapper}>
        <button className="button is-light is-rounded" onClick={getStart}>
          <p>開始採收</p>
          <Image src={picAppleIdx} alt="go" width={45} height={40} />
        </button>
      </div>
    </div>
  )
}
