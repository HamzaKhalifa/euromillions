import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  gamePage: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameContainer: {
    backgroundColor: '#F0F0F9',
    display: 'flex',
    flexDirection: 'column',
    width: '750px',
    height: '308px'
  },
  gameHeader: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',
    marginBottom: '20px'
  },
  gridTitle: {
    fontSize: '13px',
    marginLeft: '10px',
    marginTop: '10px',
    marginBottom: '0px',
    fontWeight: '1000',
  },
  gameContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    textAlign: 'center',
    maxWidth: '70%'
  }
})

export default useStyles