import styles from './styles.module.css'
import YoutubeComponent from './youtubePlayerComponent/youtubeComponent'

export default function DashboardComponent() {
    return(
        <div style={styles}>
            <div className={styles.dashboardMain}>
                <div className={styles.father}>
                    <video src="/background.mp4" autoPlay muted loop className={styles.video}></video>
                    <div className={styles.content}>
                    <div className="container-fluid text-center">
                        <div className="row">
                            <div className="col-md-8">
                                2 of 3
                            </div>
                            <div className="col-md-4">
                                <div className='youtube'>
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}