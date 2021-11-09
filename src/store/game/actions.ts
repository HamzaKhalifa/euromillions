import axios from 'axios'

import { 
  SET_MATRICE,
  SET_LOADING,
  SET_ERROR,

  SELECT_GRID_NUMBER,
  SELECT_STAR_NUMBER
} from './actionTypes'

import rawData from './rawData.json'

//#region Matrice initialization
export const setMatrice = (matrice: any) => ({ type: SET_MATRICE, payload: matrice })

export const setError = (error) => ({ type: SET_ERROR, payload: error })

export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading })

export const requestMatrice = () => (dispatch) => {
  dispatch(setLoading(true))
  
  axios.get(process.env.REACT_APP_REST_API_URL + '/euromillions').then(_ => {
    dispatch(setError(''))

    // I couldn't get the data because of a 403 fobidden CORS error. CORS related problems can be fixed in the backend.
    // Here, I should dispatch the result of my request in a similar way I'm doing it in the below catch scope with the raw json data.

  }).catch(error => {
    // The Same Origin Policy disallows reading the remote resource at https://www.fdj.fr/apigw/rtg/rest/euromillions
    // We get the raw data instead
    dispatch(setError(error.message))
    dispatch(setMatrice(rawData.multiples))
  }).finally(() => {
    dispatch(setLoading(false))
  })
}
//#endregion Matrice initialization

//#region In Game actions
export const selectGridNumber = (gridNumber: number) => ({ type: SELECT_GRID_NUMBER, payload: gridNumber })

export const selectStarNumber = (starNumber: number) => ({ type: SELECT_STAR_NUMBER, payload: starNumber })
//#endregion In Game actions 