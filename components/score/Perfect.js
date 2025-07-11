import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'
import { picAppleGold } from '../../data/imgs'
import fadeTransition from '../../styles/transitions/fade.module.css'
import classes from './Perfect.module.css'

export default function Perfect() {
  const router = useRouter()

  const nodeRef = useRef(null)

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setIsShow(!isShow)
  }, [])

  const photoArr = Array(9)
    .fill()
    .map((_, i) => i + 1)

  const onPerfectPage = (element) => {
    setIsShow(!isShow)
    setTimeout(() => {
      router.push(`/perfect-marks/${element}`)
    }, 300)
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isShow}
      classNames={fadeTransition}
      timeout={800}
      unmountOnExit
    >
      <div className={classes.wrapper} ref={nodeRef}>
        <div>
          <h1>哇賽金蘋果欸</h1>
          <h2>&#40;應該是有驚喜啦&#41;</h2>
        </div>
        <div className={classes.apples}>
          {photoArr.map((element) => {
            return (
              <div key={element} className={classes.img_wrapper}>
                {element !== 5 ? (
                  <Image
                    src={picAppleGold}
                    alt={element}
                    objectFit="cover"
                    layout="fill"
                    onClick={() => onPerfectPage(element)}
                  />
                ) : (
                  <div className={classes.pick}>
                    <div>挑一顆</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </CSSTransition>
  )
}
