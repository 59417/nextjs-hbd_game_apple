import Image from 'next/image'
import * as imgs from '../../data/imgs'

export default function PreloadImages() {
  const imgArr = Object.values(imgs)
    .flat()
    .filter((src) => typeof src === 'string' && src !== '')

  return (
    <div>
      {imgArr.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt=""
          width={1}
          height={1}
          priority
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
        />
      ))}
    </div>
  )
}
