import { VIcon } from './icon'
import {
  linkedInLogo,
  linkedInLogoHover,
  gitHubLogo,
  gitHubLogoHover
} from '../assets'
import styles from './footer.module.scss'

export function VFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goUpSquare}/>
      <h4 className={styles.copyrights}>
        ©2022
        <br/>
        Build with <span>Next.js/TypeScript ❤️ </span>
      </h4>
      <div className={styles.icons}>
        <VIcon
          defaulIcon={linkedInLogo}
          onHoverIcon={linkedInLogoHover}
          href="https://www.linkedin.com/in/colin-mora-le-gac-b0077344"
          height="40px"
          width="40px"
          name="LinkedIn"/>
        <VIcon
          defaulIcon={gitHubLogo}
          onHoverIcon={gitHubLogoHover}
          href="https://github.com/clnmlg"
          height="40px"
          width="40px"
          name="GitHub"/>
      </div>
    </footer>
  )
}