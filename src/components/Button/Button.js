import React from 'react'
import style from './Button.module.scss'

const Button = ( { reverse, link, text="TAKE THE HAIR TEST", tm=true } ) => {
  return (
    <a href={link} className={style.btn + " " + `${reverse ? style.reverse : ''}`} style={style}>{text}{tm && <sup>TM</sup>}</a>
  )
}

export default Button