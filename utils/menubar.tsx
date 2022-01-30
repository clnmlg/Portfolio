import Link from 'next/link'
import { logo } from '../assets'
import styles from './menubar.module.scss'
import Image from 'next/image';

type MenuBarProps = {
  activeTab: "Home"
}


export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
          <Image src={logo} height={50} width={50} alt='' />
          <h2 className={styles.name}>
              Colin MLG
          </h2>
        </a>
      </Link>
    </nav>
  )
}