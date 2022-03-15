import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project41</title>
        <meta property="og:title" content="New Project41" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>Hello! :)</h1>
      </div>
      <AppComponent heading="ertyuio" text="qsdqsdsq"></AppComponent>
    </div>
  )
}

export default Home
