import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  starsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
    width: '130px',
    marginRight: '40px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '14px'
  },
  starNumberContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    fontSize: '30px'
  },
  starNumber: {
    color: '#F2B95E',
    fontWeight: 'bold',
    fontSize: '17px',
    position: 'absolute',
    top: '11px',
  },
  selectedStarNumber: {
    extend: 'starNumber',
    color: 'white'
  }

})

export default useStyles