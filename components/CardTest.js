import { useState } from 'react'
import Image from 'next/image'
import CardContent10 from './CardContent10'
import { QA } from '../data/data'
import { iconCheck } from '../data/imgs'
import classes from './Card.module.css'

export default function CardTest() {
  const [currSelected, setCurrSelected] = useState(0)

  const handleSelect = (id) => {
    if (currSelected !== id) setCurrSelected(id)
    else setCurrSelected(0)
  }

  return (
    <div className={classes.container}>
      <CardContent10 question={QA[9]} curr_selected={currSelected} handle_select={handleSelect} />
      <div className={classes.confirm}>
        <button
          className="button is-success is-outlined"
          disabled={currSelected !== 0 ? false : true}
        >
          確認&ensp;
          <Image src={iconCheck} alt="01" width={15} height={15} />
        </button>
      </div>
    </div>
  )
}
