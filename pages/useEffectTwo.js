import Link from "next/link"
import { useEffect, useState } from "react"
import Home from "../components/home"
import styles from '@/styles/UseEffectTwo.module.css'

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50)
    }, [])
    return (
    <>
    <main className={styles.main}>
      <Home />
      <h1>
        useEffectTwo
      </h1>
      <div className={styles.content}>
        {number}
      </div>
    </main>
    </>
  )
}