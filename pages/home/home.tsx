import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Fade} from "react-awesome-reveal"
import { VFooter, VMainHeader, VMenuBar, VToolsTech } from '../../utils'
import {chevronDown} from '../../assets'
import styles from './home.module.scss'

export default function VHome() {

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Colin MLG</title>
        <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
        <meta name="author" content="Colin MLG"/>
        <meta name="keywords" content="Colin, MLG, Portfolio, Frontend, Backend"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Home"/>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader/>
          </div>
          <div className={styles.swipeDownIcon}>
            <Image
              alt="Chevron down icon."
              src={chevronDown}
              width="40px"
              height="15px"/>
          </div>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
            <Fade>
              <h1 className={styles.linkBoxTitle}>Resume</h1>
              <h2 className={styles.linkBoxTextContent}>
                Here you can find out more about projects
                I've been part of and technologies I use every day.</h2>
              <a href= "https://i.stack.imgur.com/OCysR.png" download className={styles.linkBoxButton}>Download my Resume</a>
              
            </Fade>
          </div>
          <div className={styles.workHistoryBackground}/>
        </div>
        <div className={styles.technologiesAndTools}>
          <Fade>
            <h1>Technologies & Tools</h1>
            <VToolsTech/>
          </Fade>
        </div>
        <div className={styles.personalProjects}>
            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle}>Contact</h1>
                <h2 className={styles.linkBoxTextContent}>For dev missions or any other request, do not hesitate to send me an email.</h2>
                  <a href="mailto:colin.mlg@posteo.net" className={styles.linkBoxButton}>email</a>
              </Fade>
            </div>
          <div className={styles.personalProjectsBackground}/>
        </div>
      </div>
      <VFooter/>
    </div>
  )
}
