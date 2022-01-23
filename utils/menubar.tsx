import Link from 'next/link'
import styles from './menubar.module.scss'

type MenuBarProps = {
  activeTab: "Home"
}

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
          <div className={styles.squareInitials}>
            C
          </div>
          <h3 className={styles.name}>
            Colin MLG
        </h3>
        </a>
      </Link>
    </nav>
  )
}