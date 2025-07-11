import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import fadeTransition from '../../styles/transitions/fade.module.css'
import classes from './Blank.module.css'

export default function Blank({ in: isShow }) {
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isShow !== null}
      classNames={fadeTransition}
      timeout={800}
      unmountOnExit
    >
      <div className={classes.blank} ref={nodeRef}></div>
    </CSSTransition>
  )
}
