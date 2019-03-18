import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
  {props.sushi.map(sushi =>  <Sushi key={sushi.id} sushi={sushi} payForSushi={props.payForSushi} moneyRemaining={props.moneyRemaining} eaten={props.dirtyPlates.includes(sushi)} />)}
        <MoreButton getSushi={props.getSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer