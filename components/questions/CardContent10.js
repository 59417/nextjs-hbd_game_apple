import Image from 'next/image'
import { useState } from 'react'
import { Fragment } from 'react'
import classes from './CardContent10.module.css'
// import { QA } from '../../data/data';

export default function CardContent10({
  question: ques, // { id, title, content, options, imgs, orders, ans }
  curr_selected: currSelected, // 1,2,3,4
  handle_select: handleSelect, // func
}) {
  const [currInput, setCurrInput] = useState(null) // input: { dirty: true/false, clean: null }

  const handleChange = (event) => {
    const typing = event.target.value
    if (typing) {
      if (typing.toUpperCase().replace(/\s/g, '') === ques.princess) {
        if (currInput !== true) {
          setCurrInput(true)
          handleSelect(1) // setCurrSelected(1) === ques.ans
        }
      } else {
        if (currInput !== false) {
          setCurrInput(false)
          handleSelect(2) // setCurrSelected(2) !== ques.ans
        }
      }
    } else {
      setCurrInput(null)
      handleSelect(0) // setCurrSelected(0) disable confirm btn
    }
  }

  return (
    <Fragment>
      <div className={classes.question}>
        <div className={classes.title}>
          <h1>{ques.title}</h1>
        </div>
        <div className={classes.content}>
          <p>{ques.content}</p>
        </div>
        <div className={classes.img_10}>
          <Image src={ques.imgs[0]} alt="pic" width={240} height={330} />
        </div>
        <div className={classes.img_bottom}></div>
      </div>
      <div className={classes.inputans}>
        <input
          className="input is-danger"
          type="text"
          placeholder="輸入公主英文名字"
          onChange={handleChange}
          style={{ fontSize: '0.8em' }}
        />
      </div>
    </Fragment>
  )
}
