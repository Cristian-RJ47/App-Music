import styles from '../components/Home.module.css'

export const Home = () => {
  return (
    <>
        <div className={styles.body}>
            <div className={styles.container}>
                <h1 className={styles.title}>Escucha tu musica favorita</h1>
                <p className={styles.subtitle}>Kodigo Music</p>
            </div>
        </div>
    </>
  )
}