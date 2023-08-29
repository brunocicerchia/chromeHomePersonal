import styles from './styles.module.css'

export default function DashboardComponent() {
    return(
        <div style={styles}>
            <div className={styles.dashboardMain}>
                <div className={styles.father}>
                    <video src="/background.mp4" autoPlay muted loop className={styles.video}></video>
                    <div className={styles.content}>
                        <h1 className={styles.title}>HOLA</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}