import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Game from 'src/pages/game'

import store from 'src/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
