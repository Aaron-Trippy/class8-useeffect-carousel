import Link from 'next/link'
import Carousel from '../components/carousel'
import Home from "../components/home"
import styles from '@/styles/CarouselPage.module.css'

export default function CarouselPage() {
    return(
        <>
        <main className={styles.main}>
        <Home />
        <Carousel />
        </main>
        </>
    )
}