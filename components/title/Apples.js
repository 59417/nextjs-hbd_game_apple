import Image from 'next/image'
import classes from './Apples.module.css'

export default function Apples({ ref }) {
  return (
    <div ref={ref} className={classes.wrapper}>
      <div className={classes.img_wrapper}>
        <Image src="/apples.png" alt="apples" objectFit="cover" layout="fill" />
      </div>
    </div>
  )
}
