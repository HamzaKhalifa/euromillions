
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectGridNumber } from 'src/store/game/actions'

import { State } from 'src/store/types'

import useStyles from './styles'

interface IGrid {

}
const Grid = (props: IGrid) => {
  const {} = props

  //#region State
  const selectedGridNumber: any = useSelector<State>(state => state.game.playerData.gridNumber)
  //#endregion State
  
  //#region Hooks
  const styles: any = useStyles({})
  const dispatch = useDispatch()
  //#endregion Hooks

  //#region Event handlers
  const handleGridNumberClick = React.useCallback((gridNumber) => dispatch(selectGridNumber(gridNumber)), [])
  //#endregion Event handlers

  return (
    <div className={styles.gridContainer}>

      {/* Rows */}
      {Array(5).fill(0).map((_, rowIndex) => (
        <div key={rowIndex} className={styles.row}>

          {/* Columns */}
          {Array(10).fill(0).map((_, columnIndex) => {
            const gridNumber = (rowIndex * 10) + (columnIndex + 1)

            return (
              <div 
                key={columnIndex} 
                className={styles[selectedGridNumber === gridNumber ? 'selectedGridNumber' : 'gridNumber']}
                onClick={() => handleGridNumberClick(gridNumber)}
              >
                {gridNumber}
              </div>
            )

          })}
        </div>
      ))}
    </div>
  )
}

export default Grid