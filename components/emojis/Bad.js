import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import slideTransition from '../../styles/transitions/slide.module.css'
import classes from './Emoji.module.css'

export default function Bad({
  in: isShow,
  handle_next: handleNext,
  curr_card: currCard,
  path: resultPath,
}) {
  const router = useRouter()

  const handleGoResult = () => router.push(`/${resultPath.path}`)

  const nodeRef = useRef(null)

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
          <h1>錯了餒</h1>
        </div>
        <div className={classes.img_wrapper}>
          <Image src="/bad_face.png" alt="pic" width={150} height={150} />
        </div>
        <div className={classes.btn_wrapper}>
          <button
            className="button is-large is-responsive is-hovered"
            onClick={currCard !== 9 ? handleNext : handleGoResult}
          >
            <Image src="/hand.png" alt="go" width={20} height={20} />
            &ensp;
            {currCard !== 9 ? '下一題' : '看結果'}
          </button>
        </div>
      </div>
    </CSSTransition>
  )
}
