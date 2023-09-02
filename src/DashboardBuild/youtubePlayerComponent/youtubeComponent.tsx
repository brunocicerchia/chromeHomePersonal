import styles from "./styles.module.css"

export default function YoutubeComponent() {
    return(
        <div className="">
            <div className="d-flex justify-content-center">
                <div className="col-md-6">
                    <img src="/woodenSign.png" className="img-fluid"></img>
                </div>
            </div>
            <div className="row">
                <div className={styles.pixelContainer}>
                    <iframe className="styles.video embed-responsive-item" src="https://www.youtube-nocookie.com/embed/4xDzrJKXOOY?si=eIfD6zYAvpZXFYI0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="styles.video embed-responsive-item" src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?si=NtyOUM05yf8TTMaL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}