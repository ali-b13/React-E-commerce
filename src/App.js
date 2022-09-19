import React, { useState } from 'react'
import store from './redux/Store'
import { Provider } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux'
import { BrowserRouter as Router  } from 'react-router-dom'
import MainRouter from './routes/MainRoutes'
const App = () => {
  return (
    <Provider store={store}>
   <Router>
    <MainRouter/>
   </Router>
    </Provider>
  )
}

export default App