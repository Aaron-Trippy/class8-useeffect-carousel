import Link from "next/link"
import { useEffect, useState } from "react"
import Home from "../components/home"
import styles from '@/styles/UseEffectThree.module.css'

export default function UseEffectThree() {
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return (
        <>
        <main className={styles.main}>
        <Home />
        <h1>
            useEffectThree
        </h1>
        <div className={styles.content}>
            {value}
        </div>
        <div>
            <button className={styles.increment} onClick={() => setNumber(number + 1)}>Click me</button>
        </div>
        </main>
        </>
    )
}