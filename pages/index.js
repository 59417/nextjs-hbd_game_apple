import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const onStart = () => router.push('/welcome')

  useEffect(() => {
    setTimeout(() => onStart(), 5000)
  }, [])

  return <></>
}
