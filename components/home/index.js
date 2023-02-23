import Link from 'next/link'
import styles from '@/components/home/Home.module.css'

export default function Home () {
    return(
        <>
        <Link href="/"><h3 className={styles.link}>Home</h3></Link>
        </>
    )
}