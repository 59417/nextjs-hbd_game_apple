import Image from 'next/image'
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
            <Image src="/apple_icon2.png" alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src="/apple_icon.png" alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src="/apple_icon3.png" alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src="/apple_icon.png" alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <Image src="/apple_icon4.png" alt="banner" style={{ objectFit: 'contain' }} fill />
          </div>
        </div>
      </div>
      <main className={classes.main}>{children}</main>
    </div>
  )
}
