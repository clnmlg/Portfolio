import { Fade } from 'react-awesome-reveal'
import styles from '/pages/home/home.module.scss'
export default function Custom404() {
  return (
    <div style={{backgroundColor: '#1A1A1A', width: '100vw', height:'100vh'}}>
      <br></br><h1>Yes, that's the famous 404.</h1>
      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <div className={styles.linkBox}>
            <Fade>
              <h2 className={styles.linkBoxTextContent}>
                <a href={`/`} className={styles.linkBoxButton}>Home</a>
              </h2>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}