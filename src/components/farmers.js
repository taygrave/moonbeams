import React from 'react'
import moment from 'moment'

import months from '../util/farmers'

const FarmersAlm = () => {
  const thisMonth = moment().month()
  const moon = months[thisMonth].moon
  const description = months[thisMonth].description

  return (
    <div>
      <h3>{moon}</h3>
      <p>{description}</p>
    </div>
  )
}

FarmersAlm.displayName = 'Almanac Info'

export default FarmersAlm
