import Image from 'next/image'
import { iconApple1, iconApple2, iconApple3, iconApple4 } from '../../data/imgs'
import classes from './Layout.module.css'

export default function Layout({ children }) {
  // const date = new Date()
  // const nowTime = date.getSeconds()
  // console.log('Welcome!', nowTime)

  return (
    <div className={classes.container}>
      <div className={classes.text}>請移至手機裝置</div>
      <div className={classes.banner}>
        <div className={classes.apples}>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src={iconApple2} alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src={iconApple1} alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src={iconApple3} alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src={iconApple1} alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src={iconApple4} alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
        </div>
      </div>
      <main className={classes.main}>{children}</main>
    </div>
  )
}
