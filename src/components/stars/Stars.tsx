
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaStar } from 'react-icons/fa'

import { selectStarNumber } from 'src/store/game/actions'

import { State } from 'src/store/types'

import useStyles from './styles'

interface IStars {

}
const Stars = (props: IStars) => {
  const {} = props

  //#region State
  const selectedStarNumber: any = useSelector<State>(state => state.game.playerData.starNumber)
  //#endregion State
  
  //#region Hooks
  const styles: any = useStyles({})
  const dispatch = useDispatch()
  //#endregion Hooks

  //#region Event handlers
  const handleStarNumberClick = React.useCallback((starNumber) => dispatch(selectStarNumber(starNumber)), [])
  //#endregion Event handlers

  return (
    <div className={styles.starsContainer}>

      {/* Rows */}
      {Array(4).fill(0).map((_, rowIndex) => (
        <div key={rowIndex} className={styles.row}>

          {/* Columns */}
          {Array(3).fill(0).map((_, columnIndex) => {
            const starNumber = (rowIndex * 3) + (columnIndex + 1)

            return (
              <div 
                key={columnIndex} 
                className={styles.starNumberContainer}
                onClick={() => handleStarNumberClick(starNumber)}
              >
                <FaStar 
                  size={36}
                  color={starNumber === selectedStarNumber ? '#F2B95E' : 'white'} 
                />

                <span className={styles[starNumber === selectedStarNumber ? 'selectedStarNumber' : 'starNumber']}>{starNumber}</span>
              </div>
            )

          })}
        </div>
      ))}
    </div>
  )
}

export default Stars