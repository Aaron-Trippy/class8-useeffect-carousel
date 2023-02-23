import Link from "next/link"
import Home from "../components/home"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

  return (
    <>
    <main className={styles.main}>
      <Home />
      <h1>
        useEffectOne
      </h1>
      <div className={styles.content}>
        {number}
      </div>
    </main>
    </>
  )
}