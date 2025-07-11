import Image from 'next/image'
import { picApples } from '../../data/imgs'
import classes from './Apples.module.css'

export default function Apples({ ref }) {
  return (
    <div ref={ref} className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <Image src={picApples} alt="apples" objectFit="cover" layout="fill" />
      </div>
    </div>
  )
}
