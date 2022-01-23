import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hi All,", 50)}
        <br/>
        {useTypedText("I'm Colin.", 50, 200)}
      </h1>
      <h2>
        {useTypedText("Fullstack Developer student & Content Creator, currently working on Flutter & React", 30, 350)}
      </h2>
    </div>
  )
}