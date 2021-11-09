import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
    width: '460px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '17px'
  },
  gridNumber: {
    width: '30px',
    height: '30px',
    backgroundColor: 'white',
    color: '#294081',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '17px',
  },
  selectedGridNumber: {
    extend: 'gridNumber',
    backgroundColor: '#294081',
    color: 'white',
  }
})

export default useStyles