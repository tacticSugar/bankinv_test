import React, { ReactNode } from 'react'

import './Card.scss'

type CardProps = {
  className: string
  children: ReactNode
}

const Card = (props: CardProps) => {
  const classes = 'card ' + props.className

  return <div className={classes}>{props.children}</div>
}

export default Card
