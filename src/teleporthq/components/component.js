import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles['container']}>
      <img
        src={props.image_src}
        alt={props.image_alt}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <h2 className={styles['text']}>{props.heading}</h2>
        <span>{props.text}</span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1647331910296-eb81d067d77c?ixid=Mnw5MTMyMXwwfDF8YWxsfDR8fHx8fHwyfHwxNjQ3MzM5MjE5&ixlib=rb-1.2.1&w=400',
  image_alt: 'image',
  heading: 'Text',
  text: 'Text',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default AppComponent
