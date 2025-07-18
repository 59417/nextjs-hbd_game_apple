import { useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'
import { faceGood, iconHand } from '../../data/imgs'
import slideTransition from '../../styles/transitions/slide.module.css'
import classes from './Emoji.module.css'

export default function Good({
  in: isShow,
  handle_next: handleNext,
  curr_card: currCard,
  path: resultPath,
}) {
  const nodeRef = useRef(null)

  const router = useRouter()

  const onResult = () => router.push(`/${resultPath.path}`)

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isShow === true}
      classNames={slideTransition}
      timeout={200}
      unmountOnExit
    >
      <div className={classes.wrapper} ref={nodeRef}>
        <div className={classes.text_wrapper}>
          <h1>答對勒</h1>
        </div>
        <div className={classes.img_wrapper}>
          <Image src={faceGood} alt="pic" width={150} height={150} />
        </div>
        <div className={classes.btn_wrapper}>
          <button
            className="button is-large is-responsive is-hovered"
            onClick={currCard !== 9 ? handleNext : onResult}
          >
            <Image src={iconHand} alt="go" width={20} height={20} />
            &ensp;
            {currCard !== 9 ? '下一題' : '看結果'}
          </button>
        </div>
      </div>
    </CSSTransition>
  )
}
